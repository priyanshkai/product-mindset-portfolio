import { experience } from "@/data/portfolio";
import { useReveal, revealClass, revealDelay } from "@/hooks/use-reveal";

const Experience = () => {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding border-t border-border bg-secondary/40 overflow-hidden">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12">
          <div ref={left.ref} className={`md:col-span-4 ${revealClass(left.visible, "left")}`}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Learning & background.</h2>
          </div>
          <div ref={right.ref} className={`md:col-span-8 ${revealClass(right.visible, "right")}`}>
            <ul className="divide-y divide-border border-y border-border">
              {experience.map((e, i) => (
                <li
                  key={e.title}
                  style={revealDelay(150 + i * 120)}
                  className={`py-6 grid grid-cols-12 gap-4 items-start ${revealClass(right.visible, "up")}`}
                >
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
