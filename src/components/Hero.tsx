import { Button } from "@/components/ui/button";
import { Star, Image, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { icon: Star, label: "110k+ GitHub stars", value: "110k+" },
    { icon: Image, label: "1B+ images analyzed daily", value: "1B+" },
    { icon: Zap, label: "3M+ models trained daily", value: "3M+" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(28, 65, 150, 0.9), rgba(0, 188, 212, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering the Future of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Vision AI
            </span>{" "}
            with YOLO
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Trusted by millions worldwide for state-of-the-art object detection, 
            segmentation, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="outline_white" size="lg" className="text-lg px-8 py-3">
              Explore Models
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Try Ultralytics HUB
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;