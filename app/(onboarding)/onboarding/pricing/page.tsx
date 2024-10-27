"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Loader2, Tag } from "lucide-react";
import { PaymentForm } from "@/components/onboarding/payment-form";

const features = [
  "Unlimited YouTube Channels",
  "AI-Powered Video Optimization",
  "Advanced Analytics Dashboard",
  "Priority Support",
  "Custom Branding Options",
];

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 39,
    basePrice: 39,
    interval: "month",
    popular: false,
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 390,
    basePrice: 468, // 39 * 12
    interval: "year",
    popular: true,
    savings: "Save 17%",
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(plans[1].id);
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);

  const handlePaymentSuccess = () => {
    router.push("/onboarding/success");
  };

  if (showPayment) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Complete Your Purchase</h1>
        <p className="text-muted-foreground mb-8">
          {selectedPlanDetails?.name} Plan - ${selectedPlanDetails?.price}/{selectedPlanDetails?.interval}
        </p>
        
        <PaymentForm
          amount={selectedPlanDetails?.price || 0}
          planId={selectedPlan}
          onSuccess={handlePaymentSuccess}
          onBack={() => setShowPayment(false)}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Choose Your Plan</h1>
      <p className="text-muted-foreground mb-8">
        Select the plan that best fits your needs
      </p>

      <div className="grid gap-4 mb-8">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-6 cursor-pointer transition-all hover:border-primary ${
              selectedPlan === plan.id
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : ""
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.interval}</span>
                  {plan.basePrice > plan.price && (
                    <span className="text-sm line-through text-muted-foreground">
                      ${plan.basePrice}
                    </span>
                  )}
                </div>
              </div>
              {plan.popular && (
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {plan.savings}
                </span>
              )}
            </div>

            <ul className="space-y-3 text-left mb-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={selectedPlan === plan.id ? "default" : "outline"}
              className="w-full"
              onClick={() => setSelectedPlan(plan.id)}
            >
              {selectedPlan === plan.id ? "Selected" : "Select Plan"}
            </Button>
          </Card>
        ))}
      </div>

      <Button 
        size="lg" 
        className="w-full sm:w-auto px-8"
        onClick={() => setShowPayment(true)}
      >
        Continue to Payment
      </Button>
    </div>
  );
}