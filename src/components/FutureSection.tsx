import { Card } from "@/components/ui/card";
import { Smartphone, Cloud, Leaf, TrendingUp, Camera, DollarSign } from "lucide-react";

const FutureSection = () => {
  const futureEnhancements = [
    {
      icon: Cloud,
      title: "Real-Time Weather Integration",
      description: "Connect to weather APIs for live temperature, humidity, and rainfall data",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Develop dedicated Android/iOS apps for greater accessibility",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Leaf,
      title: "Fertilizer Recommendation",
      description: "Expand the system to suggest optimal fertilizer type and quantity",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Camera,
      title: "Disease Detection",
      description: "Integrate image recognition to identify crop diseases from leaf photos",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: DollarSign,
      title: "Market Price Analysis",
      description: "Include market demand and price trends for economically viable recommendations",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      title: "Yield Prediction",
      description: "Predict expected crop yield based on historical data and conditions",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="future" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Future Enhancements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expanding capabilities to create a comprehensive agricultural ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEnhancements.map((enhancement, index) => {
              const Icon = enhancement.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl ${enhancement.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${enhancement.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {enhancement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {enhancement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Vision for the Future
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our goal is to create a comprehensive agricultural intelligence platform that
                combines crop recommendation, disease detection, market analysis, and resource
                optimization. By integrating IoT sensors, satellite imagery, and advanced AI
                models, we aim to make precision agriculture accessible to every farmer,
                regardless of their technical expertise.
              </p>
              <div className="pt-4">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-semibold">
                  Empowering Sustainable Agriculture Through AI
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
