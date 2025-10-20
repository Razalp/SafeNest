import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Clock } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your property is in safe hands with our verified professionals",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Focus on your life abroad while we care for your home",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available when you need us, wherever you are",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 50%, hsl(var(--primary-light)) 0%, transparent 50%)`,
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
            About <span className="text-gradient">SafeNest</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto font-body">
            We understand the challenges NRIs face in managing their properties from abroad. 
            SafeNest Malappuram provides comprehensive property care services, ensuring your home 
            remains secure, maintained, and ready for your return.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div 
                  className="p-8 rounded-3xl h-full transition-all duration-300"
                  style={{
                    background: "var(--gradient-card)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div className="mb-4 inline-block p-3 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
                </div>
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 md:p-8 rounded-3xl text-center"
          style={{
            background: "var(--gradient-ocean)",
            boxShadow: "var(--shadow-medium)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
            Peace of mind while you're away
          </h3>
          <p className="text-sm md:text-base text-primary-foreground/90 font-body max-w-2xl mx-auto">
            With SafeNest, you can focus on your life and career abroad, knowing that your 
            property in Malappuram is being professionally cared for.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
