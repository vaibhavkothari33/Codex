import HeroTitle from "./HeroTitle";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="w-full grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 items-center">
      <header className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-codex-border bg-codex-surface px-4 py-1.5 text-[0.7rem] text-codex-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-codex-accent shadow-[0_0_12px_rgba(226,154,76,0.9)]" />
          <span className="tracking-[0.18em] uppercase text-[0.65rem] text-codex-muted">
            Shipping with Codex…
          </span>
        </div>
        <HeroTitle />
        <p className="max-w-xl text-sm sm:text-base text-codex-muted leading-relaxed">
          Unleash Codex directly from your terminal. Search massive
          codebases, refactor safely, and turn hours-long flows into a single
          command — all without leaving your shell.
        </p>
        <div className="mt-6 flex flex-col items-center md:items-start gap-4 w-full max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-codex-accent text-codex-bg px-5 py-2.5 text-xs sm:text-sm font-medium shadow-soft transition hover:shadow-lg hover:bg-codex-accentHover">
              Get Codex
              <span className="hidden sm:inline text-[0.7rem] text-codex-bg/80">
                free preview
              </span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-codex-border bg-codex-surfaceSoft px-4 py-2.5 text-xs sm:text-sm text-codex-muted transition hover:border-codex-accent hover:text-codex-ink">
              Or watch the demo
              <span className="text-[0.7rem]">▶</span>
            </button>
          </div>
          <div className="w-full max-w-3xl rounded-full border border-codex-border bg-codex-surfaceSoft px-4 py-2.5 flex items-center gap-3 font-mono text-[0.7rem] text-codex-muted">
            <span className="hidden sm:inline text-codex-cyan">irm</span>
            <span className="truncate">
              https://codex.sh/install.ps1{" "}
              <span className="text-codex-muted">|</span>{" "}
              <span className="text-codex-cyan">iex</span>
            </span>
            <button className="ml-auto rounded-full border border-codex-border bg-codex-surface px-2 py-1 text-[0.65rem] text-codex-muted hover:bg-codex-surfaceSoft">
              Copy
            </button>
          </div>
        </div>
      </header>

      <div className="w-full max-w-5xl md:max-w-full">
        <HeroVisual />
      </div>
    </section>
  );
}

