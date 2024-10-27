"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const resourcesLinks = [
  {
    title: "Blog",
    href: "/blog",
    description: "Stay updated with the latest YouTube growth strategies and tips.",
  },
  {
    title: "Feedback Forums",
    href: "/feedback",
    description: "Share your ideas and help shape the future of Fozato.",
  },
  {
    title: "Creator Academy",
    href: "/academy",
    description: "Learn how to grow your channel with our expert guides.",
  },
];

const mainLinks = [
  { title: "Features", href: "/#features" },
  { title: "How It Works", href: "/#how-it-works" },
  { title: "Pricing", href: "/#pricing" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should come from your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            Fozato
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourcesLinks.map((resource) => (
                      <li key={resource.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={resource.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {resource.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {resource.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href={isLoggedIn ? "/app" : "/login"}>
              {isLoggedIn ? "Go to app" : "Sign in"}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {mainLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block px-2 py-1 text-lg hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="py-2">
                  <p className="px-2 text-sm font-medium text-muted-foreground mb-2">Resources</p>
                  {resourcesLinks.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block px-2 py-1 text-lg hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}