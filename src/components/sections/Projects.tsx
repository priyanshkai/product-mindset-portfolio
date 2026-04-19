import { projects } from "@/data/portfolio";
import { useReveal, revealClass, revealDelay } from "@/hooks/use-reveal";

const palette = [
  {
    bg: "bg-amber-50 dark:bg-amber-500/10",
    ring: "ring-amber-500/20",
    tagBg: "bg-amber-500/15",
    tagText: "text-amber-700 dark:text-amber-300",
    hover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
  },
  {
    bg: "bg-blue-50 dark:bg-blue-500/10",
    ring: "ring-blue-500/20",
    tagBg: "bg-blue-500/15",
    tagText: "text-blue-700 dark:text-blue-300",
    hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    tagBg: "bg-emerald-500/15",
    tagText: "text-emerald-700 dark:text-emerald-300",
    hover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  {
    bg: "bg-rose-50 dark:bg-rose-500/10",
    ring: "ring-rose-500/20",
    tagBg: "bg-rose-500/15",
    tagText: "text-rose-700 dark:text-rose-300",
    hover: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
  },
];

const Header = () => {
  const r = useReveal<HTMLDivElement>();
  return (
    <div ref={r.ref} className={`mb-12 ${revealClass(r.visible, "up")}`}>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
      <h2 className="font-display text-4xl md:text-5xl mt-3">Smaller experiments.</h2>
    </div>
  );
};

const ProjectCard = ({ p, i }: { p: typeof projects[number]; i: number }) => {
  const r = useReveal<HTMLDivElement>();
  const c = palette[i % palette.length];
  const dir = i % 2 === 0 ? "left" : "right";
  return (
    <div
      ref={r.ref}
      style={revealDelay((i % 2) * 120)}
      className={`group p-6 rounded-xl ${c.bg} ring-1 ${c.ring} hover:shadow-card hover:-translate-y-0.5 ${revealClass(r.visible, dir)}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full ${c.tagBg} ${c.tagText} font-medium`}>
          {p.tag}
        </span>
      </div>
      <h3 className={`font-medium text-lg mb-2 transition-colors ${c.hover}`}>{p.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border overflow-hidden">
      <div className="container-narrow">
        <Header />
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
