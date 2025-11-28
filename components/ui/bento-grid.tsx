import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[minmax(280px,auto)] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  meta,
  titlePrefix,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  meta?: string;
  titlePrefix?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col rounded-xl border bg-codex-bg border-[#1F2933] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E29A4C] hover:shadow-lg overflow-hidden",
        className,
      )}
    >
      {header && (
        <div className="mb-4 flex-shrink-0">
          {header}
        </div>
      )}
      <div className="flex flex-col flex-1 min-h-0 transition duration-200 group-hover/bento:translate-x-1">
        {icon && (
          <div className="mb-3 flex-shrink-0">{icon}</div>
        )}
        <div className="mb-3 flex-shrink-0">
          {titlePrefix ? (
            <h3 className="font-semibold text-lg leading-tight">
              <span className="text-codex-ink/95">{titlePrefix}</span>{" "}
              <span className="text-codex-ink/70">&gt;</span>{" "}
              <span className="text-[#E29A4C]">{title}</span>
            </h3>
          ) : (
            <h3 className="font-semibold text-lg text-codex-ink leading-tight">{title}</h3>
          )}
        </div>
        <div className="text-sm font-normal text-codex-muted leading-relaxed mb-3 flex-1 min-h-0 overflow-hidden">
          {description}
        </div>
        {meta && (
          <div className="mt-auto pt-3 border-t border-[#1F2933] flex-shrink-0">
            <div className="font-mono text-xs text-[#E29A4C]">
              {meta}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

