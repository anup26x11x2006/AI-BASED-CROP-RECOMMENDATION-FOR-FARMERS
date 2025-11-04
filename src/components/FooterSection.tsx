import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">AI</span>
                </div>
                <span className="font-bold text-lg text-foreground">CropRecommend</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                An AI-powered system empowering farmers with data-driven crop recommendations
                for sustainable and profitable agriculture.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Project Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Department of Computer Science and Engineering</p>
                <p>Bachelor of Technology (B.Tech)</p>
                <p>Academic Year: 2024-2025</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024-2025 AI-Based Crop Recommendation System. All rights reserved.
              </p>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Built with React, TypeScript, Tailwind CSS • Machine Learning powered by Python & Scikit-learn
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
