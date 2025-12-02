import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.png";

const Hero = () => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918606531933?text=Hi%20PropsKeepers%20Team!%20I'd%20like%20to%20learn%20about%20your%20Property%20Care%20Services.",
      "_blank"
    );
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={waveRef}
          className="absolute bottom-0 left-0 w-[200%] h-full opacity-10"
          style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,0 C300,80 600,80 900,0 C1200,80 1500,80 1800,0 L1800,120 L0,120 Z' fill='%230077b6'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "50% 100%",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-light)" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gradient block">PropsKeepers</span>
              <span className="text-foreground block">Malappuram</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground font-body max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your Trusted Property Care Partner in Malappuram. Professional services for NRI homeowners.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="sm"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-heading text-sm px-6 py-2 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-sm px-6 py-2 h-10 rounded-full transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 md:mt-0"
          >
            <div className="animate-float">
              <img
                src={heroImage}
                alt="PropsKeepers Property Care - Secure Home Management"
                className="w-full h-auto rounded-3xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0, 119, 182, 0.3))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
