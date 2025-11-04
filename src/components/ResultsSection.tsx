import { Card } from "@/components/ui/card";
import { Trophy, BarChart3 } from "lucide-react";

const ResultsSection = () => {
  const models = [
    { name: "Random Forest", accuracy: 99.3, color: "bg-primary", highlight: true },
    { name: "K-Nearest Neighbors", accuracy: 96.8, color: "bg-secondary" },
    { name: "Support Vector Machine", accuracy: 93.6, color: "bg-accent" },
    { name: "Decision Tree", accuracy: 89.5, color: "bg-muted-foreground" },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Results & Performance
            </h2>
            <p className="text-xl text-muted-foreground">
              Comparing machine learning models for optimal accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Model Comparison Chart */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Model Comparison</h3>
              </div>

              <div className="space-y-6">
                {models.map((model, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${model.highlight ? 'text-primary' : 'text-foreground'}`}>
                        {model.name}
                      </span>
                      <span className={`font-bold ${model.highlight ? 'text-primary' : 'text-foreground'}`}>
                        {model.accuracy}%
                      </span>
                    </div>
                    <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-full ${model.color} transition-all duration-1000 rounded-full ${
                          model.highlight ? 'shadow-glow' : ''
                        }`}
                        style={{ width: `${model.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Winner Card */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Best Model</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-primary mb-2">99.3%</div>
                  <div className="text-2xl font-bold text-foreground mb-4">Random Forest</div>
                  <p className="text-muted-foreground">
                    Selected as the final model for production deployment
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Why Random Forest?</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Highest accuracy among all tested algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Excellent handling of non-linear relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Robust against overfitting through ensemble learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Reliable performance across different soil conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Sample Output */}
          <Card className="p-8 bg-muted/30 border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Sample Prediction
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Input Parameters:</h4>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Nitrogen (N)", value: "90" },
                    { label: "Phosphorus (P)", value: "42" },
                    { label: "Potassium (K)", value: "43" },
                    { label: "Temperature", value: "20.8°C" },
                    { label: "Humidity", value: "82.0%" },
                    { label: "pH Level", value: "6.5" },
                    { label: "Rainfall", value: "202.9 mm" },
                  ].map((param) => (
                    <div key={param.label} className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span className="text-muted-foreground">{param.label}</span>
                      <span className="font-medium text-foreground">{param.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center space-y-4 p-8 bg-background rounded-2xl border-2 border-primary/30">
                  <div className="text-sm text-muted-foreground">Recommended Crop</div>
                  <div className="text-5xl font-bold text-primary">RICE</div>
                  <div className="text-sm text-muted-foreground">
                    Based on your soil and climate conditions
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
