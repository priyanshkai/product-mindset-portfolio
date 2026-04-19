import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks — I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Let's talk product.</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              I'm actively looking for PM roles and internships. Always happy to chat about interesting product problems.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Name" className="px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 transition" />
              <input required type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 transition" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 transition" />
            <textarea required name="message" placeholder="Tell me about the role or project…" rows={6} className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none" />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
