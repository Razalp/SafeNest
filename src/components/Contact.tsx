import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9446726286", "+91 9846352532"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["propskeepers.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Malappuram, Kerala, India"],
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 50%, hsl(var(--primary)) 0%, transparent 50%)`,
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
            Let's Take Care of <span className="text-gradient">Your Property</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-body">
            Get in touch with us today for professional property care services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2.5 rounded-lg bg-primary/10 mr-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground font-body text-xs">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--gradient-ocean)",
                boxShadow: "var(--shadow-medium)",
              }}
            >
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-3">
                Why Choose PropsKeepers?
              </h3>
              <ul className="space-y-2 text-primary-foreground/90 font-body text-xs md:text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Experienced and trusted local team</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Regular updates and detailed reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Quick response to emergencies</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl"
              style={{
                background: "var(--gradient-card)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-lg border-border/50 focus:border-primary h-9 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border-border/50 focus:border-primary h-9 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border-border/50 focus:border-primary h-9 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property care needs..."
                    rows={4}
                    className="w-full rounded-lg border-border/50 focus:border-primary resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-2 h-9 rounded-lg transition-all duration-300 text-sm"
                >
                  Send Message <Send className="ml-2 w-3.5 h-3.5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
