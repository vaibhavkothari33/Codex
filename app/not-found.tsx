import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-codex-bg px-4">
      <div className="relative w-full max-w-md text-center">
        <div className="pointer-events-none absolute -inset-10 rounded-3xl bg-gradient-to-b from-indigo-600/40 via-transparent to-purple-700/30 blur-3xl" />
        <div className="relative rounded-3xl border border-white/10 bg-black/60 px-6 py-8 shadow-soft backdrop-blur-xl">
          <p className="font-mono text-xs text-codex-muted mb-2">
            codex: route not found
          </p>
          <h1 className="text-4xl font-semibold tracking-tight mb-2">404</h1>
          <p className="text-sm text-codex-muted mb-6">
            This path doesn&apos;t exist in the workspace yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-codex-accent px-5 py-2.5 text-xs font-medium text-white shadow-soft hover:shadow-lg hover:brightness-110 transition"
          >
            Back to Codex home
            <span className="text-[0.7rem]">↩</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


