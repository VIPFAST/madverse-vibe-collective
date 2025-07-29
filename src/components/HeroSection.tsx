import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-secondary/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="space-y-8 slide-in-up">
          <h1 className="festival-title">
            MADVERSE
          </h1>
          
          <p className="festival-subtitle max-w-3xl mx-auto">
            A celebration of youth, chaos, and creativity.
          </p>

          {/* Festival Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>City Park, Peja, Kosovo</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Music • Art • Dance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/tickets">
              <Button 
                variant="festival" 
                size="xl" 
                className="min-w-[200px] float-animation"
              >
                Get Free Ticket
              </Button>
            </Link>
            <Link to="/tickets">
              <Button 
                variant="neon" 
                size="xl" 
                className="min-w-[200px] float-animation"
                style={{ animationDelay: '0.5s' }}
              >
                Buy Tickets
              </Button>
            </Link>
          </div>

          {/* Floating Elements */}
          <div className="mt-16 text-xs text-muted-foreground/60 animate-bounce">
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent mx-auto mb-2" />
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;