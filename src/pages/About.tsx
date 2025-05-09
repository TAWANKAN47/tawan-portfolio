
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Resume download handler
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual PDF file
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Photo and contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <div className="bg-accent/30 rounded-full w-64 h-64 flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Tawan Kanjanakomol"
                  className="object-cover w-full h-full"
                />
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium">tawanch2222@gmail.com</p>
                  </li>
                  <li>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium">998 Moo 11, Na-an Subdistrict, Mueang Loei District,
Loei 42000, Thailand</p>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/TAWANKAN47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>

              <Button
                onClick={handleDownloadResume}
                className="w-full"
                size="lg"
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right column - About content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 lg:col-span-2"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold mb-2">About Me</h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg mb-8 leading-relaxed">
                I am a passionate and adaptable learner who values clear communication and effective teamwork. I am patient under pressure, open to feedback, and always eager to grow both personally and professionally. I strive to improve continuously and contribute positively in every challenge I take on.
              </p>
              <p className="mb-8 leading-relaxed">
               As a student passionate about frontend development and UI/UX design, I strive to turn ideas into clean, functional, and visually appealing websites. While still early in my career, I am eager to learn, grow, and focus on creating user-centered experiences that are both intuitive and effective.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["HTML", "CSS", "Tailwind CSS", "JavaScript", "Vue.js", "React", "Flutter", "Dart", "Figma"].map(
                  (skill, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-4 text-center shadow-sm"
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Project Experience</h2>
              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">The Art Shop Web Application</h3>
                      <p className="text-primary">University of Phayao</p>
                    </div>
                    <span className="text-muted-foreground text-sm">Nov 2023 - Feb 2024</span>
                  </div>
                  <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                    <li>Built a responsive art store website using HTML, CSS, JavaScript, Vue.js, and MongoDB, allowing users
to browse and view artwork easily on all devices.</li>
                    <li>Designed a clean and user-friendly interface, and implemented product and user data storage using
MongoDB for smooth backend integration.</li>
                    
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Team Up Mobile Application</h3>
                      <p className="text-primary">University of Phayao</p>
                    </div>
                    <span className="text-muted-foreground text-sm">Oct 2024 - Feb 2025</span>
                  </div>
                  <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                    <li>Developed a cross-platform mobile application using Flutter and Dart for team-based sports
scheduling and communication</li>
                    <li>Integrated MongoDB Atlas to manage user profiles, match data, and real-time team coordination</li>
                    <li>Designed an intuitive interface for creating and joining game rooms, managing profiles, and viewing
team maps</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor Degree in Computer Engineering</h3>
                    <p className="text-primary">UNIVERSITY OF PHAYAO</p>
                  </div>
                  <span className="text-muted-foreground text-sm">GPAX: 2.67</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                 Relevant Projects: Fresh Food Web Application
                </p>
                <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                    <li>Developed a cross-platform mobile application using Flutter and Dart for team-based sports
                        scheduling and communication
                    </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
