import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/portfolio";

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section className="grid md:grid-cols-12 gap-6 py-10 border-t border-border">
    <div className="md:col-span-3">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
    <div className="md:col-span-9 text-foreground/90 leading-relaxed">{children}</div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container-narrow">
          <Link to="/#case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>

          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{cs.context}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight mb-6">{cs.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{cs.summary}</p>

          {APP_LINKS[cs.slug!] && (
            <div className="mt-8">
              <a
                href={APP_LINKS[cs.slug!]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Open Application
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border text-sm">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Role</p>
              <p className="mt-1 font-medium">{cs.role}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Duration</p>
              <p className="mt-1 font-medium">{cs.duration}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Context</p>
              <p className="mt-1 font-medium">{cs.context}</p>
            </div>
          </div>

          <Block label="Problem"><p>{cs.problem}</p></Block>

          <Block label="Approach">
            <ul className="space-y-2">
              {cs.approach.map((a, i) => (
                <li key={i} className="flex gap-3"><span className="text-muted-foreground font-mono text-sm">0{i + 1}</span>{a}</li>
              ))}
            </ul>
          </Block>

          <Block label="Insights">
            <ul className="space-y-2">
              {cs.insights.map((a, i) => (
                <li key={i} className="flex gap-3"><span className="text-accent">→</span>{a}</li>
              ))}
            </ul>
          </Block>

          <Block label="Solution"><p>{cs.solution}</p></Block>

          <Block label="Trade-offs">
            <ul className="space-y-2">
              {cs.tradeoffs.map((a, i) => (
                <li key={i} className="flex gap-3"><span className="text-muted-foreground">·</span>{a}</li>
              ))}
            </ul>
          </Block>

          <Block label="Impact">
            <div className="grid sm:grid-cols-3 gap-4">
              {cs.metrics.map((m) => (
                <div key={m.label} className="p-5 rounded-xl bg-secondary border border-border">
                  <p className="font-display text-3xl">{m.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </Block>

          <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <p className="text-muted-foreground">Want to see more?</p>
            <Link to="/#case-studies" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm">
              View all case studies
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default CaseStudy;
