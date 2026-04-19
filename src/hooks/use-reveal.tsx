import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) => {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
};

export const revealClass = (
  visible: boolean,
  direction: Direction = "up",
  delay = 0
) => {
  const base = "transition-all duration-700 ease-out will-change-transform";
  const delayStyle = delay ? `[transition-delay:${delay}ms]` : "";
  if (visible) return `${base} ${delayStyle} opacity-100 translate-x-0 translate-y-0`;
  switch (direction) {
    case "up":
      return `${base} ${delayStyle} opacity-0 translate-y-10`;
    case "down":
      return `${base} ${delayStyle} opacity-0 -translate-y-10`;
    case "left":
      return `${base} ${delayStyle} opacity-0 -translate-x-10`;
    case "right":
      return `${base} ${delayStyle} opacity-0 translate-x-10`;
    case "fade":
    default:
      return `${base} ${delayStyle} opacity-0`;
  }
};
