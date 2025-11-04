import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-agriculture-ai.jpg";

const HeroSection = () => {
  const stats = [
    { value: "99.3%", label: "Model Accuracy" },
    { value: "22", label: "Crop Types" },
    { value: "2200+", label: "Training Samples" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Bachelor of Technology • CSE • 2024-2025
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            AI-Based Crop
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Recommendation System
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Empowering farmers with machine learning to make data-driven decisions
            for optimal crop selection and sustainable agriculture
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              "Machine Learning",
              "Random Forest",
              "Precision Agriculture",
              "Soil Analysis",
              "Flask Web App",
            ].map((keyword) => (
              <Badge
                key={keyword}
                variant="secondary"
                className="bg-muted text-muted-foreground"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
