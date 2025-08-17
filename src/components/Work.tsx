import { Play, ExternalLink } from "lucide-react";

const Work = () => {
  // Placeholder video sections - user will add iframes manually
  const videoSections = [
    {
      id: 1,
      title: "Detect Plastic Waste Underwater with YOLO11 🌊",
      description: "Advanced object detection for identifying plastic bottles, bags, and debris in aquatic environments, enabling smarter marine conservation efforts.",
      category: "Environmental AI"
    },
    {
      id: 2,
      title: "Real-time Object Detection",
      description: "See YOLO in action with live object detection capabilities",
      category: "Live Demo"
    },
    {
      id: 3,
      title: "Autonomous Vehicle Integration",
      description: "How leading automotive companies use Ultralytics for self-driving cars",
      category: "Case Study"
    },
    {
      id: 4,
      title: "Healthcare AI Solutions",
      description: "Medical imaging breakthroughs powered by YOLO technology",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "Smart Manufacturing",
      description: "Quality control and automation in modern factories",
      category: "Manufacturing"
    },
    {
      id: 6,
      title: "Ultralytics HUB Tutorial",
      description: "No-code AI training platform walkthrough",
      category: "Tutorial"
    },
    {
      id: 7,
      title: "Community Highlights",
      description: "Amazing projects built by our global community",
      category: "Community"
    },
    {
      id: 8,
      title: "Edge Computing Demo",
      description: "Running YOLO models on edge devices for real-time inference",
      category: "Edge AI"
    },
    {
      id: 9,
      title: "Sports Analytics",
      description: "Player tracking and performance analysis in professional sports",
      category: "Sports"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            See Ultralytics in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our computer vision technology is transforming industries 
            worldwide through real projects, demos, and community showcases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoSections.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                {/* Video placeholder - user will replace with iframe */}
                {video.id === 1 ? (
                  <video 
                    src="https://dms.licdn.com/playlist/vid/v2/D4D10AQG1WsFFgSFF2Q/mp4-720p-30fp-crf28/B4DZipivfnGgCA-/0/1755191119041?e=1756033200&v=beta&t=9-DmXu0S1Z-Mv5ZIUXLv67RpV8-JWLXyMcHmmFvkhJc"
                    className="w-full aspect-video object-cover"
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                  >
                    <source src="https://dms.licdn.com/playlist/vid/v2/D4D10AQG1WsFFgSFF2Q/mp4-720p-30fp-crf28/B4DZipivfnGgCA-/0/1755191119041?e=1756033200&v=beta&t=9-DmXu0S1Z-Mv5ZIUXLv67RpV8-JWLXyMcHmmFvkhJc" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Video info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
              
              {/* Note for manual iframe addition */}
              {video.id !== 1 && (
                <div className="mt-2 text-center">
                  <span className="text-xs text-muted-foreground italic">
                    Video {video.id} - Replace with iframe
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional showcase section */}
        <div className="mt-20 bg-section rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Featured in Leading Publications
            </h3>
            <p className="text-muted-foreground">
              Our work has been recognized by top technology and research publications worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            {/* Placeholder for publication logos */}
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <span className="text-xs text-gray-500">TechCrunch</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <span className="text-xs text-gray-500">IEEE</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <span className="text-xs text-gray-500">Nature</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <span className="text-xs text-gray-500">Wired</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;