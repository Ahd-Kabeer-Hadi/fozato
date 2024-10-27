"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground mb-6">
            Unlock Your YouTube Growth with AI-Driven Optimization
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10">
            Focus on creating, while we take care of the SEO. Get more views, subscribers, and revenue automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => router.push("/onboarding/start")}
            >
              Start Growing Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch How It Works
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Save hours of manual SEO work. Let AI boost your reach in just a few clicks, and watch your channel thrive.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20" />
    </section>
  );
}