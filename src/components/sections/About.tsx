import { profile, skills, tools } from "@/data/portfolio";
import { Lightbulb, BarChart3, Users, TrendingUp, type LucideIcon } from "lucide-react";
import { useReveal, revealClass, revealDelay } from "@/hooks/use-reveal";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  BarChart3,
  Users,
  TrendingUp,
};

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; ring: string }> = {
  amber: {
    bg: "bg-amber-50 dark:bg-amber-500/10",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/20",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-500/10",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-600 dark:text-blue-400",
    ring: "ring-blue-500/20",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconBg: "bg-emerald-500/15",
    iconText: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-500/20",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-500/10",
    iconBg: "bg-rose-500/15",
    iconText: "text-rose-600 dark:text-rose-400",
    ring: "ring-rose-500/20",
  },
};

const About = () => {
  const heading = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding border-t border-border overflow-hidden">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12">
          <div ref={heading.ref} className={`md:col-span-4 ${revealClass(heading.visible, "left")}`}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">A quick intro.</h2>
          </div>
          <div ref={body.ref} className={`md:col-span-8 space-y-10 ${revealClass(body.visible, "right")}`}>
            <p className="text-lg leading-relaxed text-foreground/90">{profile.bio}</p>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Skills</p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((s, i) => {
                  const Icon = iconMap[s.icon];
                  const c = colorMap[s.color];
                  return (
                    <div
                      key={s.label}
                      style={revealDelay(100 + i * 100)}
                      className={`group aspect-square rounded-2xl p-5 ${c.bg} ring-1 ${c.ring} flex flex-col justify-between hover:-translate-y-1 ${revealClass(body.visible, "up")}`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${c.iconBg} ${c.iconText} flex items-center justify-center`}>
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{s.label}</p>
                        <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
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
