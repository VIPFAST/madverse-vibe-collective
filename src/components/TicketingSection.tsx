import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, MapPin, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TicketingSection = () => {
  const ticketTypes = [
    {
      type: "Free Entry",
      price: "FREE",
      originalPrice: null,
      availability: "First 100 people",
      method: "Online Only",
      features: [
        "Full festival access",
        "All workshops included",
        "Free wristband",
        "Community activities"
      ],
      highlight: true,
      icon: Gift,
      color: "from-accent via-primary to-secondary"
    },
    {
      type: "Local Café",
      price: "3 EUR",
      originalPrice: null,
      availability: "Available at partnered cafés",
      method: "In-person purchase",
      features: [
        "Full festival access",
        "All workshops included",
        "Support local business",
        "Advance booking"
      ],
      highlight: false,
      icon: MapPin,
      color: "from-secondary via-accent to-primary"
    },
    {
      type: "At the Door",
      price: "5 EUR",
      originalPrice: null,
      availability: "Day of event",
      method: "Cash or card accepted",
      features: [
        "Full festival access",
        "All workshops included",
        "Last minute entry",
        "No advance booking needed"
      ],
      highlight: false,
      icon: DollarSign,
      color: "from-primary via-secondary to-accent"
    }
  ];

  return (
    <section id="tickets" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cta via-primary to-secondary bg-clip-text text-transparent">
            Get Your Tickets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple ways to join the madness - from free entry to supporting local businesses
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="mb-12 scroll-reveal">
          <Card className="p-6 bg-gradient-to-r from-cta/20 to-primary/20 border-cta/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-cta animate-pulse" />
              <span className="text-lg font-bold text-cta">Limited Time Offer</span>
            </div>
            <p className="text-foreground">
              Only <span className="text-cta font-bold">67 free tickets</span> remaining! 
              Grab yours before they're gone.
            </p>
          </Card>
        </div>

        {/* Ticket Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ticketTypes.map((ticket, index) => {
            const IconComponent = ticket.icon;
            return (
              <Card 
                key={index}
                className={`relative p-8 gradient-border transition-all duration-300 hover:scale-105 group ${
                  ticket.highlight ? 'ring-2 ring-accent shadow-2xl' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {ticket.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${ticket.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{ticket.type}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-primary">{ticket.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{ticket.availability}</p>
                  <p className="text-xs text-accent">{ticket.method}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {ticket.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/tickets">
                  <Button 
                    variant={ticket.highlight ? "festival" : "neon"} 
                    className="w-full"
                    size="lg"
                  >
                    {ticket.type === "Free Entry" ? "Claim Free Ticket" : 
                     ticket.type === "Local Café" ? "Find Café Locations" : 
                     "Buy at Door"}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
          <Card className="p-6 gradient-border">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              Partner Café Locations
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Café Central - Peja Center</p>
              <p>• Coffee Culture - Near City Park</p>
              <p>• Youth Café - University District</p>
              <p>• More locations coming soon!</p>
            </div>
          </Card>

          <Card className="p-6 gradient-border">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-accent" />
              What's Included
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Full day festival access</p>
              <p>• All workshops and activities</p>
              <p>• Festival wristband</p>
              <p>• Access to after-party</p>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center scroll-reveal">
          <p className="text-sm text-muted-foreground">
            Questions about tickets? Contact us at{" "}
            <a href="mailto:klestdrancolli@gmail.com" className="text-primary hover:text-primary/80 underline">
              klestdrancolli@gmail.com
            </a>
            {" "}or call{" "}
            <a href="tel:+38349220602" className="text-primary hover:text-primary/80 underline">
              +383 49 220 602
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;