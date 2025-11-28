"use client";

import { useEffect, useState } from "react";

export default function HeroTitle() {
  const phrases = [
    "shipping code",
    "debugging code",
    "fixing the issue",
    "reviewing PRs"
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, index]);

  return (
    <h1 className="text-balance font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem]">
      <span className="text-codex-ink/95">Built for</span>{" "}
      <span className="text-codex-ink/90">&gt;</span>{" "}
      <span className="relative inline-flex items-center min-w-[14ch] justify-start align-middle">
        <span className="font-mono text-codex-accent">
          {text || "\u00A0"}
        </span>
        <span className="ml-1 h-6 w-[2px] sm:h-7 bg-codex-ink/70 animate-pulse" />
      </span>
    </h1>
  );
}

