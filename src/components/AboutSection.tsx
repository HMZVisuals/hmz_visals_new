import { Camera, Users, Zap, Heart } from "lucide-react";
import boothEquipment from "@/assets/booth-equipment.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="heading-accent text-lg mb-4">
                About Us
              </div>
              <h2 className="heading-display text-4xl md:text-5xl mb-6 text-gradient">
                Who We Are
              </h2>
              <p className="body-elegant text-lg leading-relaxed mb-6">
                We're a custom, premier 360° photo booth a hire, transforming ordinary events into extraordinary experiences. Our cutting-edge technology captures every angle of your celebration in stunning slow-motion detail.
              </p>
              <p className="body-elegant text-lg leading-relaxed mb-8">
                From intimate weddings to corporate celebrations, we bring the magic of 360° capture to your special moments. Our professional equipment ensures seamless operation while your guests create unforgettable memories.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <Camera className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold mb-2">Pro Equipment</h3>
                <p className="text-sm text-muted-foreground">High-end camera </p>
              </div>
              

              
              <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold mb-2">Instant Share</h3>
                <p className="text-sm text-muted-foreground">Immediate social media ready</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold mb-2">Memories</h3>
                <p className="text-sm text-muted-foreground">Unforgettable experiences</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src={boothEquipment}
                alt="Professional 360° Photo Booth Equipment"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full blur-xl opacity-60 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-full blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-glow"></div>
        <div className="absolute bottom-40 left-10 w-3 h-3 bg-secondary rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default AboutSection;