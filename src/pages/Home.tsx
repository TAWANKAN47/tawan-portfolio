
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Home = () => {
  // Resume would be a PDF file, here we're just simulating the download functionality
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual PDF file
    const link = document.createElement("a");
    link.href = "/public/Resume.pdf"; // This would be the path to your PDF file
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="section-padding flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <motion.span
                className="inline-block text-sm font-medium text-primary mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi there! Thanks for visiting my portfolio.
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary">TAWAN KANJANAKOMOL</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I am a passionate and adaptable learner who values clear communication and effective teamwork. I am patient under pressure, open to feedback, and always eager to grow both personally and professionally. I strive to improve continuously and contribute positively in every challenge I take on.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" onClick={handleDownloadResume}>
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
            className="flex-1 bg-accent/30 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/public/pf_me.JPG" 
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selected works that reflect my web development skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Project Title {item}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A short description of the project and the technologies used.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/projects">View Details</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
