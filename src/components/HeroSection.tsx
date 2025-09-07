import { Button } from "@/components/ui/button";
import { Play, Star, ArrowDown } from "lucide-react";
import heroImage from "@/assets/HMZ.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="360° Photo Booth in Action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-secondary rounded-full animate-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 bg-accent rounded-full animate-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8">
            <Star className="h-4 w-4 text-accent fill-current" />
            <span className="text-sm font-medium"></span>
          </div>

          {/* Logo/Brand */}
          <div className="heading-accent text-lg md:text-xl mb-4">
            HMZ Visuals
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient heading-display">Spin Your Event</span>
            <br />
            <span className="heading-display">to the Next Level</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl body-elegant mb-12 max-w-3xl mx-auto leading-relaxed">
            Cape Town's interactive 360° photo booth experience for weddings, parties, 
            and unforgettable moments. Professional slow-motion capture with instant sharing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => scrollToSection('booking')}
              className="group"
            >
              Book Your Experience
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('gallery')}
              className="group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Captured</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-secondary mb-2">360°</div>
              <div className="text-muted-foreground">Slow-Mo Videos</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">24hr</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 blob-bg opacity-30"></div>
    </section>
  );
};

export default HeroSection;