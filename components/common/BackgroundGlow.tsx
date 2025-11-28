export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-slate-700/40 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-72 w-72 rounded-full bg-slate-800/50 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[-8rem] h-64 w-64 rounded-full bg-slate-900/70 blur-3xl" />
    </div>
  );
}

