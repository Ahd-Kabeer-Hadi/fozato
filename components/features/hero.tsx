
export function FeaturesHero() {
  return (
    <section className=" flex flex-col justify-center py-20 scroll-py-10 lg:py-40 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Features Built for Creators&apos; Growth
          </h1>
          <p className="text-xl text-muted-foreground">
            Drive your channel&apos;s success with AI-powered SEO, automation, and insights 
            tailored to boost visibility, engagement, and revenue. Discover how Fozato 
            simplifies your workflow so you can focus on creating.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20" />
    </section>
  );
}