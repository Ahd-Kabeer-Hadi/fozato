export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-muted/50 py-16">
      <div className="container max-w-lg px-4 mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center">Fozato</h2>
        </div>
        <div className="bg-background rounded-lg border shadow-sm p-6">
          {children}
        </div>
      </div>
    </main>
  );
}