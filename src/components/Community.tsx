import { Button } from "@/components/ui/button";
import { Github, MessageCircle, BookOpen, Users, Star, GitFork } from "lucide-react";

const Community = () => {
  const resources = [
    {
      icon: Github,
      title: "GitHub Repository",
      description: "Access the complete YOLO codebase, contribute, and track development",
      link: "github.com/ultralytics",
      stats: "110k+ stars"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides, tutorials, and API references",
      link: "docs.ultralytics.com",
      stats: "Complete guides"
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Join real-time discussions with developers and researchers",
      link: "discord.gg/ultralytics",
      stats: "Active 24/7"
    },
    {
      icon: Users,
      title: "Forums & Support",
      description: "Get help, share projects, and connect with the community",
      link: "community.ultralytics.com",
      stats: "Expert help"
    }
  ];

  const contributionAreas = [
    {
      icon: Star,
      title: "Code Contributions",
      description: "Improve algorithms, fix bugs, and add new features to YOLO"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Help make our docs clearer and more comprehensive"
    },
    {
      icon: GitFork,
      title: "Research",
      description: "Contribute to cutting-edge computer vision research"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Help other developers and share your expertise"
    }
  ];

  return (
    <section id="community" className="py-20 bg-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Community & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join millions of developers, researchers, and AI enthusiasts building 
            the future of computer vision together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "5M+", label: "Monthly Visits" },
            { number: "110k+", label: "GitHub Stars" },
            { number: "25k+", label: "Discord Members" },
            { number: "1000+", label: "Contributors" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resource Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {resource.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {resource.description}
                  </p>
                  <span className="text-sm text-primary font-medium">
                    {resource.link} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source Movement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Ultralytics Open Source Movement
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of the community that's democratizing AI and making computer vision 
              accessible to everyone, everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contributionAreas.map((area, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gradient group-hover:scale-110 transition-all duration-300">
                  <area.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" className="mr-4">
              Start Contributing
            </Button>
            <Button variant="outline" size="lg">
              View Contributor Guide
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Ultralytics
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Get the latest updates on YOLO releases, research breakthroughs, 
            and community highlights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button variant="outline_white" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;