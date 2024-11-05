import { AdditionalCredits } from "@/components/pricing/additional-credits";
import { PricingCta } from "@/components/pricing/cta";
import { PricingHero } from "@/components/pricing/hero";
import { PricingPlans } from "@/components/pricing/plans";


export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingPlans />
      <AdditionalCredits />
      <PricingCta />
    </main>
  );
}