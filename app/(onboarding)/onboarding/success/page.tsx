"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from 'canvas-confetti';
import { useEffect } from "react";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="max-w-sm mx-auto text-center">
      <div className="mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">You're all set!</h1>
        <p className="text-muted-foreground">
          Your account is ready. Let's start optimizing your YouTube content!
        </p>
      </div>

      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full h-14"
          onClick={() => router.push("/dashboard")}
        >
          Go to Dashboard
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <p className="text-sm text-muted-foreground">
          Need help getting started?{" "}
          <a href="/docs" className="text-primary hover:underline">
            Check our guide
          </a>
        </p>
      </div>
    </div>
  );
}