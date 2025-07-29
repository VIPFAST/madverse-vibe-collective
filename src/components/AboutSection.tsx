import { Card } from "@/components/ui/card";
import { Music, Palette, Users, Heart, Recycle, TreePine } from "lucide-react";
import festivalArt from "@/assets/festival-art.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About MADVERSE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where music meets art, dance meets creativity, and youth meets purpose in the heart of Peja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Music • Art • Dance
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MADVERSE is more than just a festival - it's a movement. Set in the beautiful City Park of Peja, Kosovo, 
                we bring together the vibrant energy of youth culture with a mission to create positive change in our community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From electric DJ sets to live street art performances, from interactive dance battles to hands-on workshops, 
                every moment is designed to celebrate creativity, chaos, and the beautiful madness of youth expression.
              </p>
            </div>

            {/* Festival Pillars */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 gradient-border text-center group hover:scale-105 transition-transform">
                <Music className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm">Music</h4>
              </Card>
              <Card className="p-6 gradient-border text-center group hover:scale-105 transition-transform">
                <Palette className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm">Art</h4>
              </Card>
              <Card className="p-6 gradient-border text-center group hover:scale-105 transition-transform">
                <Users className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm">Dance</h4>
              </Card>
            </div>
          </div>

          {/* Right Image */}
          <div className="scroll-reveal">
            <div className="relative">
              <img 
                src={festivalArt} 
                alt="Festival Art" 
                className="rounded-2xl w-full h-[500px] object-cover neon-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="scroll-reveal">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Community Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 gradient-border text-center group hover:scale-105 transition-all neon-glow">
              <div className="relative">
                <Recycle className="w-12 h-12 text-accent mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                <h4 className="text-xl font-bold mb-4">Area Cleanup</h4>
                <p className="text-muted-foreground">
                  Together we'll clean and beautify the City Park, leaving it better than we found it.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-border text-center group hover:scale-105 transition-all neon-glow">
              <div className="relative">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">Court Restoration</h4>
                <p className="text-muted-foreground">
                  Restoring the basketball court to create a lasting space for community sports and activities.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-border text-center group hover:scale-105 transition-all neon-glow">
              <div className="relative">
                <TreePine className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:sway transition-transform" />
                <h4 className="text-xl font-bold mb-4">Youth Workshops</h4>
                <p className="text-muted-foreground">
                  Empowering young artists through hands-on workshops and collaborative projects.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;