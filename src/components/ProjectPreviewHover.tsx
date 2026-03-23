import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ProjectPreviewScene = {
  title: string;
  detail: string;
  metric: string;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  sceneImages?: string[];
  tags: string[];
  features: string[];
  previewScenes: ProjectPreviewScene[];
};

type ProjectPreviewHoverProps = {
  project: ProjectData;
  index: number;
};

const previewCardOffsets = ["-rotate-6 -translate-x-3", "translate-y-5", "rotate-6 translate-x-3"];

const ProjectPreviewHover = ({ project, index }: ProjectPreviewHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverScene, setHoverScene] = useState(0);
  const [detailScene, setDetailScene] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const activeHoverPreview = project.previewScenes[hoverScene];
  const activeDetailPreview = project.previewScenes[detailScene];
  const titleSizeClass = useMemo(
    () => (index === 0 ? "text-5xl md:text-7xl lg:text-[7rem]" : "text-4xl md:text-6xl lg:text-[6rem]"),
    [index],
  );

  useEffect(() => {
    if (!isHovered) return;

    const interval = window.setInterval(() => {
      setHoverScene((current) => (current + 1) % project.previewScenes.length);
    }, 1600);

    return () => window.clearInterval(interval);
  }, [isHovered, project.previewScenes.length]);

  useEffect(() => {
    if (!isOpen) return;
    setDetailScene(hoverScene);
  }, [hoverScene, isOpen]);

  const handlePointerMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const targetX = Math.min(event.clientX + 28, window.innerWidth - 380);
    const targetY = Math.min(Math.max(event.clientY - 180, 32), window.innerHeight - 430);
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 20;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;

    setPointer({ x: targetX, y: targetY, offsetX, offsetY });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="relative flex justify-center">
        <motion.button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handlePointerMove}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.02 }}
          className="group relative flex w-full flex-col items-center px-4 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <motion.span
            animate={{ opacity: isHovered ? 1 : 0.58 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "font-display font-bold uppercase leading-[0.92] tracking-[-0.05em] text-foreground transition-colors duration-300 group-hover:text-foreground",
              titleSizeClass,
            )}
          >
            {project.title}
          </motion.span>

          <span className="mt-3 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.35em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
            {project.subtitle}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </motion.button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
              style={{ x: pointer.x, y: pointer.y }}
            >
              <motion.div
                animate={{ x: pointer.offsetX, y: pointer.offsetY }}
                transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.7 }}
                className="relative w-[22rem]"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.18),transparent_45%)] blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.8rem] border border-border/60 bg-card/88 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Live preview</p>
                      <p className="mt-1 font-body text-xs text-muted-foreground">Hover story for {project.title}</p>
                    </div>
                    <div className="rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                      3 scenes
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/20 p-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${project.title}-${activeHoverPreview.title}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="absolute inset-4 overflow-hidden rounded-[1.5rem] border border-border/60"
                      >
                        <img
                          src={project.sceneImages?.[hoverScene] ?? project.image}
                          alt={`${project.title} ${activeHoverPreview.title} preview`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-[10px] font-body uppercase tracking-[0.3em] text-foreground/85">
                          <span className="rounded-full border border-border/60 bg-background/70 px-2.5 py-1">
                            Step {hoverScene + 1}
                          </span>
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-accent">
                            {activeHoverPreview.metric}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-border/60 bg-background/78 p-4 backdrop-blur-md">
                          <p className="font-display text-xl font-semibold text-foreground">{activeHoverPreview.title}</p>
                          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                            {activeHoverPreview.detail}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                      {project.previewScenes.map((scene, sceneIndex) => (
                        <motion.div
                          key={`${project.title}-${scene.title}-stack`}
                          animate={{
                            y: hoverScene === sceneIndex ? -6 : sceneIndex * 6,
                            opacity: hoverScene === sceneIndex ? 1 : 0.5,
                            scale: hoverScene === sceneIndex ? 1 : 0.96,
                          }}
                          transition={{ duration: 0.24, ease: "easeOut" }}
                          className={cn(
                            "flex-1 rounded-2xl border border-border/60 bg-background/78 p-2 backdrop-blur-md",
                            previewCardOffsets[sceneIndex],
                          )}
                        >
                          <p className="truncate font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                            {scene.metric}
                          </p>
                          <p className="mt-1 truncate font-display text-xs text-foreground">{scene.title}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <DialogContent className="h-[88vh] max-w-[min(94vw,74rem)] overflow-hidden border-border/60 bg-background/95 p-0 shadow-2xl backdrop-blur-xl sm:rounded-[2rem]">
        <div className="grid h-full lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden border-b border-border/60 bg-card/40 p-5 md:p-8 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)/0.18),transparent_36%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.16),transparent_40%)]" />

            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Project gallery</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">Explore the flow scene by scene.</p>
                </div>
                <div className="rounded-full border border-border/60 bg-background/70 px-3 py-1 font-body text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                  Case study
                </div>
              </div>

              <div className="relative min-h-[18rem] flex-1 overflow-hidden rounded-[1.75rem] border border-border/60 bg-muted/30 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${project.title}-${activeDetailPreview.title}-detail`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={project.sceneImages?.[detailScene] ?? project.image}
                      alt={`${project.title} ${activeDetailPreview.title} gallery preview`}
                      className="h-full w-full object-contain bg-background/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/12 to-transparent" />

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-[10px] font-body uppercase tracking-[0.3em] text-foreground/85">
                      <span className="rounded-full border border-border/60 bg-background/72 px-3 py-1">
                        Scene {detailScene + 1}
                      </span>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
                        {activeDetailPreview.metric}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-border/60 bg-background/80 p-5 backdrop-blur-md">
                      <p className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                        {activeDetailPreview.title}
                      </p>
                      <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                        {activeDetailPreview.detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.previewScenes.map((scene, sceneIndex) => (
                  <button
                    key={`${project.title}-${scene.title}-button`}
                    type="button"
                    onClick={() => setDetailScene(sceneIndex)}
                    className={cn(
                      "rounded-[1.2rem] border p-3 text-left transition-all duration-300",
                      detailScene === sceneIndex
                        ? "border-accent/40 bg-accent/10 shadow-lg"
                        : "border-border/60 bg-background/60 hover:border-accent/25 hover:bg-card/80",
                    )}
                  >
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{scene.metric}</p>
                    <p className="mt-2 font-display text-base text-foreground">{scene.title}</p>
                    <p className="mt-1 font-body text-xs leading-relaxed text-muted-foreground">{scene.detail}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            <DialogHeader className="text-left">
              <p className="font-body text-[10px] uppercase tracking-[0.35em] text-accent">Featured project</p>
              <DialogTitle className="mt-3 font-display text-4xl font-bold uppercase tracking-[-0.04em] text-foreground md:text-5xl">
                {project.title}
              </DialogTitle>
              <p className="mt-3 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.28em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {project.subtitle}
              </p>
              <DialogDescription className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8">
              <p className="font-body text-xs uppercase tracking-[0.32em] text-muted-foreground">Tech stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-border/60 bg-card/70 px-3 py-1.5 font-body text-xs uppercase tracking-[0.2em] text-foreground/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-body text-xs uppercase tracking-[0.32em] text-muted-foreground">Key features</p>
              <div className="mt-4 space-y-3">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={`${project.title}-${feature}`}
                    className="rounded-[1.2rem] border border-border/60 bg-card/55 p-4"
                  >
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-accent">
                      0{featureIndex + 1}
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-foreground/90">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-border/60 bg-card/55 p-5">
              <p className="font-body text-xs uppercase tracking-[0.32em] text-muted-foreground">Demo format</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                This showcase uses a floating slideshow preview on hover and a focused modal layout on click so visitors can scan fast, then dive deeper when interested.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewHover;