import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass-premium shadow-strong border-b border-border/60"
          : "bg-background/85 backdrop-blur-md shadow-soft"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <img src={logo} alt="PropsKeepers Logo" className="h-32 w-auto drop-shadow-lg" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-ocean group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-ocean text-primary-foreground text-sm font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300 shadow-medium"
            >
              Get Started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-28 left-0 right-0 z-40 glass-premium border-b border-border/50 md:hidden"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 text-left py-3 px-4 rounded-lg hover:bg-primary/10"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 px-6 py-3 rounded-full bg-gradient-ocean text-primary-foreground text-base font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300 text-center shadow-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
