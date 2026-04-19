import { profile, skills, tools } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">A quick intro.</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-lg leading-relaxed text-foreground/90">{profile.bio}</p>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Skills</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div key={s.label} className="border border-border rounded-xl p-4 bg-card">
                    <p className="font-medium">{s.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
