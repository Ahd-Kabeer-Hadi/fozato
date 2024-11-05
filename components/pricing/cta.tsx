import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingCta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Invest in your growth
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Join Fozato and start maximizing your channel&apos;s reach today.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8"
        >
          <Link href="/onboarding/start">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}