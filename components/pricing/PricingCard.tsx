export default function PricingCard({
  label,
  price,
  description,
  highlights,
  badge,
  featured = false
}: {
  label: string;
  price: string;
  description: string;
  highlights: string[];
  badge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border ${
        featured
          ? "border-[#E29A4C]/60 bg-[#111520] shadow-lg shadow-[#E29A4C]/10"
          : "border-[#1F2933] bg-[#111520]"
      } p-6 sm:p-8 min-h-[320px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E29A4C]/40`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`rounded-full px-3 py-1 text-[0.65rem] font-medium ${
              featured
                ? "bg-[#E29A4C] text-codex-bg"
                : "bg-codex-accentSoft/40 text-codex-ink"
            }`}
          >
            {badge}
          </span>
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-codex-ink mb-2">
          {label}
        </h3>
        <p className="text-xs sm:text-sm text-codex-muted mb-4 leading-relaxed">
          {description}
        </p>
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl font-bold text-[#E29A4C]">
            {price}
          </span>
          {price === "Free" && (
            <span className="text-sm text-codex-muted ml-2">forever</span>
          )}
        </div>
        <ul className="space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#E29A4C] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-codex-muted leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
          featured
            ? "bg-[#E29A4C] text-codex-bg hover:bg-[#F4B15A] hover:shadow-lg hover:shadow-[#E29A4C]/20"
            : "bg-[#1F2933] text-codex-ink border border-[#1F2933] hover:border-[#E29A4C]/40 hover:bg-[#111520]"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

