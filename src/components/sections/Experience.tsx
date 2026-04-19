import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border bg-secondary/40">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Learning & background.</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {experience.map((e) => (
                <li key={e.title} className="py-6 grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-3 text-sm text-muted-foreground font-mono">{e.year}</div>
                  <div className="col-span-9">
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                    <p className="text-sm mt-2 text-foreground/80">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
