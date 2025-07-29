import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import TicketingSection from "@/components/TicketingSection";
import InteractiveSection from "@/components/InteractiveSection";
import VolunteerSection from "@/components/VolunteerSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <AboutSection />
        <ScheduleSection />
        <TicketingSection />
        <InteractiveSection />
        <VolunteerSection />
        <SponsorsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              MADVERSE
            </h3>
            <p className="text-muted-foreground">
              A celebration of youth, chaos, and creativity.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <span>© 2026 MADVERSE Festival</span>
            <span>•</span>
            <span>Peja, Kosovo</span>
            <span>•</span>
            <a href="mailto:klestdrancolli@gmail.com" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground/60">
            Made with ❤️ for the youth of Kosovo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
