"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Fozato help with SEO?",
    answer: "Fozato's AI analyzes your video content and audience, generating SEO-optimized titles, descriptions, tags, and more to maximize your visibility on YouTube.",
  },
  {
    question: "Do I need to upload all my videos through Fozato?",
    answer: "No, you can choose to optimize new videos or paste links of already-uploaded videos to benefit from Fozato's SEO recommendations.",
  },
  {
    question: "Can I see how my videos perform over time?",
    answer: "Yes! Track your video performance with Fozato's in-depth insights and use these to improve your future uploads.",
  },
];

export function HowItWorksFaq() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
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