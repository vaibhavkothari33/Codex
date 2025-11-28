"use client";

import BackgroundGlow from "@/components/common/BackgroundGlow";
import HeroSection from "@/components/hero/HeroSection";
import CoreCapabilitiesGrid from "@/components/features/CoreCapabilitiesGrid";
import ArchitectureSteps from "@/components/architecture/ArchitectureSteps";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";
import PricingCard from "@/components/pricing/PricingCard";
import LogoLoop from "@/components/ui/LogoLoop";
import { CurvedLoopWrapper } from "@/components/ui/CurvedLoopWrapper";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiFramer, SiJavascript, SiVite } from 'react-icons/si';
import { motion } from "motion/react";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiFramer />, title: "Framer", href: "https://framer.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  
  
  
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-codex-bg text-codex-ink px-4 pt-16">
      <BackgroundGlow />
      <main className="relative z-10 mx-auto w-full max-w-6xl py-20 md:py-28 flex flex-col items-center gap-20 md:gap-24">
        <HeroSection />

        <motion.section 
          id="features" 
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="font-sans text-5xl md:text-5xl font-semibold tracking-tight">
                  <span className="text-codex-ink/95">Core</span>{" "}
                  <span className="text-[#E29A4C]">Capabilities</span>
                </h2>
                <p className="text-sm text-codex-muted max-w-2xl mx-auto">
                  Everything Codex does is built to feel like a natural extension of your editor and shell.
                </p>
              </div>
              <CoreCapabilitiesGrid />
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="technologies" 
          className="w-full py-16 md:py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <p className="font-sans text-xs text-codex-muted tracking-wider uppercase">
                  Used By
                </p>
                <p className="text-sm text-codex-muted max-w-2xl mx-auto font-normal">
                  Trusted by employees of leading companies and teams worldwide.
                </p>
              </div>
              <div className="relative flex items-center justify-center bg-transparent" style={{ height: '120px' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={20}
                  direction="left"
                  logoHeight={48}
                  gap={40}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#0b0b0b"
                  ariaLabel="Companies using Codex"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="architecture" 
          className="w-full  py-16 md:py-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="space-y-10 md:space-y-12">
              <div className="text-center space-y-4">
                <p className="font-sans text-xs text-[#E29A4C] tracking-wider uppercase">
                  System Architecture
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-codex-ink">
                  Engineered for
                  {/* <br /> */}
                  <span className="text-[#E29A4C]"> Reliability.</span>
                </h2>
              </div>
              <div className="space-y-10">
                <p className="text-sm md:text-base text-codex-muted leading-relaxed max-w-2xl mx-auto text-center">
                  Codex processes every request through a deterministic pipeline that analyzes context,
                  hydrates state from your repository, and executes tools in a controlled sequence.
                  Each stage is isolated and testable, ensuring consistent behavior across environments.
                </p>
                <div className="grid gap-10 md:grid-cols-2 md:gap-8 items-start">
                  <ArchitectureSteps />
                  <div className="flex items-center justify-center md:justify-start">
                    <ArchitectureDiagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="pricing"
          className="w-full max-w-6xl space-y-10 pt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Simple pricing for serious builders.
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-codex-muted">
              All plans are free while Codex is in preview. Choose the plan that fits your workflow.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <PricingCard
              label="Starter"
              price="Free"
              description="Perfect for individuals exploring Codex on personal projects."
              highlights={[
                "Up to 3 private workspaces",
                "Unlimited public repos",
                "CLI + editor integration",
                "Community support"
              ]}
              badge="Popular"
              featured={false}
            />
            <PricingCard
              label="Developer"
              price="Free"
              description="For developers who want Codex involved in every workflow."
              highlights={[
                "Up to 10 workspaces",
                "Shared context across repos",
                "Priority latency",
                "Advanced tooling access",
                "Email support"
              ]}
              badge="Recommended"
              featured={true}
            />
            <PricingCard
              label="Team"
              price="Free"
              description="For teams who want Codex involved in every PR and deployment."
              highlights={[
                "Unlimited workspaces",
                "Team collaboration features",
                "Shared knowledge base",
                "Custom integrations",
                "Priority support"
              ]}
              featured={false}
            />
          </div>
        </motion.section>

        <section className="w-full pt-8 border-t border-white/5 mt-4 mb-10  pb-20 overflow-hidden">
          <div className="py-12 w-full mb-20 ">
            <CurvedLoopWrapper 
              marqueeText="OPERATES YOUR CODEBASE, EVOLVING AT THOUGHT SPEED ✦ ONE WINDOW, ONE BUFFER, ONE BRAIN ✦"
              speed={2}
              curveAmount={300}
              direction="left"
              interactive={true}
            />
          </div>
          <p className="text-[0.7rem] sm:text-xs text-codex-muted text-center max-w-md mx-auto mt-8">
            One window, one buffer, one brain. No dashboards, no tabs — just you, your repo,
            and Codex quietly doing the heavy lifting.
          </p>
        </section>
      </main>
    </div>
  );
}
