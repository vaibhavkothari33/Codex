"use client";

import { useEffect, useState } from "react";
import { IconBrandGithub, IconStar } from "@tabler/icons-react";

export default function Navbar() {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch star count from GitHub API
    const fetchStarCount = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/vaibhavkothari33/Codex-Agent");
        const data = await response.json();
        if (data.stargazers_count) {
          setStarCount(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch star count:", error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1F2933] bg-[#05060A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Codex text */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-codex-ink">
              Codex
            </span>
          </div>

          {/* Right side - GitHub and Star buttons */}
          <div className="flex items-center gap-3">
            {/* GitHub button */}
            <a
              href="https://github.com/vaibhavkothari33/Codex-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#1F2933] bg-[#111520] px-3 py-1.5 hover:border-[#E29A4C]/40 transition-colors group"
              aria-label="View on GitHub"
            >
              <IconBrandGithub className="h-4 w-4 text-codex-muted group-hover:text-codex-ink transition-colors" />
              <span className="text-sm text-codex-muted group-hover:text-codex-ink transition-colors">
                GitHub
              </span>
            </a>

            {/* Star button with count */}
            <a
              href="https://github.com/vaibhavkothari33/Codex-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#1F2933] bg-[#111520] px-3 py-1.5 hover:border-[#E29A4C]/40 transition-colors group"
              aria-label="Star on GitHub"
            >
              <IconStar className="h-4 w-4 text-codex-muted group-hover:text-[#E29A4C] transition-colors fill-codex-muted group-hover:fill-[#E29A4C]" />
              {starCount !== null && (
                <span className="text-sm text-codex-muted group-hover:text-codex-ink transition-colors font-mono">
                  {starCount.toLocaleString()}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

