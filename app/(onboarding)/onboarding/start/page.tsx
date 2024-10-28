"use client";

import { Button } from "@/components/ui/button";
import { Youtube, Mail, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";

export default function StartPage() {
  const { isLoading, handleAuth } = useAuth();

  return (
    <div className="max-w-sm mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to Fozato</h1>
        <p className="text-muted-foreground">
          Join thousands of creators optimizing their YouTube content
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          size="lg"
          className="w-full relative h-14"
          onClick={() => handleAuth("google")}
          disabled={!!isLoading}
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
          {isLoading === "google" ? "Connecting..." : "Continue with Google"}
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full relative h-14"
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
          {isLoading === "youtube" ? "Connecting..." : "Sign in with YouTube"}
        </Button>
      </div>

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
    </div>
  );
}
