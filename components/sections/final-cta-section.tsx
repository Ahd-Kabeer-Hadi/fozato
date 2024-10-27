import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Ready to Supercharge Your YouTube Growth?
        </h2>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 group"
        >
          Start Growing with Fozato
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto">
          Join thousands of creators already boosting their views, subscribers, and revenue with AI-powered video optimization.
        </p>
      </div>
    </section>
  );
}