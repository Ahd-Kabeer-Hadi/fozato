"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Fozato improve my video's performance?",
    answer: "Our AI analyzes your content and automatically suggests optimal titles, tags, and descriptions, ensuring your video reaches a wider audience.",
  },
  {
    question: "What do I get with the Pro Plan?",
    answer: "The Pro Plan includes advanced analytics, complete SEO automation, and exclusive access to our latest features for maximizing your channel's growth.",
  },
  {
    question: "Do I need to connect my YouTube account?",
    answer: "Yes, connecting your account allows us to optimize your videos and track performance directly from your YouTube channel.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Your Questions Answered
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}