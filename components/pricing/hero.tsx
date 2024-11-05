export function PricingHero() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Pricing Made Simple
          </h1>
          <p className="text-xl text-muted-foreground">
            One powerful plan. Everything you need to grow. Experience all of Fozato&apos;s 
            AI-powered features in one complete plan, designed to boost your YouTube success.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20" />
    </section>
  );
}