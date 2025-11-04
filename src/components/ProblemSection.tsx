import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Droplets, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Poor Yield",
      description: "Planting crops unsuited to soil or climate conditions leads to suboptimal harvests",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Droplets,
      title: "Soil Degradation",
      description: "Depletion of specific nutrients reduces long-term soil fertility",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: DollarSign,
      title: "Financial Loss",
      description: "Wasted investment in seeds, fertilizers, and labor due to poor crop selection",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: AlertTriangle,
      title: "Resource Mismanagement",
      description: "Inefficient use of water and fertilizers impacts sustainability",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional crop selection methods lead to significant challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${problem.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${problem.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Solution
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A <strong className="text-primary">data-driven system</strong> that analyzes environmental and soil
                parameters to recommend the best possible crop. Farmers input key parameters
                (N, P, K, pH, rainfall, temperature, humidity, location) through our web interface,
                and receive instant, accurate crop recommendations powered by advanced machine learning.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
