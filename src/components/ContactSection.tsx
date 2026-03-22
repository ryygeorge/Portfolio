import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-body mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Don't hesitate to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="p-6 rounded-xl bg-card border border-border flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-body">Email</p>
              <p className="text-foreground font-display font-medium">hello@example.com</p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-body">Location</p>
              <p className="text-foreground font-display font-medium">Your City, Country</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="p-8 rounded-xl bg-card border border-border space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project or just say hi..."
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-accent text-accent-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 glow-accent"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
