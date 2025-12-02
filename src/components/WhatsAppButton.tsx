import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/918606531933?text=Hi%20PropsKeepers%20Team!%20I'd%20like%20to%20learn%20about%20your%20Property%20Care%20Services.",
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 md:p-5 rounded-full bg-[#25D366] text-white shadow-strong hover:shadow-glow transition-all duration-300"
      style={{
        boxShadow: "0 8px 30px rgba(37, 211, 102, 0.5), 0 0 60px rgba(37, 211, 102, 0.3)",
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.button>
  );
};

export default WhatsAppButton;
