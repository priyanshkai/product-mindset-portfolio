import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative">
      <div className="container-narrow w-full">
        <div className="fade-in-up max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to PM opportunities
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
            {profile.name},<br />
            <span className="italic text-muted-foreground">aspiring product manager.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {profile.tagline} I focus on user research, analytics, and crisp problem framing — turning ambiguity into shippable decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View case studies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
