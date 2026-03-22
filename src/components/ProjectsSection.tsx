import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import ProjectPreviewHover from "@/components/ProjectPreviewHover";

const projects = [
  {
    title: "AMR-X",
    subtitle: "Community-driven antibiotic resistance surveillance platform",
    description:
      "AMR-X is a real-world healthcare intelligence platform that collects antibiotic usage data from patients, pharmacists, and labs — then visualizes regional resistance patterns through live heatmaps and ML-based predictions. Built to democratize AMR surveillance and make it accessible beyond just clinical experts.",
    image: project1,
    tags: ["Flask", "Firebase", "Python", "Google Maps API", "Machine Learning"],
    features: [
      "Live regional heatmaps showing antibiotic resistance hotspots",
      "ML model predicting resistance likelihood from usage patterns",
      "Community data pipeline combining patients, pharmacists, and lab antibiograms",
    ],
    previewScenes: [
      {
        title: "Resistance Heatmap",
        detail: "A regional map overlaying antibiotic usage density with predicted resistance risk — instantly readable by clinicians and non-experts alike.",
        metric: "Surveillance",
      },
      {
        title: "ML Prediction",
        detail: "Usage frequency and regional data feed into a resistance likelihood model, flagging high-risk zones before outbreaks spread.",
        metric: "Prediction",
      },
      {
        title: "Community Data",
        detail: "Aggregates inputs from multiple sources into a unified dashboard showing top antibiotics used, trend lines, and risk alerts.",
        metric: "Analytics",
      },
    ],
  },
  {
    title: "RouteWeaver",
    subtitle: "Intelligent, personalized road trip & itinerary manager",
    description:
      "RouteWeaver simplifies road trip planning through smart automation and a clutter-free interface. Users build custom routes, explore travel packages near them, get interest-based destination suggestions, and use SmartVacay — an AI feature that reads your work calendar to recommend the best travel windows.",
    image: project2,
     sceneImages: [
      new URL("../assets/rw-query.jpg", import.meta.url).href,
      new URL("../assets/rw-smartvacay.jpg", import.meta.url).href,
      new URL("../assets/rw-suggestions.jpg", import.meta.url).href,
    ],
    tags: ["React", "Node.js", "MongoDB", "Google Maps API", "Gemini API", "OSRM"],
    features: [
      "SmartVacay: AI reads your Google Calendar to suggest optimal travel dates",
      "Interest-based suggestions — nature, food, history, adventure and more",
      "Saved routes, pre-built travel packages, and real-time route optimization",
    ],
    previewScenes: [
      {
        title: "Route Builder",
        detail: "Users set their start, destination, and interests — RouteWeaver builds an optimized itinerary with stops and travel time in real time.",
        metric: "Planning",
      },
      {
        title: "SmartVacay",
        detail: "Syncs with Google Calendar to identify free windows and suggests the best travel dates so work and leisure stay balanced.",
        metric: "AI",
      },
      {
        title: "Suggestions Map",
        detail: "An interactive map shows curated places along the chosen route with ratings, photos, and one-click navigation.",
        metric: "Discovery",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.16),transparent_28%),radial-gradient(circle_at_bottom,hsl(var(--primary)/0.18),transparent_34%)]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-border/40" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.35em] text-accent">Selected Work</p>
          <h2 className="mx-auto mb-4 max-w-4xl font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Real projects. Real problems solved — from healthcare intelligence to smart travel planning.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base text-muted-foreground md:text-lg">
            Hover to reveal a floating visual walkthrough, then click any project to open the full case-study style view.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="w-full"
            >
              <ProjectPreviewHover project={project} index={i} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 text-center font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground/70"
        >
          Hover to preview · Click to explore
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
