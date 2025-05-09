
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock project data, in a real application this would come from a database or API
const codeProjects = [
  {
    id: 1,
    title: "Team Up Mobile Application",
    description: "Developed a cross-platform mobile application using Flutter and Dart for team-based sports scheduling and communication",
    image: "/logo.jpg",
    tags: ["Flutter", "Dart", "MongoDB Atlas"],
  },
  {
    id: 2,
    title: "My Art Shop",
    description: "Developed a responsive art store website that allows users to easily browse and view artworks across all devices.",
    image: "/art7.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Vue.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Fresh Food Web Application",
    description: "A comprehensive task manager with user authentication",
    image: "/Fresh Food.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
  },
];

const figmaProjects = [
  {
    id: 1,
    title: "Dog and Cats Mobile Application",
    description: "Designed a pet adoption mobile app that allows users to register, browse profiles of dogs and cats, and search for pets with an intuitive and friendly user interface.",
    image: "/cat_dog.png",
    tags: ["UI/UX", "Mobile", "Figma"],
    figmaLink: "https://www.figma.com/design/VYJc9BbCoHLH7MSV07xvdZ/Untitled?node-id=0-1&t=s73oPyw5KnVaH8o2-",
  },
  {
    id: 2,
    title: "Kanban Board",
    description: "Designed a clean and user-friendly Kanban board to help users stay focused and organized while managing their tasks.",
    image: "/kanban.png",
    tags: ["Website", "UI Design", "Figma"],
    figmaLink: "https://www.figma.com/design/ZyLtCuKz6S7AatY7TqG70V/mockup?node-id=0-1&t=QrgSdVwL7G88ASMF-1",
  },
  
];

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, including both development projects and design work created in Figma.
          </p>
        </motion.div>

        <Tabs defaultValue="code" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="code">Projects from Code</TabsTrigger>
              <TabsTrigger value="figma">Projects from Figma</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="code">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {codeProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="figma">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {figmaProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        View Design
                      </Button>
                      <Button size="sm" asChild>
                      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                        View in Figma
                      </a>
                    </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
