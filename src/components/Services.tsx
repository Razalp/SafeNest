import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Lightbulb, Key, Package, Wrench, Trees, FileText } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Home,
      title: "Monthly Home Inspections",
      description: "Regular property checks with detailed photo reports sent directly to you",
    },
    {
      icon: Lightbulb,
      title: "Utility Bill Payments",
      description: "Timely payment of electricity, water, and other utility bills",
    },
    {
      icon: Key,
      title: "Key Holding & Emergency Support",
      description: "Secure key storage and immediate response to emergencies",
    },
    {
      icon: Package,
      title: "Mail/Parcel Collection",
      description: "Collect and forward your mail and parcels as needed",
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination",
      description: "Arrange repairs and maintenance with trusted local contractors",
    },
    {
      icon: Trees,
      title: "Garden & Premises Care",
      description: "Keep your garden and outdoor areas well-maintained",
    },
    {
      icon: FileText,
      title: "Legal & Documentation Support",
      description: "Assistance with property-related paperwork and documentation",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-light)" }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-body">
            Comprehensive property care solutions tailored for NRI homeowners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div 
                  className="p-6 rounded-2xl h-full backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: "var(--gradient-card)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ 
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
