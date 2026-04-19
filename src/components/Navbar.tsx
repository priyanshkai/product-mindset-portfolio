import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl tracking-tight">
          Portfolio<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) =>
            onHome ? (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={`/${l.href}`} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            )
          )}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
