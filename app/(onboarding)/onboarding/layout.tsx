"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUrl = usePathname();

  // Use the currentUrl to conditionally apply classes
  const isPricingPage = currentUrl === "/onboarding/pricing" ? true : false;

  return (
    <main className="min-h-screen bg-muted/50 py-16">
      <div
        className={`container max-w-lg px-4 mx-auto ${
          isPricingPage && "lg:max-w-5xl"
        }`}
      >
        <div className="mb-8">
          <Link href="/" className="font-semibold text-xl text-center">
            <h2 className="text-2xl font-bold text-center">Fozato</h2>
          </Link>
        </div>
        <div
          className={`bg-background rounded-lg  border shadow-sm p-6 ${
            isPricingPage && " w-full "
          }`}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
