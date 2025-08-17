import { Globe, Users, Building, Github } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Building,
      title: "AI Company Behind YOLO",
      description: "Leading the revolution in computer vision with You Only Look Once technology"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Offices in USA, UK, Spain, and China serving worldwide"
    },
    {
      icon: Users,
      title: "Thriving Community",
      description: "5M+ monthly visits with active GitHub and Discord communities"
    },
    {
      icon: Github,
      title: "Open Source Movement",
      description: "Democratizing vision AI through open source innovation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're the AI company behind YOLO, democratizing vision AI with cutting-edge 
            open source and enterprise solutions that power the future of computer vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision & Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize artificial intelligence and make computer vision accessible 
                to everyone, from researchers and developers to enterprises scaling AI solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Through our open-source YOLO models and enterprise-grade Ultralytics HUB, 
                we're building the future where AI vision seamlessly integrates into every 
                industry and application.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-4">Global Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5M+</div>
                  <div className="text-sm text-muted-foreground">Monthly Visits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Global Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">110k+</div>
                  <div className="text-sm text-muted-foreground">GitHub Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;