"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { getUserCurrency } from "@/lib/utils/currency";
import Link from "next/link";
import { calculatePrices } from "@/lib/utils/pricing";

const features = [
  "Full access to AI-powered SEO optimizations",
  "Multilingual subtitles and descriptions",
  "In-depth analytics and insights",
  "Direct YouTube integration",
  "Unlimited video optimizations",
  "Priority support access",
  "Real-time performance tracking",
  "Custom branding options"
];

export function PricingPlans() {
  const [prices, setPrices] = useState({
    monthly: 29,
    yearly: 290,
    savings: 17
  });

  const [selectedInterval, setSelectedInterval] = useState<"monthly" | "yearly">("yearly");

  useEffect(() => {
    getUserCurrency().then(currency => {
      const calculatedPrices = calculatePrices(currency);
      setPrices({
        monthly: calculatedPrices.monthly,
        yearly: calculatedPrices.yearly,
        savings: calculatedPrices.savings
      });
    });
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={selectedInterval === "monthly" ? "default" : "outline"}
              onClick={() => setSelectedInterval("monthly")}
              className="w-32"
            >
              Monthly
            </Button>
            <Button
              variant={selectedInterval === "yearly" ? "default" : "outline"}
              onClick={() => setSelectedInterval("yearly")}
              className="w-32"
            >
              Yearly
            </Button>
          </div>

          <Card className="relative border-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Limited Time Launch Offer</span>
                <Sparkles className="h-4 w-4" />
              </div>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">All-in-One Plan</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">
                    ${selectedInterval === "monthly" ? prices.monthly : prices.yearly}
                  </span>
                  <span className="text-muted-foreground">
                    /{selectedInterval === "monthly" ? "month" : "year"}
                  </span>
                </div>
                {selectedInterval === "yearly" && (
                  <p className="text-sm text-primary mt-2">
                    Save {prices.savings}% with yearly billing
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  asChild
                  size="lg" 
                  className="w-full sm:w-auto px-8"
                >
                  <Link href="/onboarding/start">
                    Get Started Today
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  14-day money-back guarantee • No credit card required
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}