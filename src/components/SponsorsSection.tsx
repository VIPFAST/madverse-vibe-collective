import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SponsorsSection = () => {
  const sponsors = {
    title: [
      { name: "AFK", category: "Youth Organization" },
      { name: "Red Bull", category: "Energy Partner" }
    ],
    major: [
      { name: "Raiffeisen Bank", category: "Financial Partner" },
      { name: "Devolli Corporation", category: "Corporate Sponsor" }
    ],
    media: [
      { name: "RTK", category: "Media Partner" },
      { name: "Dukagjini", category: "Local Media" }
    ],
    community: [
      { name: "City of Peja", category: "Government Partner" },
      { name: "Youth Council Peja", category: "Community Partner" },
      { name: "Local Artists Collective", category: "Cultural Partner" }
    ]
  };

  return (
    <section id="sponsors" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MADVERSE is made possible by the incredible support of our partners who believe in youth, creativity, and community impact
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Title Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.title.map((sponsor, index) => (
              <Card key={index} className="p-8 gradient-border text-center group hover:scale-105 transition-all neon-glow">
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
                    {sponsor.name}
                  </div>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {sponsor.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Major Sponsors */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Major Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sponsors.major.map((sponsor, index) => (
              <Card key={index} className="p-6 gradient-border text-center group hover:scale-105 transition-all">
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </div>
                </div>
                <Badge variant="outline" className="border-secondary/30 text-secondary">
                  {sponsor.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Media Partners</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sponsors.media.map((sponsor, index) => (
              <Card key={index} className="p-6 gradient-border text-center group hover:scale-105 transition-all">
                <div className="h-16 flex items-center justify-center mb-3">
                  <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {sponsor.name}
                  </div>
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  {sponsor.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Community Partners</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {sponsors.community.map((sponsor, index) => (
              <Card key={index} className="p-4 gradient-border text-center group hover:scale-105 transition-all">
                <div className="h-12 flex items-center justify-center mb-2">
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </div>
                </div>
                <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-xs">
                  {sponsor.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="scroll-reveal">
          <Card className="p-8 gradient-border text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us in supporting youth creativity, community development, and cultural expression. 
              Partner with MADVERSE and make a lasting impact on the next generation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Expected Attendees</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Social Media Reach (K)</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Community Impact</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Contact us for partnership opportunities:</p>
              <p className="font-semibold text-primary mt-2">
                <a href="mailto:klestdrancolli@gmail.com" className="hover:underline">
                  klestdrancolli@gmail.com
                </a>
                {" | "}
                <a href="tel:+38349220602" className="hover:underline">
                  +383 49 220 602
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;