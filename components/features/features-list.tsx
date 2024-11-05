import { 
    Search, 
    Upload, 
    Languages, 
    BarChart2, 
    Shield, 
    Brain 
  } from "lucide-react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
  const features = [
    {
      title: "Automated SEO Optimization",
      subtitle: "Increase your reach with AI-optimized titles, tags, and descriptions.",
      icon: Search,
      features: [
        {
          title: "Data-Driven Keywords",
          description: "Our algorithm analyzes your content and target audience to suggest high-impact keywords, tailored titles, and engaging descriptions to get your videos seen.",
        },
        {
          title: "Smart Tagging",
          description: "Automatically tags your videos with high-traffic, relevant tags that draw in viewers.",
        },
      ],
      highlight: "Forget keyword research – get optimized in seconds.",
    },
    {
      title: "Instant Upload and Update",
      subtitle: "From your dashboard, upload videos or paste links for instant optimization.",
      icon: Upload,
      features: [
        {
          title: "Direct Uploads",
          description: "Upload new videos or paste an existing YouTube link directly into Fozato's platform for immediate optimization.",
        },
        {
          title: "One-Click Updates",
          description: "Review and update your video's SEO information directly from Fozato to YouTube in a single click.",
        },
      ],
      highlight: "Make SEO updates effortless and maximize each video's impact.",
    },
    {
      title: "Multilingual Subtitles and Descriptions",
      subtitle: "Reach a global audience with AI-generated subtitles in 95+ languages.",
      icon: Languages,
      features: [
        {
          title: "Automatic Translation",
          description: "Increase accessibility by offering captions and subtitles in languages spoken by your audience.",
        },
        {
          title: "Localized Descriptions",
          description: "Adapt your video's descriptions to resonate with international viewers, expanding your reach.",
        },
      ],
      highlight: "Make your content globally accessible and gain international fans.",
    },
    {
      title: "In-Depth Video Insights",
      subtitle: "Know exactly how your videos are performing with real-time analytics.",
      icon: BarChart2,
      features: [
        {
          title: "Performance Dashboard",
          description: "Track your video views, watch time, engagement, and SEO performance over time.",
        },
        {
          title: "Data-Driven Recommendations",
          description: "Get actionable insights on what content and SEO strategies are driving the most engagement.",
        },
      ],
      highlight: "Stay informed and fine-tune your content strategy with confidence.",
    },
    {
      title: "Fully Secure YouTube Integration",
      subtitle: "Connect your YouTube account once, and let Fozato handle the rest.",
      icon: Shield,
      features: [
        {
          title: "Secure Access",
          description: "We use OAuth 2.0, so your credentials are safe, and you retain control over your data.",
        },
        {
          title: "Direct Publishing",
          description: "Allow Fozato to publish videos directly to your YouTube channel, giving you more time to focus on content.",
        },
      ],
      highlight: "Rest easy with a platform that respects your security and data privacy.",
    },
    {
      title: "Continuous Learning AI",
      subtitle: "Benefit from an AI that learns and improves with every upload.",
      icon: Brain,
      features: [
        {
          title: "Adapts to Your Audience",
          description: "Our AI gets smarter with each video, refining suggestions based on your channel's audience behavior and trends.",
        },
        {
          title: "Always Current",
          description: "Fozato stays updated with YouTube's latest SEO requirements and trends to keep your channel competitive.",
        },
      ],
      highlight: "Enjoy powerful optimizations tailored to your unique growth journey.",
    },
  ];
  
  export function FeaturesList() {
    return (
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-xl text-muted-foreground mb-8">{feature.subtitle}</p>
                  </div>
                  <div className="space-y-6">
                    {feature.features.map((item, featureIndex) => (
                      <Card key={featureIndex} className="border-none shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-lg font-medium text-primary">{feature.highlight}</p>
                </div>
                <div className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl aspect-square flex items-center justify-center p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <feature.icon className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }