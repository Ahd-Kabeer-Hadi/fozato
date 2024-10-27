import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WhyChooseSection } from '@/components/sections/why-choose-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { FooterSection } from '@/components/sections/footer-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}