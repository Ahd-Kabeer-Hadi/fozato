"use client";

import { Button } from "@/components/ui/button";
import { Youtube, Mail, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StartPage() {
  const { isLoading, handleAuth } = useAuth();

  return (
    <Card className="mx-auto max-w-sm border-none">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Welcome to Fozato</CardTitle>
        <CardDescription>
          Join thousands of creators optimizing their YouTube content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Button
              variant="outline"
              size="lg"
              className="w-full relative "
              onClick={() => handleAuth("google")}
              disabled={isLoading}
            >
              <div className="absolute left-4">
                <Image
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </div>
              {/* @ts-ignore */}
              {isLoading === "google"
                ? "Connecting..."
                : "Continue with Google"}
            </Button>
          </div>
          <div className="grid gap-2">
            <Button
              variant="outline"
              size="lg"
              className="w-full relative"
              onClick={() => handleAuth("youtube")}
              disabled={!!isLoading}
            >
              <div className="absolute left-4">
                <Image
                  src="https://www.youtube.com/favicon.ico"
                  alt="Youtube"
                  width={18}
                  height={18}
                />
              </div>

              {/* @ts-ignore */}
              {isLoading === "youtube"
                ? "Connecting..."
                : "Sign in with YouTube"}
            </Button>
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <p className="text-center text-sm">or</p>
            </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>

      <CardFooter>
        <p className="text-center text-sm text-muted-foreground mt-8">
          By continuing, you agree to our{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
