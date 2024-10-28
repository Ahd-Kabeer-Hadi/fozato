"use client";

import { useState } from 'react';
import { LogIn, Wand2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Connect Your Channel",
    description: "Seamlessly link your YouTube account to Fozato in seconds.",
    icon: LogIn,
  },
  {
    title: "AI-Powered Optimization",
    description: "Our AI analyzes and enhances your content for maximum visibility.",
    icon: Wand2,
  },
  {
    title: "Grow Your Audience",
    description: "Watch your reach expand as you publish optimized content.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How Fozato Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 ${
                index === activeStep ? 'border-primary shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
}
