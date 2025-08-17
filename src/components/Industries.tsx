import { Tractor, Car, Heart, Package, Factory, ShoppingCart, Bot, Cpu } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Tractor,
      name: "Agriculture",
      description: "Crop monitoring, livestock tracking, and precision farming solutions",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Car,
      name: "Automotive",
      description: "Autonomous driving, safety systems, and quality inspection",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Medical imaging, diagnostic assistance, and patient monitoring",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Package,
      name: "Logistics",
      description: "Package sorting, inventory management, and supply chain optimization",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Quality control, predictive maintenance, and process automation",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: ShoppingCart,
      name: "Retail",
      description: "Customer analytics, inventory tracking, and checkout automation",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Bot,
      name: "Robotics",
      description: "Navigation, object manipulation, and human-robot interaction",
      color: "from-cyan-500 to-teal-600"
    },
    {
      icon: Cpu,
      name: "Smart Cities",
      description: "Traffic monitoring, security systems, and urban planning",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ultralytics powers vision AI across diverse sectors, transforming how 
            industries operate with intelligent automation and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using Ultralytics to revolutionize 
              their operations with cutting-edge computer vision technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                Get Started Today
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;