"use client";

import { useState, useEffect } from "react";
import { Check, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getUserCurrency, formatPrice, type Currency } from "@/lib/utils/currency";

const features = [
  "Unlimited YouTube Channels",
  "AI-Powered Video Optimization",
  "Advanced Analytics Dashboard",
  "Unlimited AI SEO Credits",
  "Real-Time Performance Tracking",
  "Priority 24/7 Support",
  "Custom Branding Options",
  "Scheduled Uploads",
  "Competitor Analysis",
  "Trend Detection & Alerts"
];

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency | null>(null);

  useEffect(() => {
    getUserCurrency().then(setCurrency);
  }, []);

  if (!currency) return null;

  const price = currency.code === "INR" ? 1499 : 39;

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            The All-in-One Plan Every YouTube Creator Needs to Grow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One simple plan with everything you need to skyrocket your YouTube success. No feature restrictions, no limitations.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2 relative bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Launch Offer</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <CardHeader className="text-center pt-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <h3 className="text-2xl font-bold">Premium Growth Plan</h3>
              <Star className="h-6 w-6 text-primary fill-primary" />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold">{formatPrice(price, currency)}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg relative group">
                <span className="relative z-10">Start Growing Today</span>
                <div className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                14-day money-back guarantee • No credit card required
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}