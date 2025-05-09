
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-lg font-medium">Portfolio</p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} TAWAN PORTFOLIO
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ul className="flex space-x-6">
              <li>
                <NavLink to="/" className="text-sm hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-sm hover:underline">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm hover:underline">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
