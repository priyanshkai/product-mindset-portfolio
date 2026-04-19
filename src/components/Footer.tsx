import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
      <p className="font-mono text-xs">Designed for clarity, not flash.</p>
    </div>
  </footer>
);

export default Footer;
