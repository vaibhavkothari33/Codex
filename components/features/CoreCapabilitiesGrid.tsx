import {
  IconBrain,
  IconDatabase,
  IconTools,
} from "@tabler/icons-react";
import Hyperspeed from "@/components/Hyperspeed";
import PrismaticBurst from "@/components/PrismaticBurst";
import Galaxy from "@/components/Galaxy";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function CoreCapabilitiesGrid() {
  const capabilities = [
    {
      titlePrefix: "Built for",
      title: "reasoning",
      description: "Codex keeps a mental model of your entire codebase, so questions like 'how does auth work?' have concrete answers.",
      icon: <IconBrain className="h-5 w-5 text-[#E29A4C]" />,
      color: "#E29A4C",
    },
    {
      titlePrefix: "Built for",
      title: "persistence",
      description: "Codex remembers decisions, branches, and tradeoffs across sessions so you don't have to repeat yourself.",
      icon: <IconDatabase className="h-5 w-5 text-codex-cyan" />,
      color: "#36C2D8",
    },
    {
      titlePrefix: "Built for",
      title: "tooling",
      description: "Runs tests, linters, and scripts through your existing CLI. No black-box CI required to see if something passes.",
      icon: <IconTools className="h-5 w-5 text-codex-cyan" />,
      color: "#36C2D8",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
      {capabilities.map((capability, i) => (
        <div key={i} className="flex-1 w-full">
          <FollowerPointerCard
            title={
              <div className="flex items-center space-x-2">
                {capability.icon}
                <p className="text-codex-ink">{capability.titlePrefix} {capability.title}</p>
              </div>
            }
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1F2933] bg-codex-bg transition duration-200 hover:shadow-xl hover:border-[#E29A4C]/40">
              <div className="relative w-full h-[350px] overflow-hidden rounded-tl-lg rounded-tr-lg bg-codex-bg">
                <div className="absolute inset-0">
                  {i === 1 ? (
                    <PrismaticBurst
                      intensity={2}
                      speed={0.5}
                      animationType="hover"
                      colors={["#36C2D8", "#0e5ea5", "#03b3c3", "#324555"]}
                      distort={15}
                      rayCount={8}
                      mixBlendMode="lighten"
                    />
                  ) : i === 2 ? (
                    <Galaxy
                      starSpeed={0.5}
                      density={1.2}
                      hueShift={200}
                      speed={1.0}
                      mouseInteraction={true}
                      glowIntensity={0.4}
                      saturation={0.3}
                      mouseRepulsion={true}
                      twinkleIntensity={0.5}
                      rotationSpeed={0.1}
                      repulsionStrength={2}
                      transparent={true}
                    />
                  ) : (
                    <Hyperspeed 
                      effectOptions={{
                        colors: {
                          roadColor: 0x080808,
                          islandColor: 0x0a0a0a,
                          background: 0x000000,
                          shoulderLines: 0xffffff,
                          brokenLines: 0xffffff,
                          leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                          rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                          sticks: 0xE29A4C
                        }
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h2 className="my-4 text-xl font-semibold text-codex-ink">
                  <span className="text-codex-ink/95">{capability.titlePrefix}</span>{" "}
                  <span className="text-[#E29A4C]">{capability.title}</span>
                </h2>
                <p className="my-4 text-base font-normal text-codex-muted leading-relaxed">
                  {capability.description}
                </p>
                {/* {capability.meta && (
                  <div className="mt-6 pt-3 border-t border-[#1F2933]">
                    <div className="font-mono text-xs text-[#E29A4C]">
                      {capability.meta}
                    </div>
                  </div> */}
                {/* )} */}
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      ))}
    </div>
  );
}

