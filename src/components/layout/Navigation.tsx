
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Home, User, Folder, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Projects", path: "/projects", icon: <Folder className="h-4 w-4" /> },
  { name: "About Me", path: "/about", icon: <User className="h-4 w-4" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="h-4 w-4" /> },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 font-bold text-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Portfolio
          </motion.span>
        </NavLink>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={toggleNavbar}
            className="p-2 ml-3 text-foreground focus:outline-none"
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col justify-center items-center">
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center">
          <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-8"
          >
            {navLinks.map((link) => (
              <motion.li key={link.path} variants={itemVariants}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-background border-b z-20 md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.path} className="py-2">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `flex items-center space-x-2 px-6 py-2 ${isActive ? "bg-primary/10" : ""}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
