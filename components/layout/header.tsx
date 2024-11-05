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
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { title: "Features", href: "/features" },
  { title: "How It Works", href: "/how-it-works" },
  { title: "Pricing", href: "/pricing" },
];

const resourcesLinks = [
  {
    title: "Blog",
    href: "/blog",
    description:
      "Stay updated with the latest YouTube growth strategies and tips.",
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const excludePaths = ["/onboarding", "/auth"];
 
  if (excludePaths.some((path) => pathname?.startsWith(path))) {
    return null; 
  }
  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 mx-auto items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          Fozato
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-4">
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isActive("/blog") ||
                    isActive("/feedback") ||
                    isActive("/academy")
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {resourcesLinks.map((resource) => (
                    <li key={resource.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={resource.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size={"lg"}
            className="text-basic border-spacing-1 border-black  hover:scale-105 transition-all hover:bg-transparent font-medium"
            asChild
          >
            <Link href={isLoggedIn ? "/app" : "/login"}>
              {isLoggedIn ? "Dashboard" : "Sign in"}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {[...links, ...resourcesLinks].map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      "block px-2 py-1 text-lg transition-colors hover:text-primary",
                      isActive(link.href) ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
