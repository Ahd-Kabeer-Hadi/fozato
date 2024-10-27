"use client";

import Link from "next/link";
import { Youtube, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Documentation", href: "/docs" },
    { label: "API", href: "/api" },
    { label: "Status", href: "/status" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

export function FooterSection() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fozato</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              AI-powered YouTube optimization to help creators reach their full potential.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fozato. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}