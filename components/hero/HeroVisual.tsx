export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#E29A4C]/20 via-[#36C2D8]/10 to-transparent opacity-60 blur-2xl" />
      <div className="relative rounded-2xl border border-[#1F2933] bg-[#0C0F16] p-6 overflow-hidden">
        {/* Code Preview */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </div>
            <span className="ml-2 font-mono text-xs text-codex-muted">codex.ts</span>
          </div>
          
          <div className="font-mono text-xs sm:text-sm space-y-2 text-codex-ink/90">
            <div className="flex gap-4">
              <span className="text-codex-muted select-none">1</span>
              <span>
                <span className="text-codex-cyan">codex</span>{" "}
                <span className="text-codex-muted">create</span>{" "}
                <span className="text-[#E29A4C]">landing-page</span>
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-codex-muted select-none">2</span>
              <span className="text-codex-muted">// Reading repo structure...</span>
            </div>
            <div className="flex gap-4">
              <span className="text-codex-muted select-none">3</span>
              <span>
                <span className="text-[#7CFFB2]">✓</span>{" "}
                <span className="text-codex-muted">Found</span>{" "}
                <span className="text-codex-cyan">app/</span>{" "}
                <span className="text-codex-muted">and</span>{" "}
                <span className="text-codex-cyan">components/</span>
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-codex-muted select-none">4</span>
              <span>
                <span className="text-[#7CFFB2]">✓</span>{" "}
                <span className="text-codex-muted">Created</span>{" "}
                <span className="text-codex-cyan">app/shop/page.tsx</span>
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-codex-muted select-none">5</span>
              <span>
                <span className="text-[#7CFFB2]">✓</span>{" "}
                <span className="text-codex-muted">Updated</span>{" "}
                <span className="text-codex-cyan">4 files</span>{" "}
                <span className="text-codex-muted">·</span>{" "}
                <span className="text-[#E29A4C]">61 lines</span>
              </span>
            </div>
            <div className="flex gap-4 pt-2">
              <span className="text-codex-muted select-none">6</span>
              <span className="text-[#E29A4C] animate-pulse">▸ Ready to deploy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

