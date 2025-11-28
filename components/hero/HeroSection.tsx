"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const phrases = [
    "developers",
    "hackers",
    "builders",
    "engineers"
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
          setTimeout(() => setIsDeleting(true), 1200);
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
  }, [text, isDeleting, index, phrases]);

  return (
    <section className="w-full flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-10 md:py-12">
      <header className="flex flex-col items-center gap-8 px-4 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] text-center">
          <span className="text-codex-ink font-serif font-extrabold">Built for</span>{" "}
          <span className="text-[#E29A4C] font-serif font-extrabold">&gt;</span>{" "}
          <br />
          <span className="relative inline-flex items-center justify-center w-[14ch]">
            <span className="text-[#E29A4C] font-serif font-extrabold">
              {text || "\u00A0"}
            </span>
            <span className="ml-1 h-8 w-[2px] md:h-10 bg-[#E29A4C] animate-pulse" />
          </span>
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-codex-muted leading-relaxed font-sans font-normal">
          Unleash Codex's raw power directly in your editor and terminal. Search million-line codebases instantly. Turn hours-long workflows into a single command. Your tools. Your workflow. Your codebase, evolving at thought speed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white text-codex-bg px-7 py-3.5 text-sm font-medium transition hover:bg-gray-100 shadow-xl hover:shadow-2xl">
            Get Codex
            <span className="text-xs">▼</span>
          </button>
          <p className="text-sm text-codex-muted">
            Or{" "}
            <a href="#" className="underline hover:text-codex-ink transition-colors">
              read the documentation
            </a>
          </p>
        </div>
      </header>
    </section>
  );
}

