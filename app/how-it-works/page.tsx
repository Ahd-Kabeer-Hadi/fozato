import { CtaSection } from "@/components/how-it-works/cta";
import { HowItWorksFaq } from "@/components/how-it-works/faq";
import HowItWorksHero from "@/components/how-it-works/hero";
import { ProcessSteps } from "@/components/how-it-works/process-steps";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <HowItWorksHero />
      <ProcessSteps />
      <HowItWorksFaq />
      <CtaSection />
    </main>
  );
}