import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 9446726286 / +91 9846352532" },
    { icon: Mail, text: "propskeepers.com" },
    { icon: MapPin, text: "Malappuram, Kerala" },
  ];

  return (
    <footer className="relative py-12 md:py-16 -mx-2 md:-mx-4" style={{ background: "var(--gradient-ocean)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-3">
              PropsKeepers
            </h3>
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
              Your trusted property care partner in Malappuram. Providing peace of mind to NRI homeowners.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-body transition-colors duration-200 text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-2">
                    <Icon className="w-4 h-4 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/80 font-body text-sm">
                      {info.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-primary-foreground/70 font-body text-xs md:text-sm">
              © 2025 PropsKeepers Malappuram. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs md:text-sm">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs md:text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
