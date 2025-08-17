import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Briefcase, Globe, MessageSquare } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      country: "USA",
      city: "San Francisco",
      address: "Silicon Valley Tech Hub",
      flag: "🇺🇸"
    },
    {
      country: "UK",
      city: "London",
      address: "European Innovation Center",
      flag: "🇬🇧"
    },
    {
      country: "Spain",
      city: "Madrid",
      address: "Mediterranean Research Lab",
      flag: "🇪🇸"
    },
    {
      country: "China",
      city: "Beijing",
      address: "Asia-Pacific Operations",
      flag: "🇨🇳"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: "hello@ultralytics.com",
      description: "Questions about our products and services"
    },
    {
      icon: Briefcase,
      title: "Enterprise Sales",
      details: "sales@ultralytics.com",
      description: "Commercial licensing and enterprise solutions"
    },
    {
      icon: MessageSquare,
      title: "Support",
      details: "support@ultralytics.com",
      description: "Technical support and troubleshooting"
    },
    {
      icon: Briefcase,
      title: "Careers",
      details: "careers@ultralytics.com",
      description: "Join our team and shape the future of AI"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? We're here to help you succeed 
            with cutting-edge computer vision solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-section rounded-xl p-6 text-center hover:shadow-card transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-primary font-medium mb-2">{method.details}</p>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-section rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Global Offices</h3>
            <div className="space-y-6 mb-8">
              {offices.map((office, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-card transition-shadow">
                  <div className="text-2xl">{office.flag}</div>
                  <div>
                    <h4 className="font-semibold">{office.country} - {office.city}</h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-3">Join Our Team</h4>
              <p className="text-muted-foreground mb-4">
                We're always looking for talented individuals to join our mission 
                of democratizing AI. Explore opportunities to work on cutting-edge 
                computer vision technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta">
                  View Open Positions
                </Button>
                <Button variant="outline">
                  LinkedIn Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-section rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or enterprise looking to integrate 
            AI vision capabilities, we have the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Try Ultralytics HUB
            </Button>
            <Button variant="outline" size="lg">
              Explore Documentation
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;