import { Footprints, Smartphone, Camera, Download } from "lucide-react";

const steps = [
  {
    icon: Footprints,
    title: "Step onto the Platform",
    description: "Position yourself on our 360° platform and get ready for an amazing experience."
  },
  {
    icon: Smartphone,
    title: "Connect Your Device",
    description: "Connect your phone or use our professional camera for the best quality capture."
  },
  {
    icon: Camera,
    title: "Strike a Pose",
    description: "Get creative! Dance, pose, or celebrate while our camera captures every angle in slow motion."
  },
  {
    icon: Download,
    title: "Get Instant Media",
    description: "Receive your stunning 360° video instantly, ready to share on all your social platforms."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="heading-accent text-lg mb-4">
            Process
          </div>
          <h2 className="heading-display text-4xl md:text-5xl mb-6 text-gradient">
            How It Works
          </h2>
          <p className="body-elegant text-xl max-w-3xl mx-auto">
            Creating your 360° experience is simple and fun. Follow these four easy steps to capture memories that will last a lifetime.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-x-4"></div>
              )}
              
              <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group-hover:shadow-glow relative z-10">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Create Magic?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the rest of our satisfied customers who have transformed their events with our 360° photo booth experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
              >
                Book Your Experience
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-card px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-secondary rounded-full animate-glow opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-glow opacity-60" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HowItWorksSection;