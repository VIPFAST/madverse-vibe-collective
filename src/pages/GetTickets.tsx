import { useState } from "react";
import { ArrowLeft, Ticket, Clock, MapPin, Calendar, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";


const GetTickets = () => {
  const [freeTicketsLeft, setFreeTicketsLeft] = useState(73);
  const [claimingFree, setClaimingFree] = useState(false);
  const { toast } = useToast();

  const handleClaimFree = async () => {
    if (freeTicketsLeft <= 0) return;
    
    setClaimingFree(true);
    // Simulate API call
    setTimeout(() => {
      setFreeTicketsLeft(prev => prev - 1);
      setClaimingFree(false);
      toast({
        title: "Free Ticket Claimed!",
        description: "Check your email for confirmation and QR code.",
      });
    }, 2000);
  };

  const ticketOptions = [
    {
      id: "free",
      title: "Free Entry",
      price: "FREE",
      originalPrice: null,
      description: "Limited time offer - First 100 tickets only",
      features: [
        "Full festival access",
        "All workshops included",
        "Food court access",
        "Digital wristband",
        "Photo booth access"
      ],
      available: freeTicketsLeft,
      urgent: true,
      action: "Claim Now",
      variant: "festival" as const
    },
    {
      id: "cafe",
      title: "Local Café Tickets",
      price: "€3",
      originalPrice: "€5",
      description: "Available at partner cafés around Peja",
      features: [
        "Full festival access",
        "All workshops included", 
        "Food court access",
        "Physical wristband",
        "Priority photo uploads",
        "Café discount voucher"
      ],
      available: "Available",
      urgent: false,
      action: "Find Locations",
      variant: "secondary" as const
    },
    {
      id: "door",
      title: "At the Door",
      price: "€5",
      originalPrice: null,
      description: "Available on festival day (subject to capacity)",
      features: [
        "Full festival access",
        "All workshops included",
        "Food court access",
        "Physical wristband",
        "Standard access"
      ],
      available: "Day of event",
      urgent: false,
      action: "Pay at Venue",
      variant: "outline" as const
    }
  ];

  const cafeLocations = [
    "Café Central - Peja Center",
    "Urban Coffee - Fehmi Agani Street", 
    "Brew House - Near City Park",
    "The Spot - University Area"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Festival
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get Your MADVERSE Tickets
              </h1>
              <p className="text-muted-foreground text-sm">
                Choose your ticket type and join the chaos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Event Info Banner */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-background to-card">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  MADVERSE 2026
                </h2>
                <p className="text-muted-foreground mb-4">
                  A celebration of youth, chaos, and creativity
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>TBD 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>City Park, Peja, Kosovo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>2:00 PM - 12:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">
                    {freeTicketsLeft}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free tickets remaining
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {freeTicketsLeft > 50 ? "Plenty Available" : 
                     freeTicketsLeft > 20 ? "Limited" : "Almost Gone!"}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Ticket</h2>
          
          {ticketOptions.map((ticket) => (
            <Card 
              key={ticket.id}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                ticket.urgent ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/20'
              }`}
            >
              {ticket.urgent && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-center py-1 text-sm font-bold">
                   LIMITED TIME - Only {ticket.available} left!
                </div>
              )}
              
              <CardHeader className={ticket.urgent ? "pt-8" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-primary" />
                      {ticket.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {ticket.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-primary">
                      {ticket.price}
                    </div>
                    {ticket.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {ticket.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Features */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      What's Included:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {ticket.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="flex flex-col justify-end">
                    <div className="mb-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Availability: {ticket.available}</span>
                      </div>
                    </div>
                    
                    {ticket.id === "free" ? (
                      <Button
                        variant={ticket.variant}
                        size="lg"
                        className="w-full"
                        onClick={handleClaimFree}
                        disabled={freeTicketsLeft <= 0 || claimingFree}
                      >
                        {claimingFree ? "Claiming..." : 
                         freeTicketsLeft <= 0 ? "Sold Out" : ticket.action}
                      </Button>
                    ) : ticket.id === "cafe" ? (
                      <Button variant={ticket.variant} size="lg" className="w-full">
                        {ticket.action}
                      </Button>
                    ) : (
                      <Button variant={ticket.variant} size="lg" className="w-full">
                        {ticket.action}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Café Locations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Partner Café Locations</CardTitle>
            <CardDescription>
              Visit any of these locations to get your €3 tickets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {cafeLocations.map((location, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{location}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8 border-muted">
          <CardHeader>
            <CardTitle className="text-lg">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <strong>Questions about tickets?</strong>
              <p className="text-muted-foreground">
                Contact Klest Drançolli at{" "}
                <a href="mailto:klestdrancolli@gmail.com" className="text-primary hover:underline">
                  klestdrancolli@gmail.com
                </a>{" "}
                or{" "}
                <a href="tel:+38349220602" className="text-primary hover:underline">
                  +383 49 220 602
                </a>
              </p>
            </div>
            <div>
              <strong>Free ticket issues?</strong>
              <p className="text-muted-foreground">
                Make sure to check your email (including spam) for confirmation. 
                Bring your QR code to the event.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetTickets;