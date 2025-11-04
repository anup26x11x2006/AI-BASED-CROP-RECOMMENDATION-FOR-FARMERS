import { Card } from "@/components/ui/card";
import { Database, Settings, Brain, CheckCircle } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gathered 2200+ instances with 7 key parameters: N, P, K, temperature, humidity, pH, and rainfall",
      features: ["N-P-K soil content", "Climate data", "pH levels", "22 crop types"],
    },
    {
      icon: Settings,
      title: "Pre-processing",
      description: "Cleaned and prepared data for optimal model training",
      features: ["Missing value handling", "Label encoding", "80-20 train-test split", "Feature scaling"],
    },
    {
      icon: Brain,
      title: "Model Training",
      description: "Trained and compared multiple ML algorithms for best performance",
      features: ["Random Forest", "Decision Tree", "SVM", "K-Nearest Neighbors"],
    },
    {
      icon: CheckCircle,
      title: "Evaluation",
      description: "Validated models and selected Random Forest for 99.3% accuracy",
      features: ["Accuracy metrics", "Cross-validation", "Model selection", "Performance optimization"],
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Methodology
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to building an accurate recommendation system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-primary">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="pl-16 space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Technologies Used
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "Flask",
                  "HTML/CSS",
                  "JavaScript",
                  "Bootstrap",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
