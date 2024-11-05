"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "../ui/aurora-background";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative py-20 flex flex-col justify-center min-h-screen overflow-hidden bg-white">
      {/* // <AuroraBackground className="relative py-20 flex flex-col justify-center min-h-screen overflow-hidden"> */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative container px-4 mx-auto"
        >
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
            <p className="text-base text-muted-foreground max-w-2xl">
              Save hours of manual SEO work. Let AI boost your reach in just a few clicks, and watch your channel thrive.
            </p>
          </div>
        </motion.div>
      {/* </AuroraBackground> */}
    </section>
  );
}
