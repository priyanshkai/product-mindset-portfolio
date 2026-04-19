import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Smaller experiments.</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-card transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
