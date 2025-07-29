import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cta via-accent to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Questions, ideas, or just want to chat about MADVERSE? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 scroll-reveal">
            <Card className="p-8 gradient-border">
              <h3 className="text-3xl font-bold mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Organizer */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Festival Organizer</h4>
                    <p className="text-2xl font-bold text-primary">Klest Drançolli</p>
                    <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:+38349220602" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors font-mono"
                    >
                      +383 49 220 602
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-cta flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:klestdrancolli@gmail.com" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      klestdrancolli@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cta to-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Festival Location</h4>
                    <p className="text-lg">City Park, Peja, Kosovo</p>
                    <p className="text-sm text-muted-foreground">The heart of youth culture</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 gradient-border">
              <h3 className="text-2xl font-bold mb-6 text-center">Follow the Madness</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="neon" className="h-16 flex-col gap-2">
                  <Instagram className="w-6 h-6" />
                  <span className="text-sm">@madverse_peja</span>
                </Button>
                <Button variant="neon" className="h-16 flex-col gap-2">
                  <Facebook className="w-6 h-6" />
                  <span className="text-sm">MADVERSE</span>
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Stay updated with the latest news, artist announcements, and behind-the-scenes content!
              </p>
            </Card>
          </div>

          {/* FAQ */}
          <div className="scroll-reveal">
            <Card className="p-8 gradient-border">
              <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-muted/20">
                  <h4 className="font-bold text-primary mb-2">When is MADVERSE happening?</h4>
                  <p className="text-sm text-muted-foreground">
                    The exact date will be announced soon! Follow our social media for the latest updates.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/20">
                  <h4 className="font-bold text-primary mb-2">Is this festival free?</h4>
                  <p className="text-sm text-muted-foreground">
                    The first 100 people get completely free entry! After that, tickets are only 3 EUR at local cafés or 5 EUR at the door.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/20">
                  <h4 className="font-bold text-primary mb-2">What should I bring?</h4>
                  <p className="text-sm text-muted-foreground">
                    Just bring your energy and creativity! We'll provide materials for workshops. Don't forget your phone for the QR photo uploads!
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/20">
                  <h4 className="font-bold text-primary mb-2">Can I perform or showcase my art?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Contact us or fill out the volunteer form. We're always looking for local talent to feature.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/20">
                  <h4 className="font-bold text-primary mb-2">Is there an age limit?</h4>
                  <p className="text-sm text-muted-foreground">
                    MADVERSE is designed for youth, but all ages are welcome! It's a community celebration.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center scroll-reveal">
          <Card className="p-6 gradient-border bg-gradient-to-r from-primary/10 to-accent/10">
            <h4 className="text-xl font-bold mb-2">Need Immediate Assistance?</h4>
            <p className="text-muted-foreground mb-4">
              For urgent inquiries or during the event, reach out directly:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" asChild>
                <a href="tel:+38349220602">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="neon" asChild>
                <a href="mailto:klestdrancolli@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;