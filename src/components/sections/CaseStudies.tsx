import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/portfolio";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding border-t border-border bg-secondary/40">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Studies</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Selected work.</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            Deep dives showing how I frame problems, choose between options, and measure impact.
          </p>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              to={`/case/${cs.slug}`}
              className="group block bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-card transition-all hover:-translate-y-0.5"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                  0{i + 1}
                </div>
                <div className="md:col-span-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{cs.context}</p>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2 group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-muted-foreground">{cs.summary}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    Read case
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
