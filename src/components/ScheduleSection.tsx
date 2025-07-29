import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Music, Palette, Target, GamepadIcon, UtensilsCrossed } from "lucide-react";

const ScheduleSection = () => {
  const scheduleData = [
    {
      time: "14:00 - 15:00",
      title: "Opening Ceremony",
      description: "Welcome to MADVERSE with live performances",
      type: "main",
      icon: Music
    },
    {
      time: "15:00 - 17:00",
      title: "DJ Sets & Live Music",
      description: "Non-stop beats from local and international DJs",
      type: "music",
      icon: Music
    },
    {
      time: "15:30 - 18:00",
      title: "Live Art Performances",
      description: "Watch street artists create masterpieces in real-time",
      type: "art",
      icon: Palette
    },
    {
      time: "16:00 - 17:30",
      title: "Archery Workshop",
      description: "Build your own bow and shoot it - hands-on experience",
      type: "workshop",
      icon: Target
    },
    {
      time: "17:00 - 19:00",
      title: "Just Dance Now",
      description: "Interactive dance battles with live screens and room codes",
      type: "interactive",
      icon: GamepadIcon
    },
    {
      time: "18:00 - 20:00",
      title: "Food & Community",
      description: "Local food vendors and community gathering",
      type: "food",
      icon: UtensilsCrossed
    },
    {
      time: "20:00 - 22:00",
      title: "After Party",
      description: "The celebration continues with special performances",
      type: "party",
      icon: Music
    }
  ];

  const typeColors = {
    main: "bg-primary text-primary-foreground",
    music: "bg-secondary text-secondary-foreground", 
    art: "bg-accent text-accent-foreground",
    workshop: "bg-cta text-cta-foreground",
    interactive: "bg-primary text-primary-foreground",
    food: "bg-secondary text-secondary-foreground",
    party: "bg-accent text-accent-foreground"
  };

  return (
    <section id="schedule" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Schedule & Lineup
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full day of non-stop creativity, music, and community activities
          </p>
        </div>

        {/* Artists Preview */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">Featured Artists</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["DJ Shadow", "MC Vibe", "Street Artist Collective", "Local Talent", "Special Guests"].map((artist, index) => (
              <Badge 
                key={artist} 
                variant="outline" 
                className="px-6 py-3 text-lg border-primary/30 hover:border-primary neon-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {artist}
              </Badge>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">
            More artists to be announced soon!
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-6 scroll-reveal">
          {scheduleData.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={index} 
                className="p-6 gradient-border hover:scale-[1.02] transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* Time */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 text-primary font-bold mb-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <Badge className={typeColors[event.type as keyof typeof typeColors]}>
                      {event.type}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Open Booths */}
        <div className="mt-16 text-center scroll-reveal">
          <h3 className="text-3xl font-bold mb-8">Open Booths & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 gradient-border neon-glow">
              <Target className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">Archery Range</h4>
              <p className="text-sm text-muted-foreground">Open all day for practice</p>
            </Card>
            <Card className="p-6 gradient-border neon-glow">
              <Palette className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Art Corner</h4>
              <p className="text-sm text-muted-foreground">Create and collaborate</p>
            </Card>
            <Card className="p-6 gradient-border neon-glow">
              <GamepadIcon className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Game Zone</h4>
              <p className="text-sm text-muted-foreground">Interactive challenges</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;