import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Ahmed Rahman",
      location: "Dubai, UAE",
      text: "SafeNest has been a lifesaver! I can focus on my work in Dubai without worrying about my property back home. Their monthly reports are detailed and always on time.",
      rating: 5,
    },
    {
      name: "Fatima Shareef",
      location: "London, UK",
      text: "The peace of mind SafeNest provides is invaluable. They handled an emergency repair quickly and kept me informed throughout. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rasheed Ali",
      location: "Riyadh, Saudi Arabia",
      text: "Professional, reliable, and trustworthy. SafeNest takes care of everything from bills to garden maintenance. Best decision I made for my Malappuram property.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-body">
            Trusted by NRIs across the globe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div 
                className="p-8 rounded-3xl h-full backdrop-blur-sm transition-all duration-300"
                style={{
                  background: "var(--gradient-card)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground font-body mb-4 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-semibold text-base">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
