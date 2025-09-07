import { Instagram, MessageCircle, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              HMZ Visuals
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your local premier 360° photo booth experience. We transform ordinary events into extraordinary memories.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/hmzvisuals2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://tiktok.com/@hmzvisuals2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <div className="text-secondary group-hover:scale-110 transition-transform">🎵</div>
              </a>
              <a 
                href="https://wa.me/27123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <MessageCircle className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Book Now
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-3" />
                <span className="text-muted-foreground">+27 123 456 789PLACEHOLDER</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-3" />
                <span className="text-muted-foreground">hmz.visuals.contact@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-3 mt-1" />
                <div className="text-muted-foreground">
                  <div>Cape Town, South Africa</div>
                  <div className="text-sm">Serving Western Cape</div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 glass p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Operating Hours</h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Mon - Fri: 9:00 AM - 8:00 PM</div>
                <div>Sat - Sun: 10:00 AM - 10:00 PM</div>
                <div className="text-primary font-medium">Events: 24/7 Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 HMZ Visuals. All rights reserved.
            </div>

            <div className="flex items-center text-muted-foreground text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> in Cape Town
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center text-muted-foreground text-sm mt-4">
            Developed by <a href="https://github.com/ANONYMOUSx46" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ANONYMOUSx46</a> on GitHub
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="glass px-4 py-2 rounded-lg">
              <div className="text-sm text-muted-foreground">✓ Fully Insured</div>
            </div>
            <div className="glass px-4 py-2 rounded-lg">
              <div className="text-sm text-muted-foreground">✓ Professional Equipment</div>
            </div>
            <div className="glass px-4 py-2 rounded-lg">
              <div className="text-sm text-muted-foreground">✓ 24hr Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-10 right-20 w-2 h-2 bg-primary rounded-full animate-glow opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-secondary rounded-full animate-glow opacity-40" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;