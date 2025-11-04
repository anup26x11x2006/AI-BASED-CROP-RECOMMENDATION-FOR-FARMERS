import { useState, useRef } from "react";
import { Camera, Upload, Loader2, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";

interface CropAnalysis {
  cropType: string;
  confidence: string;
  healthStatus: string;
  healthScore: number;
  observations: string[];
  growthSuggestions: string[];
  potentialDiseases: Array<{
    name: string;
    probability: string;
    symptoms: string;
  }>;
  treatment: string[];
  generalAdvice: string;
}

const CropScanner = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CropAnalysis | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeCrop = async () => {
    if (!selectedImage) return;

    setAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke("analyze-crop", {
        body: { imageBase64: selectedImage },
      });

      if (error) throw error;

      setAnalysis(data);
      toast({
        title: "Analysis Complete",
        description: "Crop analysis has been completed successfully.",
      });
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: error.message || "Failed to analyze the crop image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const getHealthIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "healthy":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "needs attention":
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case "critical":
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              AI Crop Scanner
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload or capture a photo of your crop to get instant AI-powered analysis, health assessment, and recommendations
            </p>
          </div>

          {/* Image Upload Section */}
          <Card className="p-8">
            <div className="space-y-6">
              {!selectedImage ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex gap-4">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageCapture}
                      className="hidden"
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      size="lg"
                      className="gap-2"
                    >
                      <Camera className="w-5 h-5" />
                      Take Photo
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageCapture}
                      className="hidden"
                      id="upload-file"
                    />
                    <Button
                      onClick={() => document.getElementById("upload-file")?.click()}
                      size="lg"
                      variant="outline"
                      className="gap-2"
                    >
                      <Upload className="w-5 h-5" />
                      Upload Image
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    For best results, capture a clear image of the crop leaves in good lighting
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Selected crop"
                    className="w-full max-h-96 object-contain rounded-lg border"
                  />
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={analyzeCrop}
                      disabled={analyzing}
                      size="lg"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        "Analyze Crop"
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedImage(null);
                        setAnalysis(null);
                      }}
                      variant="outline"
                      size="lg"
                    >
                      Choose Different Image
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              {/* Crop Identification */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Crop Identification</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Crop Type</p>
                    <p className="text-2xl font-bold text-primary">{analysis.cropType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Confidence Level</p>
                    <p className="text-2xl font-semibold">{analysis.confidence}</p>
                  </div>
                </div>
              </Card>

              {/* Health Assessment */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Health Assessment</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {getHealthIcon(analysis.healthStatus)}
                    <div>
                      <p className="text-sm text-muted-foreground">Health Status</p>
                      <p className="text-xl font-semibold">{analysis.healthStatus}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Health Score</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-4">
                        <div
                          className={`h-full rounded-full transition-all ${
                            analysis.healthScore >= 80
                              ? "bg-green-500"
                              : analysis.healthScore >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${analysis.healthScore}%` }}
                        />
                      </div>
                      <span className={`text-2xl font-bold ${getHealthColor(analysis.healthScore)}`}>
                        {analysis.healthScore}%
                      </span>
                    </div>
                  </div>
                  {analysis.observations.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold mb-2">Observations</p>
                      <ul className="list-disc list-inside space-y-1">
                        {analysis.observations.map((obs, idx) => (
                          <li key={idx} className="text-muted-foreground">{obs}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>

              {/* Growth Suggestions */}
              {analysis.growthSuggestions.length > 0 && (
                <Card className="p-6 bg-green-50 dark:bg-green-950/20">
                  <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
                    Growth Suggestions
                  </h2>
                  <ul className="space-y-2">
                    {analysis.growthSuggestions.map((suggestion, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-green-900 dark:text-green-200">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Potential Diseases */}
              {analysis.potentialDiseases.length > 0 && (
                <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20">
                  <h2 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-300">
                    Potential Diseases Detected
                  </h2>
                  <div className="space-y-4">
                    {analysis.potentialDiseases.map((disease, idx) => (
                      <div key={idx} className="border-l-4 border-yellow-500 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-yellow-900 dark:text-yellow-200">
                            {disease.name}
                          </h3>
                          <span className="text-sm px-2 py-1 rounded-full bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200">
                            {disease.probability} probability
                          </span>
                        </div>
                        <p className="text-sm text-yellow-800 dark:text-yellow-300">
                          <span className="font-medium">Symptoms:</span> {disease.symptoms}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Treatment Recommendations */}
              {analysis.treatment.length > 0 && (
                <Card className="p-6 bg-blue-50 dark:bg-blue-950/20">
                  <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                    Treatment Recommendations
                  </h2>
                  <ul className="space-y-2">
                    {analysis.treatment.map((treatment, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-blue-900 dark:text-blue-200">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* General Advice */}
              {analysis.generalAdvice && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">General Advice</h2>
                  <p className="text-muted-foreground leading-relaxed">{analysis.generalAdvice}</p>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CropScanner;
