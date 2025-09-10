import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    location: "",
    hours: "2",
    cameraOption: "own",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate pricing
    const basePrice = 1400;
    const extraHourPrice = 600;
    const cameraPrice = 150;
    const hours = parseInt(formData.hours);

    let total = basePrice;
    if (hours > 2) {
      total += (hours - 2) * extraHourPrice;
    }
    if (formData.cameraOption === "professional") {
      total += hours * cameraPrice;
    }

    // Submit to Netlify Forms
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'booking');
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('eventDate', formData.eventDate);
    formDataToSubmit.append('eventTime', formData.eventTime);
    formDataToSubmit.append('location', formData.location);
    formDataToSubmit.append('hours', formData.hours);
    formDataToSubmit.append('cameraOption', formData.cameraOption);
    formDataToSubmit.append('notes', formData.notes);

    try {
      await fetch('/', {
        method: 'POST',
        body: formDataToSubmit,
      });
    } catch (error) {
      console.error('Error submitting to Netlify:', error);
    }

    // Create WhatsApp message
    const message = `Hi! I'd like to book your 360° photo booth service:

📅 Event Details:
• Name: ${formData.firstName} ${formData.lastName}
• Date: ${formData.eventDate}
• Time: ${formData.eventTime}
• Location: ${formData.location}
• Duration: ${formData.hours} hours
• Camera: ${formData.cameraOption === "own" ? "My own device" : "Professional camera"}
• Total: R${total}

📧 Contact: ${formData.email}
📱 Phone: ${formData.phone}

${formData.notes ? `💬 Notes: ${formData.notes}` : ""}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/27813641373?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you within 24 hours to confirm your booking.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Book Your Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to add some magic to your event? Fill out the form below and we'll send your booking details directly via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} name="booking" data-netlify="true" netlify-honeypot="bot-field" className="glass-card p-8 rounded-2xl space-y-6">
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="eventTime">Event Time *</Label>
                  <Input
                    id="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleInputChange("eventTime", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Event Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Venue name and address"
                  required
                  className="mt-2"
                />
              </div>

              {/* Package Options */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hours">Number of Hours *</Label>
                  <Select value={formData.hours} onValueChange={(value) => handleInputChange("hours", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 hours - R1,400</SelectItem>
                      <SelectItem value="3">3 hours - R2,000</SelectItem>
                      <SelectItem value="4">4 hours - R2,600</SelectItem>
                      <SelectItem value="5">5 hours - R3,200</SelectItem>
                      <SelectItem value="6">6 hours - R3,800</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="camera">Camera Option</Label>
                  <Select value={formData.cameraOption} onValueChange={(value) => handleInputChange("cameraOption", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="own">Use my own device (Free)</SelectItem>
                      <SelectItem value="professional">Professional camera (+R150/hr)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Special Requests or Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any special requirements, theme details, or questions..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <Button type="submit" variant="cta" size="xl" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Booking Request via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info & Quick Links */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gradient">Need Help Booking?</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/27813641373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 glass rounded-lg hover:bg-white/20 transition-colors group"
                >
                  <MessageCircle className="h-5 w-5 text-secondary mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold">WhatsApp Chat</div>
                    <div className="text-sm text-muted-foreground">Instant response</div>
                  </div>
                </a>
                <div className="flex items-center p-3 glass rounded-lg">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">+27 813 641 373</div>
                    <div className="text-sm text-muted-foreground">Call or SMS</div>
                  </div>
                </div>
                <div className="flex items-center p-3 glass rounded-lg">

                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Service Areas
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cape Town</li>
                <li>• Surrounding areas</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Travel fees may apply for locations outside Cape Town metro area.
              </p>
            </div>

            {/* Booking Guarantee */}
            <div className="glass-card p-6 rounded-xl border border-primary/20">
              <h3 className="text-lg font-bold mb-3 text-primary">Our Promise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 24-hour response guarantee</li>
                <li>✓ Professional setup & operation</li>
                <li>✓ High-quality equipment</li>
                <li>✓ Instant video delivery</li>
                <li>✓ Full insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-secondary rounded-full animate-glow opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default BookingSection;
