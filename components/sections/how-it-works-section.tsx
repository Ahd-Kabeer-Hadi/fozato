import { LogIn, Wand2, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Sign Up with Your YouTube Account",
    description: "Quick and simple. Use your Google credentials to connect Fozato with your channel in seconds.",
    icon: LogIn,
  },
  {
    title: "Optimize Your Videos Instantly",
    description: "Paste your video link or upload directly, and let our AI work its magic to optimize for more visibility.",
    icon: Wand2,
  },
  {
    title: "Publish and Watch Your Reach Grow",
    description: "Schedule your videos, publish them, and track real-time results as your channel starts to expand effortlessly.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get Started in 3 Easy Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}