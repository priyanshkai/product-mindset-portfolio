import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/priyansh-portrait.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative">
      <div className="container-narrow w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
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
              {profile.tagline}
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
          <div className="fade-in-up justify-self-center md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl" />
              <img
                src={portrait}
                alt={`${profile.name} — Aspiring Product Manager portrait`}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover border border-border shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
