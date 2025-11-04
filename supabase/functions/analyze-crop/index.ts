import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64 } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are an expert agricultural AI assistant. Analyze crop images and provide detailed information in JSON format with these fields:
{
  "cropType": "Name of the crop or 'Unknown' if cannot identify",
  "confidence": "High/Medium/Low",
  "healthStatus": "Healthy/Needs Attention/Critical",
  "healthScore": number from 0-100,
  "observations": ["list of visible observations about the crop"],
  "growthSuggestions": ["actionable suggestions to improve growth"],
  "potentialDiseases": [{"name": "disease name", "probability": "High/Medium/Low", "symptoms": "visible symptoms"}],
  "treatment": ["treatment recommendations if diseases detected"],
  "generalAdvice": "general advice for this crop"
}`
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please analyze this crop image and provide detailed information about crop type, health status, diseases, and recommendations."
              },
              {
                type: "image_url",
                image_url: {
                  url: imageBase64
                }
              }
            ]
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const analysisText = data.choices?.[0]?.message?.content;
    
    // Extract JSON from markdown code blocks if present
    let analysisJson;
    try {
      const jsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/) || analysisText.match(/```\n([\s\S]*?)\n```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : analysisText;
      analysisJson = JSON.parse(jsonStr);
    } catch (e) {
      console.error("Failed to parse AI response as JSON:", e);
      analysisJson = {
        cropType: "Unknown",
        confidence: "Low",
        healthStatus: "Needs Analysis",
        healthScore: 50,
        observations: [analysisText],
        growthSuggestions: ["Please consult with an agricultural expert for detailed analysis."],
        potentialDiseases: [],
        treatment: [],
        generalAdvice: analysisText
      };
    }

    return new Response(JSON.stringify(analysisJson), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in analyze-crop function:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to analyze crop image";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
