import { Bot, Upload, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Driven Video Optimization",
    description: "Let our AI analyze your videos and automatically optimize your titles, tags, and descriptions for maximum reach—so you don't have to.",
    icon: Bot
  },
  {
    title: "Effortless Upload & Management",
    description: "Upload your videos, optimize with a single click, and schedule real-time uploads. Fozato handles the heavy lifting.",
    icon: Upload
  },
  {
    title: "Real-Time Performance Insights",
    description: "Get immediate feedback on your video's performance, track views and engagement, and adjust your strategy with actionable insights.",
    icon: LineChart
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            All-in-One Solution to Skyrocket Your YouTube Success
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}