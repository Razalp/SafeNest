import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      name: "Basic Care",
      features: [
        "Monthly property inspection",
        "Photo & video reports",
        "Emergency contact service",
        "Basic maintenance coordination",
      ],
      highlighted: false,
    },
    {
      name: "Standard Care",
      features: [
        "All Basic features",
        "Bi-weekly inspections",
        "Utility bill payments",
        "Mail/parcel collection",
        "Garden maintenance",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Premium Care",
      features: [
        "All Standard features",
        "Weekly inspections",
        "24/7 emergency response",
        "Full maintenance management",
        "Legal documentation support",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 50%)`,
        }}
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
            Comprehensive property care solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative ${service.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div
                className={`p-6 rounded-3xl h-full flex flex-col transition-all duration-300 ${service.highlighted ? 'border-2 border-primary' : ''
                  }`}
                style={{
                  background: service.highlighted ? "var(--gradient-ocean)" : "var(--gradient-card)",
                  boxShadow: service.highlighted ? "var(--shadow-medium)" : "var(--shadow-soft)",
                }}
              >
                <div className="mb-6">
                  <h3 className={`text-lg md:text-xl font-bold ${service.highlighted ? 'text-primary-foreground' : ''}`}>
                    {service.name}
                  </h3>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${service.highlighted ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                      <span className={`font-body text-sm ${service.highlighted ? 'text-primary-foreground/90' : 'text-foreground'
                        }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full rounded-full py-2 h-10 text-sm font-semibold transition-all duration-300 ${service.highlighted
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary-dark'
                    }`}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
