import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/portfolio";
import { useReveal, revealClass, revealDelay } from "@/hooks/use-reveal";

const APP_LINKS: Record<string, string> = {
  "ai-carbon-intelligence": "https://claude.ai/public/artifacts/43d108f1-4f47-450d-ae0b-2d2ea9104808",
};

const Header = () => {
  const r = useReveal<HTMLDivElement>();
  return (
    <div ref={r.ref} className={`flex items-end justify-between mb-12 ${revealClass(r.visible, "up")}`}>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Studies</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Selected work.</h2>
      </div>
      <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
        Deep dives showing how I frame problems, choose between options, and measure impact.
      </p>
    </div>
  );
};

const CaseCard = ({ cs, i }: { cs: typeof caseStudies[number]; i: number }) => {
  const r = useReveal<HTMLDivElement>();
  const dir = i % 2 === 0 ? "left" : "right";
  const appLink = APP_LINKS[cs.slug];
  return (
    <div
      ref={r.ref}
      style={revealDelay(i * 120)}
      className={`group bg-card border border-border rounded-2xl p-6 md:p-8 transition-all hover:shadow-card hover:-translate-y-0.5 ${revealClass(r.visible, dir)}`}
    >
      <div className="grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-1 text-sm text-muted-foreground font-mono">0{i + 1}</div>
        <Link to={`/case/${cs.slug}`} className="md:col-span-8 block">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{cs.context}</p>
          <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2 group-hover:text-accent transition-colors">
            {cs.title}
          </h3>
          <p className="text-muted-foreground">{cs.summary}</p>
        </Link>
        <div className="md:col-span-3 flex flex-col gap-2 md:items-end">
          <Link
            to={`/case/${cs.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            Read case
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          {appLink && (
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Open Application
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding border-t border-border bg-secondary/40 overflow-hidden">
      <div className="container-narrow">
        <Header />
        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <CaseCard key={cs.slug} cs={cs} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
