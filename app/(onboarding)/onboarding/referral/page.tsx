"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const referralSources = [
  { value: "social", label: "Social Media" },
  { value: "search", label: "Google Search" },
  { value: "friend", label: "Friend Referral" },
  { value: "youtube", label: "YouTube Ad" },
  { value: "blog", label: "Blog Post" },
  { value: "podcast", label: "Podcast" },
  { value: "other", label: "Other" },
];

export default function ReferralPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [showReferralInput, setShowReferralInput] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const validateReferralCode = async (code: string) => {
    setIsValidating(true);
    try {
      // Simulate API call to validate referral code
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any code starting with "FOZATO" is valid
      const isValid = code.toUpperCase().startsWith("FOZATO");
      
      if (isValid) {
        // Calculate random discount between 10-30%
        const discount = Math.floor(Math.random() * 21) + 10;
        
        // Store referral data in sessionStorage
        sessionStorage.setItem('referralData', JSON.stringify({
          code,
          discount,
          source: selectedSource
        }));

        toast({
          title: "Referral code applied!",
          description: `You've received a ${discount}% discount!`,
        });

        router.push("/onboarding/pricing");
      } else {
        toast({
          variant: "destructive",
          title: "Invalid referral code",
          description: "Please check your code and try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error validating code",
        description: "Please try again later.",
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleContinue = async () => {
    if (!selectedSource) return;

    if (selectedSource === "friend" && !showReferralInput) {
      setShowReferralInput(true);
      return;
    }

    if (showReferralInput && referralCode) {
      await validateReferralCode(referralCode);
      return;
    }

    // Store source without referral code
    sessionStorage.setItem('referralData', JSON.stringify({
      source: selectedSource
    }));
    
    router.push("/onboarding/pricing");
  };

  const handleBack = () => {
    if (showReferralInput) {
      setShowReferralInput(false);
      return;
    }
    router.back();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">How did you hear about us?</h1>
        <p className="text-muted-foreground">
          Help us understand how creators find Fozato
        </p>
      </div>

      {!showReferralInput ? (
        <div className="grid grid-cols-2 gap-3 mb-8">
          {referralSources.map((source) => (
            <Button
              key={source.value}
              variant={selectedSource === source.value ? "default" : "outline"}
              className={`h-auto py-4 px-4 flex flex-col items-center justify-center text-center transition-all ${
                selectedSource === source.value
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
              onClick={() => setSelectedSource(source.value)}
            >
              <span className="text-sm">{source.label}</span>
            </Button>
          ))}
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          <p className="text-sm text-muted-foreground">
            Enter your friend&apos;s referral code to get a discount
          </p>
          <Input
            placeholder="Enter referral code"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className="uppercase"
          />
        </div>
      )}

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleBack}
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedSource || isValidating}
          className="w-full"
        >
          {isValidating ? (
            <>Processing...</>
          ) : showReferralInput ? (
            "Apply Code"
          ) : (
            <>
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
