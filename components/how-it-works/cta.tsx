import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Ready to take your YouTube growth to the next level?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Get started today and let Fozato handle the heavy lifting so you can focus on what you love - creating.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8"
        >
          <Link href="/onboarding/start">
            Get Started with Fozato
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}