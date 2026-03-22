import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import ProjectPreviewHover from "@/components/ProjectPreviewHover";

const projects = [
  {
    title: "AMR-X",
    subtitle: "Autonomous mobility concept",
    description:
      "A dark, control-room style dashboard concept for monitoring automated mobility routes, live demand, and fleet status. I built it to explore how complex movement data can feel clear and decision-friendly.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Live route visibility with focused status indicators",
      "Operational overview panels for faster decisions",
      "Scenario-based interface built for clarity over clutter",
    ],
    previewScenes: [
      {
        title: "Mission Control",
        detail: "A central command view that highlights route activity, fleet readiness, and system health in one place.",
        metric: "Overview",
      },
      {
        title: "Live Routing",
        detail: "Shows how operators can follow movement, monitor bottlenecks, and react to changes with less friction.",
        metric: "Flow",
      },
      {
        title: "System Snapshot",
        detail: "Ends with a concise summary of performance signals, completed trips, and route-level confidence.",
        metric: "Result",
      },
    ],
  },
  {
    title: "RouteWeaver",
    subtitle: "Planning and navigation product",
    description:
      "A route planning product concept focused on making complex journeys feel simple. I designed it around better organization, visual guidance, and a smoother planning flow for users.",
    image: project2,
    tags: ["React", "UI Design", "Tailwind CSS", "Responsive Layout"],
    features: [
      "Clean journey setup with step-by-step user guidance",
      "Visual route comparison for easier planning decisions",
      "Responsive layout designed for mobile and desktop browsing",
    ],
    previewScenes: [
      {
        title: "Route Builder",
        detail: "Introduces a structured trip creation flow so users can build routes without feeling overwhelmed.",
        metric: "Planning",
      },
      {
        title: "Smart Compare",
        detail: "Highlights route options side by side to help users choose based on time, comfort, or convenience.",
        metric: "Compare",
      },
      {
        title: "Trip Summary",
        detail: "Wraps the experience with a polished overview that makes the selected route easy to confirm and trust.",
        metric: "Summary",
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
            A minimal showcase built around motion, clarity, and how each project actually works.
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
