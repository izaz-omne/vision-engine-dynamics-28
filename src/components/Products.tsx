import { Button } from "@/components/ui/button";
import { Eye, Layers, Activity, Sparkles, Shield, Zap } from "lucide-react";

const Products = () => {
  const yoloVersions = [
    {
      name: "YOLOv5",
      description: "The foundation that started it all",
      status: "Legacy",
      color: "bg-gray-100"
    },
    {
      name: "YOLOv8",
      description: "Enhanced performance and accuracy",
      status: "Stable",
      color: "bg-blue-100"
    },
    {
      name: "YOLO11",
      description: "Latest breakthrough in vision AI",
      status: "Latest",
      color: "bg-brand-gradient"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Object Detection",
      description: "Identify and locate objects in images and videos with precision"
    },
    {
      icon: Layers,
      title: "Segmentation",
      description: "Pixel-perfect segmentation for detailed object analysis"
    },
    {
      icon: Activity,
      title: "Pose Estimation",
      description: "Track human poses and movements in real-time"
    },
    {
      icon: Sparkles,
      title: "Classification",
      description: "Categorize images with state-of-the-art accuracy"
    },
    {
      icon: Shield,
      title: "Object Tracking",
      description: "Follow objects across video frames seamlessly"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast inference for production applications"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Products & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the groundbreaking YOLO family to enterprise-ready HUB platform, 
            discover our complete suite of vision AI solutions.
          </p>
        </div>

        {/* YOLO Family Evolution */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">The YOLO Family</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yoloVersions.map((version, index) => (
              <div key={index} className="relative group">
                <div className={`${version.color} rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 group-hover:scale-105`}>
                  <h4 className={`text-2xl font-bold mb-2 ${version.name === "YOLO11" ? "text-white" : "text-gray-800"}`}>
                    {version.name}
                  </h4>
                  <p className={`mb-4 ${version.name === "YOLO11" ? "text-white/90" : "text-gray-600"}`}>
                    {version.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    version.status === "Latest" 
                      ? "bg-white/20 text-white" 
                      : version.status === "Stable"
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {version.status}
                  </span>
                </div>
                {index < yoloVersions.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-gradient"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-section rounded-xl p-6 hover:shadow-card transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ultralytics HUB */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Ultralytics HUB</h3>
              <p className="text-lg text-muted-foreground mb-6">
                No-code training platform that makes AI accessible to everyone. 
                Train, validate, and deploy your custom models without writing a single line of code.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gradient rounded-full"></div>
                  <span>Dataset management and annotation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gradient rounded-full"></div>
                  <span>One-click model training</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gradient rounded-full"></div>
                  <span>Cloud-based deployment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gradient rounded-full"></div>
                  <span>Real-time monitoring</span>
                </li>
              </ul>
              <Button variant="cta" size="lg">
                Try HUB for Free
              </Button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h4 className="text-xl font-semibold mb-4">Enterprise Licensing</h4>
              <p className="text-muted-foreground mb-6">
                Commercial flexibility without AGPL restrictions. Perfect for enterprises 
                looking to integrate YOLO into proprietary applications.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Commercial Use</span>
                  <span className="text-green-500 font-semibold">✓</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Source Code Access</span>
                  <span className="text-green-500 font-semibold">✓</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Priority Support</span>
                  <span className="text-green-500 font-semibold">✓</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Custom Training</span>
                  <span className="text-green-500 font-semibold">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;