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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.button>
  );
};

export default WhatsAppButton;
