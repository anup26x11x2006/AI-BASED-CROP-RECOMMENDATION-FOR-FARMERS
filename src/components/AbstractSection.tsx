import { Card } from "@/components/ui/card";
import { FileText, Target, Lightbulb } from "lucide-react";

const AbstractSection = () => {
  return (
    <section id="abstract" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Project Overview
            </h2>
            <p className="text-xl text-muted-foreground">
              Bridging technology and agriculture for sustainable farming
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Abstract</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    The agricultural sector forms the backbone of the Indian economy and many
                    others worldwide. However, farmers often face significant challenges in
                    selecting the most suitable crop for their land, leading to sub-optimal
                    yields and financial losses.
                  </p>
                  <p>
                    This project proposes an <strong className="text-foreground">AI-Based Crop Recommendation System</strong> that
                    leverages Machine Learning to provide data-driven, personalized crop
                    suggestions. The system analyzes key parameters including{" "}
                    <strong className="text-foreground">Nitrogen, Phosphorus, Potassium (N-P-K)</strong> levels, pH value,
                    temperature, humidity, rainfall, and location.
                  </p>
                  <p>
                    After a comparative analysis of multiple classification algorithms, the{" "}
                    <strong className="text-primary">Random Forest algorithm</strong> demonstrated the highest accuracy
                    of <strong className="text-primary">99.3%</strong>, making it the ideal choice for our system.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Key Objectives</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Implement and evaluate ML classification algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Develop an intuitive web-based interface
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Provide real-time crop recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Enhance agricultural productivity
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Impact</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Increase crop yield through scientific selection
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Reduce financial losses for farmers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Promote sustainable farming practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Contribute to food security
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;
