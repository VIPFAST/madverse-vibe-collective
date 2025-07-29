import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, GamepadIcon, QrCode, Camera, Heart, Users } from "lucide-react";

const InteractiveSection = () => {
  return (
    <section id="activities" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            Interactive Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on activities that bring the community together through creativity and fun
          </p>
        </div>

        {/* Main Activities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Archery Workshop */}
          <Card className="p-8 gradient-border group hover:scale-[1.02] transition-all scroll-reveal">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Archery Workshop</h3>
              <Badge className="mb-4 bg-accent text-accent-foreground">Hands-on Experience</Badge>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Build your own bow from scratch and test your aim! Our expert instructors will guide you through 
                the ancient art of archery in a modern, safe environment.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="font-semibold">Duration</p>
                  <p className="text-muted-foreground">90 minutes</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="font-semibold">Group Size</p>
                  <p className="text-muted-foreground">Max 12 people</p>
                </div>
              </div>

              <Button variant="neon" className="mt-6">
                Reserve Your Spot
              </Button>
            </div>
          </Card>

          {/* Just Dance Now */}
          <Card className="p-8 gradient-border group hover:scale-[1.02] transition-all scroll-reveal">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GamepadIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Just Dance Now</h3>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Interactive Gaming</Badge>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Dance battles like never before! Connect your phone, follow the big screens, 
                and compete with friends in this high-energy dance experience.
              </p>
              
              <div className="bg-muted/20 p-6 rounded-lg">
                <p className="font-semibold text-2xl text-primary mb-2">Room Code</p>
                <p className="text-3xl font-black text-secondary">MADVERSE2024</p>
                <p className="text-sm text-muted-foreground mt-2">Available during the event</p>
              </div>

              <Button variant="festival" className="mt-6">
                Join the Dance Floor
              </Button>
            </div>
          </Card>
        </div>

        {/* Gallery & QR Upload */}
        <div className="mb-16 scroll-reveal">
          <Card className="p-8 gradient-border text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Festival Gallery</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Capture and share the madness! Scan our QR codes around the festival to upload your photos. 
                Each person can share up to 7 photos that will be featured on our live social wall.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/20 p-6 rounded-lg">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Snap Photos</h4>
                  <p className="text-sm text-muted-foreground">Capture festival moments</p>
                </div>
                <div className="bg-muted/20 p-6 rounded-lg">
                  <QrCode className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Scan QR Code</h4>
                  <p className="text-sm text-muted-foreground">Upload instantly</p>
                </div>
                <div className="bg-muted/20 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Share & Tag</h4>
                  <p className="text-sm text-muted-foreground">Feature on social wall</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg border border-primary/30">
                <p className="text-sm">
                  <strong>Pro tip:</strong> Tag us @madverse_peja on Instagram for a chance to be featured 
                  on our main social channels! Use #MADVERSEMemories
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Festival Wristbands */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Festival Wristbands</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Express yourself with our special wristbands! Choose your vibe and let others know what you're about.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-destructive to-cta flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-destructive">Taken</h4>
              <p className="text-sm text-muted-foreground">
                For couples enjoying the festival together
              </p>
            </Card>

            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center mx-auto mb-4 group-hover:pulse transition-all">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-accent">Single</h4>
              <p className="text-sm text-muted-foreground">
                Ready to meet new people and make connections
              </p>
            </Card>

            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-cta flex items-center justify-center mx-auto mb-4 group-hover:bounce transition-all">
                <GamepadIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">Just Here to Dance</h4>
              <p className="text-sm text-muted-foreground">
                All about the music, art, and good vibes
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;