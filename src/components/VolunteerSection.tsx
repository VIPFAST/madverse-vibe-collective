import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HandHeart, Mic, Palette, Users, Star, Send } from "lucide-react";
import { useState } from "react";

const VolunteerSection = () => {
  const [guestSuggestion, setGuestSuggestion] = useState("");
  const [guestReason, setGuestReason] = useState("");
  const [volunteerType, setVolunteerType] = useState("");

  return (
    <section id="volunteer" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help shape the future of MADVERSE - volunteer, suggest artists, and be part of something bigger
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Suggest a Guest */}
          <Card className="p-8 gradient-border scroll-reveal">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Suggest Next Year's Guest</h3>
              <p className="text-muted-foreground">
                Know an amazing artist, DJ, or performer? Help us discover the next big act for MADVERSE 2025!
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="guest-name" className="text-sm font-medium">
                  Artist/DJ/Performer Name *
                </Label>
                <Input
                  id="guest-name"
                  placeholder="e.g., DJ Shadow, Street Artist Collective"
                  value={guestSuggestion}
                  onChange={(e) => setGuestSuggestion(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="guest-type" className="text-sm font-medium">
                  Type of Performance
                </Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select performance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dj">DJ/Electronic Music</SelectItem>
                    <SelectItem value="live-music">Live Music</SelectItem>
                    <SelectItem value="street-art">Street Art/Graffiti</SelectItem>
                    <SelectItem value="dance">Dance Performance</SelectItem>
                    <SelectItem value="workshop">Workshop Leader</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="guest-reason" className="text-sm font-medium">
                  Why would they be perfect for MADVERSE? *
                </Label>
                <Textarea
                  id="guest-reason"
                  placeholder="Tell us about their style, energy, and why they'd connect with our youth-driven festival..."
                  value={guestReason}
                  onChange={(e) => setGuestReason(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="contact-info" className="text-sm font-medium">
                  How to reach them? (optional)
                </Label>
                <Input
                  id="contact-info"
                  placeholder="Instagram, website, booking email..."
                  className="mt-2"
                />
              </div>

              <Button variant="festival" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Submit Suggestion
              </Button>
            </form>
          </Card>

          {/* Volunteer */}
          <Card className="p-8 gradient-border scroll-reveal">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Volunteer With Us</h3>
              <p className="text-muted-foreground">
                Be part of the magic behind MADVERSE. Join our team and help create unforgettable experiences!
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name" className="text-sm font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="Your first name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name" className="text-sm font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Your last name"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="volunteer-type" className="text-sm font-medium">
                  How would you like to help? *
                </Label>
                <Select value={volunteerType} onValueChange={setVolunteerType}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose your volunteer role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artist">Artist/Performer</SelectItem>
                    <SelectItem value="setup">Event Setup & Breakdown</SelectItem>
                    <SelectItem value="registration">Registration & Check-in</SelectItem>
                    <SelectItem value="activities">Activity Helper</SelectItem>
                    <SelectItem value="cleanup">Community Cleanup</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="tech">Technical Support</SelectItem>
                    <SelectItem value="general">General Helper</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience" className="text-sm font-medium">
                  Tell us about yourself
                </Label>
                <Textarea
                  id="experience"
                  placeholder="Any relevant experience, skills, or just why you want to be part of MADVERSE..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="availability" className="text-sm font-medium">
                  When are you available?
                </Label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Day of event</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Setup day (day before)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">Planning meetings</span>
                  </label>
                </div>
              </div>

              <Button variant="cta" className="w-full" size="lg">
                <HandHeart className="w-4 h-4 mr-2" />
                Join the Team
              </Button>
            </form>
          </Card>
        </div>

        {/* Volunteer Benefits */}
        <div className="mt-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Why Volunteer?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <HandHeart className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Make Impact</h4>
              <p className="text-sm text-muted-foreground">Help create positive change in your community</p>
            </Card>
            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <Users className="w-8 h-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Meet People</h4>
              <p className="text-sm text-muted-foreground">Connect with like-minded creative individuals</p>
            </Card>
            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <Palette className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Gain Skills</h4>
              <p className="text-sm text-muted-foreground">Learn event management and creative skills</p>
            </Card>
            <Card className="p-6 gradient-border text-center group hover:scale-105 transition-all">
              <Mic className="w-8 h-8 text-cta mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Get Recognition</h4>
              <p className="text-sm text-muted-foreground">Volunteer certificates and social recognition</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;