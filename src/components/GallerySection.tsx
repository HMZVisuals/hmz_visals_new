import { useState, useRef, useEffect } from "react";
import { Play, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingVideo from "@/assets/video4.mp4";
import partyVideo from "@/assets/video2.mp4";
import boothVideo from "@/assets/video3.mp4";

const galleryItems = [
  {
    id: 1,
    video: weddingVideo,
    title: "Setup with Celebration",
    type: "video",
    category: "wedding"
  },
  {
    id: 2,
    video: partyVideo,
    title: "Late Night Vibes",
    type: "video",
    category: "party"
  },
  {
    id: 3,
    video: boothVideo,
    title: "Birthday Parties",
    type: "video",
    category: "equipment"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Weddings" },
  { id: "party", label: "Parties" },
  { id: "corporate", label: "Corporate" },
  { id: "equipment", label: "Equipment" }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See our 360° photo booth in action! From intimate weddings to grand celebrations, 
            we capture every moment in stunning detail.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass-card hover:bg-white/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Video */}
              <video
                src={item.video}
                muted
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
                ref={(el) => {
                  if (el) el.playbackRate = 0.5;
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-white mb-4 mx-auto animate-pulse" />
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <span className="text-white/80 text-sm capitalize">{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Type indicator */}
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm font-medium">
                📹 Video
              </div>

              {/* Glassmorphism effect */}
              <div className={`absolute inset-0 glass-card transition-opacity duration-300 ${
                hoveredItem === item.id ? "opacity-30" : "opacity-0"
              }`}></div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Follow Us for More
            </h3>
            <p className="text-muted-foreground mb-6">
              Get daily inspiration and see our latest work on social media. 
              Tag us in your 360° videos for a chance to be featured!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="glass" 
                size="lg"
                asChild
                className="group"
              >
                <a 
                  href="https://instagram.com/hmzvisuals2024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  @hmzvisuals2024
                </a>
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                asChild
                className="group"
              >
                <a 
                  href="https://tiktok.com/@hmzvisuals2024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform">🎵</div>
                  TikTok @hmzvisuals2024
                </a>
              </Button>
            </div>

            <div className="mt-6 p-4 glass rounded-xl">
              <p className="text-sm text-muted-foreground">
                💡 <span className="font-semibold">Pro Tip:</span> Use a hashtag of our name in your videos 
                and we might feature you on our official accounts!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-3 h-3 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-secondary rounded-full animate-glow opacity-60" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-glow opacity-60" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default GallerySection;