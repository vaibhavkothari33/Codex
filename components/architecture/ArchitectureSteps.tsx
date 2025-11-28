export default function ArchitectureSteps() {
  const steps = [
    {
      number: "01",
      title: "Input Analysis",
      description: "Parse and validate user commands, extract intent and context from natural language."
    },
    {
      number: "02",
      title: "State Hydration",
      description: "Load repository state, read relevant files, and build a working model of the codebase."
    },
    {
      number: "03",
      title: "Tool Execution",
      description: "Execute planned changes through isolated tool runners with rollback capabilities."
    }
  ];

  return (
    <div className="flex flex-col gap-5">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start gap-4">
          <div className="flex-shrink-0 rounded-full bg-[#111520] px-3 py-1.5 border border-[#1F2933]">
            <span className="font-mono text-xs text-[#E29A4C] tracking-wider uppercase">
              {step.number}
            </span>
          </div>
          <div className="flex-1 pt-0.5">
            <h3 className="text-base font-semibold text-codex-ink mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-codex-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

