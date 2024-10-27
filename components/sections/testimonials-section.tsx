"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Using Fozato, I increased my video views by 300% in just two months! It's like having a full SEO team.",
    author: "@CreatorName",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    initials: "CN",
  },
  {
    quote: "Fozato saves me hours of manual SEO work every week. My views and subscribers have skyrocketed!",
    author: "@ChannelName",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    initials: "CH",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            YouTube Creators Love Fozato
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
              <div className="relative">
                <blockquote className="text-lg mb-6 pl-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}