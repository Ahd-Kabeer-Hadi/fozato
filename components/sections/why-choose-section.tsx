import { Clock, Target, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Time-Saving AI Automation",
    description: "Spend less time tweaking SEO and more time creating. Our AI does the work for you, boosting your reach without the effort.",
    icon: Clock,
  },
  {
    title: "Maximum Visibility for Every Video",
    description: "Our AI fine-tunes every video's SEO to ensure it's optimized to rank higher in YouTube searches and recommended feeds.",
    icon: Target,
  },
  {
    title: "Data-Driven Growth for Your Channel",
    description: "Leverage advanced analytics and AI insights to refine your content strategy and accelerate your channel's growth.",
    icon: BarChart3,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Fozato is the Only Tool You Need
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}