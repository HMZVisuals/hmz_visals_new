import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const testimonials = [
  {
    id: 1,
    name: "Mishkah and Kayden",
    event: "Wedding Celebration",
    rating: 5,
    text: "Absolutely incredible experience! The 360° booth was one of the highlights of our wedding. Our guests couldn't stop talking about it and the videos turned out amazing. Professional service from start to finish.",
    location: "Grassy Park"
  },
  {
    id: 2,
    name: "Logan",
    event: "Corporate Event",
    rating: 5,
    text: "We hired HMZ Visuals for our company's annual party and it was a huge hit! The setup was seamless and fantastic. Highly recommend for any corporate event.",
    location: "Cape Town CBD"
  },
  {
    id: 3,
    name: "Ethan",
    event: "21st Birthday Party",
    rating: 5,
    text: "Best decision ever! The 360° videos came out so cool and everyone at my party loved it. The team was super professional and made sure everything ran smoothly. Thank you for making my day special!",
    location: "Green Point"
  },
  {
    id: 4,
    name: "James & Lisa",
    event: "Anniversary Celebration",
    rating: 5,
    text: "We used their service for our 10th anniversary party and wow! The quality was outstanding and the memories we captured are priceless. Will definitely be using them again.",
    location: "Camps Bay"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    review: "",
    allowPosting: false
  });
  const { toast } = useToast();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to Netlify Forms
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'review');
    formDataToSubmit.append('name', reviewForm.name);
    formDataToSubmit.append('review', reviewForm.review);
    formDataToSubmit.append('allowPosting', reviewForm.allowPosting.toString());

    try {
      await fetch('/', {
        method: 'POST',
        body: formDataToSubmit,
      });
    } catch (error) {
      console.error('Error submitting to Netlify:', error);
    }

    // Create WhatsApp message for review
    const message = `New Review Submission:

👤 Name: ${reviewForm.name}
⭐ Review: ${reviewForm.review}
📝 Can post publicly: ${reviewForm.allowPosting ? "Yes" : "No"}

Thank you for your feedback!`;

    const whatsappUrl = `https://wa.me/27813641373?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback. We appreciate your support!",
    });

    // Reset form
    setReviewForm({ name: "", review: "", allowPosting: false });
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their 360° photo booth experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl min-h-[400px] flex flex-col justify-between">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-primary/30 mb-6" />

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].event} • {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="glass"
                size="icon"
                onClick={prevTestimonial}
                className="hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-primary scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={nextTestimonial}
                className="hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Review Submission Form */}
          <div className="sticky top-24">
            <div className="glass-card p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground mb-6">
                Had an amazing time with our 360° photo booth? We'd love to hear about your experience!
              </p>

              <form onSubmit={handleReviewSubmit} name="review" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="review" />
                <p className="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div>
                  <label htmlFor="reviewName" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <Input
                    id="reviewName"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Sarah & Michael"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reviewText" className="block text-sm font-semibold mb-2">
                    Your Review
                  </label>
                  <Textarea
                    id="reviewText"
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, review: e.target.value }))}
                    placeholder="Tell us about your experience with our 360° photo booth..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="allowPosting"
                    checked={reviewForm.allowPosting}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, allowPosting: e.target.checked }))}
                    className="mt-1"
                  />
                  <label htmlFor="allowPosting" className="text-sm text-muted-foreground">
                    I allow this review to be posted on your website and social media
                  </label>
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Review
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">100+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-4 h-4 bg-secondary rounded-full animate-glow opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TestimonialsSection;
