import { Youtube, Upload, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Sign Up and Connect Your YouTube Account",
    subtitle: "Get started in minutes – no complicated setups.",
    icon: Youtube,
    features: [
      {
        title: "Quick Signup",
        description: "Create an account by signing in with your Google credentials.",
      },
      {
        title: "Seamless Integration",
        description: "Grant Fozato access to your YouTube account to automate optimization on your uploaded videos. Rest assured, your data and account remain secure.",
      },
      {
        title: "Instant Access",
        description: "Access your dashboard and get an instant overview of all the tools at your disposal!",
      },
    ],
  },
  {
    title: "Upload and Optimize Your Videos",
    subtitle: "Ready for a boost? Optimize effortlessly with AI.",
    icon: Upload,
    features: [
      {
        title: "Direct Upload or Video Link",
        description: "Paste your YouTube link or upload a new video directly to the Fozato platform.",
      },
      {
        title: "Intelligent SEO Suggestions",
        description: "Our AI analyzes your content, generating high-performance titles, descriptions, and tags tailored to reach your target audience.",
      },
      {
        title: "Real-Time Adjustments",
        description: "Want to tweak? Make adjustments or use our one-click update feature to apply changes directly to your video on YouTube.",
      },
    ],
  },
  {
    title: "Publish and Track Your Success",
    subtitle: "See your channel grow with actionable insights.",
    icon: TrendingUp,
    features: [
      {
        title: "Instant Publish",
        description: "Automatically publish or update your optimized video to your connected YouTube channel.",
      },
      {
        title: "Performance Insights",
        description: "Track views, engagement, and reach on your personalized dashboard. Understand what works best to continue growing your channel.",
      },
      {
        title: "Continuous Improvement",
        description: "Use Fozato's insights to refine your content strategy, backed by data-driven recommendations.",
      },
    ],
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">{step.subtitle}</p>
                </div>
                <div className="space-y-6">
                  {step.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="border-none shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl aspect-square flex items-center justify-center p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <step.icon className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}