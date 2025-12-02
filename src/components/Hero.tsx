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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gradient-premium block animate-shimmer bg-[length:200%_auto]">PropsKeepers</span>
              <span className="text-foreground block mt-2">Malappuram</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-muted-foreground font-body max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your Trusted Property Care Partner in Malappuram. Professional services for NRI homeowners.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-ocean hover:scale-105 text-primary-foreground font-heading text-base px-8 py-6 h-auto rounded-full shadow-strong hover:shadow-glow transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-2 border-primary text-primary hover:bg-gradient-ocean hover:text-primary-foreground hover:border-transparent font-heading text-base px-8 py-6 h-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-strong"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 md:mt-0"
          >
            <div className="animate-float relative">
              <div className="absolute inset-0 bg-gradient-ocean opacity-20 blur-3xl rounded-3xl"></div>
              <img
                src={heroImage}
                alt="PropsKeepers Property Care - Secure Home Management"
                className="w-full h-auto rounded-3xl relative z-10 shadow-premium border-4 border-white/20"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0, 119, 182, 0.4))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
