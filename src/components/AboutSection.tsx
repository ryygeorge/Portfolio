import { motion } from "framer-motion";
import { GraduationCap, Rocket, BookOpen, Heart } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Final Year Student", desc: "Wrapping up my degree and ready to step into the professional world" },
  { icon: Rocket, title: "Eager Learner", desc: "Always exploring new tools, frameworks, and ideas to grow my skills" },
  { icon: BookOpen, title: "2 Projects Built", desc: "Hands-on experience building real applications from scratch" },
  { icon: Heart, title: "Passionate", desc: "Genuinely love creating things with code, even as a beginner" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-body mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-foreground font-body text-xl leading-relaxed mb-6">
              I'm a final year student who discovered a love for building things with code.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              I'm still at the beginning of my journey, and I'm honest about that. I don't know everything — 
              but what I do have is curiosity, drive, and a willingness to learn. Every line of code I write 
              teaches me something new.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              I've completed 2 projects so far that challenged me to think critically, solve real problems, 
              and deliver working products. I'm excited to keep building, keep learning, and find opportunities 
              where I can grow alongside a great team.
            </p>

            <div className="flex flex-wrap gap-3">
              {["HTML/CSS", "JavaScript", "React", "Git", "Problem Solving", "Teamwork"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-secondary text-sm font-body text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{title}</h3>
                    <p className="text-muted-foreground font-body text-sm mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
