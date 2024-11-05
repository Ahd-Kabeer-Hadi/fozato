import { FeaturesCta } from "@/components/features/cta";
import { FeaturesList } from "@/components/features/features-list";
import { FeaturesHero } from "@/components/features/hero";


export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <FeaturesHero />
      <FeaturesList />
      <FeaturesCta />
    </main>
  );
}