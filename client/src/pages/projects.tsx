import { motion } from "framer-motion";
import { projects } from "@/data/projects-data";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Code, ExternalLink, FileText, Github, Lightbulb, Rocket, Users } from "lucide-react";

const statusColors = {
  Active: "bg-[hsl(150,100%,50%,0.2)] text-[hsl(150,100%,50%)]",
  Completed: "bg-[hsl(180,100%,50%,0.2)] text-[hsl(180,100%,50%)]",
  Development: "bg-[hsl(270,100%,70%,0.2)] text-[hsl(270,100%,70%)]",
  Research: "bg-[hsl(220,100%,50%,0.2)] text-[hsl(220,100%,50%)]",
  Beta: "bg-[hsl(60,100%,50%,0.2)] text-[hsl(60,100%,50%)]",
};

const categoryIcons = {
  Hardware: "⚡",
  Software: "💻", 
  Mixed: "🔧",
  "AI/ML": "🧠",
  Robotics: "🤖",
  IoT: "📡",
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-russo text-5xl mb-8 text-[hsl(180,100%,50%)] neon-text">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our innovative projects that push the boundaries of technology and create real-world impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassmorphismCard>
                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{categoryIcons[project.category]}</span>
                    <Badge variant="secondary" className={statusColors[project.status]}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-[hsl(180,100%,50%)] border-[hsl(180,100%,50%)]">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="font-orbitron text-xl font-bold gradient-text">
                  {project.name}
                </h3>

                {/* Project Timeline */}
                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={14} />
                    <span>{project.startDate}</span>
                    {project.endDate && <span>- {project.endDate}</span>}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[hsl(0,0%,16%)] text-[hsl(180,100%,50%)] text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[hsl(220,100%,50%)] hover:text-white p-0"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[hsl(150,100%,50%)] hover:text-white p-0"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.docsUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[hsl(270,100%,70%)] hover:text-white p-0"
                    >
                      <FileText size={16} className="mr-1" />
                      Docs
                    </Button>
                  )}
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>

        {/* Project Ideas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <GlassmorphismCard hover={false} className="p-12">
            <h3 className="font-orbitron text-3xl font-bold mb-6 text-[hsl(180,100%,50%)]">
              Have a Project Idea?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              We're always excited to explore new ideas and innovative solutions. Share your vision with us and let's build something amazing together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[hsl(0,0%,16%)] rounded-lg p-6"
              >
                <Lightbulb className="text-3xl text-[hsl(180,100%,50%)] mb-4 mx-auto" size={48} />
                <h4 className="font-orbitron text-lg font-bold mb-2 text-[hsl(150,100%,50%)]">
                  Innovation
                </h4>
                <p className="text-gray-400 text-sm">Cutting-edge solutions for real-world problems</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[hsl(0,0%,16%)] rounded-lg p-6"
              >
                <Users className="text-3xl text-[hsl(220,100%,50%)] mb-4 mx-auto" size={48} />
                <h4 className="font-orbitron text-lg font-bold mb-2 text-[hsl(150,100%,50%)]">
                  Collaboration
                </h4>
                <p className="text-gray-400 text-sm">Work with passionate and skilled team members</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[hsl(0,0%,16%)] rounded-lg p-6"
              >
                <Rocket className="text-3xl text-[hsl(270,100%,70%)] mb-4 mx-auto" size={48} />
                <h4 className="font-orbitron text-lg font-bold mb-2 text-[hsl(150,100%,50%)]">
                  Impact
                </h4>
                <p className="text-gray-400 text-sm">Create solutions that make a difference</p>
              </motion.div>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-[hsl(180,100%,50%)] to-[hsl(220,100%,50%)] text-[hsl(0,0%,4%)] hover:scale-105 transition-transform animate-glow font-semibold px-8 py-4"
            >
              Submit Your Idea
            </Button>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  );
}
