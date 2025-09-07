import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Calculator, Clock, Camera, Users } from "lucide-react";

const PricingSection = () => {
  const [hours, setHours] = useState(2);
  const [useOwnCamera, setUseOwnCamera] = useState(true);

  const basePrice = 1400; // 2 hours
  const extraHourPrice = 600;
  const cameraPrice = 150;

  const calculateTotal = () => {
    let total = basePrice;
    if (hours > 2) {
      total += (hours - 2) * extraHourPrice;
    }
    if (!useOwnCamera) {
      total += hours * cameraPrice;
    }
    return total;
  };

  const deposit = Math.round(calculateTotal() * 0.5);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="heading-accent text-lg mb-4">
            Investment
          </div>
          <h2 className="heading-display text-4xl md:text-5xl mb-6 text-gradient">
            Rates & Pricing
          </h2>
          <p className="body-elegant text-xl max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Professional 360° photo booth experience at affordable rates.
            *Note: Payments can not be made via website, only bookings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Cards */}
          <div className="space-y-6">
            {/* Base Package */}
            <div className="glass-card p-8 rounded-2xl border-2 border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <div>
                  <h3 className="text-2xl font-bold">2 Hour Package</h3>
                  <p className="text-muted-foreground">Perfect for most events</p>
                </div>
              </div>
              
              <div className="text-4xl font-bold text-gradient mb-6">
                R1,400
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>2 hours of 360° photo booth</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Professional operator on-site</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Instant video sharing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Setup and breakdown included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>Use your own device</span>
                </li>
              </ul>
            </div>

            {/* Add-ons */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center">
                <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Extra Hour</h4>
                <div className="text-2xl font-bold text-secondary">R600</div>
                <p className="text-sm text-muted-foreground mt-2">Per additional hour</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <Camera className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Our Camera</h4>
                <div className="text-2xl font-bold text-accent">+R150</div>
                <p className="text-sm text-muted-foreground mt-2">Per hour upgrade</p>
              </div>
            </div>

            {/* Deposit Info */}
            <div className="glass-card p-6 rounded-xl border border-primary/30">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-bold text-lg">Booking Information</h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">50% deposit</span> secures your booking. 
                Balance due on the day of your event. All major payment methods accepted.
              </p>
            </div>
          </div>

          {/* Price Calculator */}
          <div className="sticky top-24">
            <div className="glass-card p-8 rounded-2xl border border-primary/20">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Price Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Hours Selector */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Number of Hours</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setHours(Math.max(2, hours - 1))}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold w-12 text-center">{hours}</span>
                    <button 
                      onClick={() => setHours(hours + 1)}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Minimum 2 hours</p>
                </div>

                {/* Camera Option */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Camera Option</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        checked={useOwnCamera} 
                        onChange={() => setUseOwnCamera(true)}
                        className="mr-3"
                      />
                      <span>Use my own device (Free)</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        checked={!useOwnCamera} 
                        onChange={() => setUseOwnCamera(false)}
                        className="mr-3"
                      />
                      <span>Use professional camera (+R{cameraPrice}/hr)</span>
                    </label>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex justify-between">
                    <span>Base package (2 hrs)</span>
                    <span>R{basePrice}</span>
                  </div>
                  {hours > 2 && (
                    <div className="flex justify-between">
                      <span>Extra hours ({hours - 2})</span>
                      <span>R{(hours - 2) * extraHourPrice}</span>
                    </div>
                  )}
                  {!useOwnCamera && (
                    <div className="flex justify-between">
                      <span>Camera upgrade</span>
                      <span>R{hours * cameraPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-primary">R{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>50% Deposit</span>
                    <span>R{deposit}</span>
                  </div>
                </div>

                {/* Book Button */}
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full mt-6"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book for R{calculateTotal()}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-4 h-4 bg-secondary rounded-full animate-glow opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default PricingSection;