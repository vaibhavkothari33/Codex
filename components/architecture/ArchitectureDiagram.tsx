export default function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#374151"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
          
          <marker
            id="arrowhead-orange"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="#E29A4C"
            />
          </marker>
          <marker
            id="arrowhead-blue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="#36C2D8"
            />
          </marker>
        </defs>

        <rect width="100%" height="100%" fill="#05060A" />
        <rect width="100%" height="100%" fill="url(#grid)" />

        <g>
          <rect
            x="40"
            y="160"
            width="120"
            height="60"
            rx="8"
            fill="#E29A4C"
            stroke="#F4B15A"
            strokeWidth="1.5"
          />
          <text
            x="100"
            y="195"
            textAnchor="middle"
            fill="#05060A"
            fontSize="14"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            CLI Input
          </text>
        </g>

        <path
          d="M 160 190 L 240 190"
          stroke="#E29A4C"
          strokeWidth="2"
          strokeDasharray="6,4"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        <g>
          <rect
            x="240"
            y="120"
            width="140"
            height="100"
            rx="8"
            fill="#E29A4C"
            stroke="#F4B15A"
            strokeWidth="1.5"
          />
          <text
            x="310"
            y="150"
            textAnchor="middle"
            fill="#05060A"
            fontSize="16"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            Orchestrator
          </text>
          <text
            x="310"
            y="175"
            textAnchor="middle"
            fill="#05060A"
            fontSize="12"
            fontWeight="500"
            fontFamily="Inter, sans-serif"
          >
            State Graph
          </text>
          <circle cx="310" cy="195" r="3" fill="#05060A" />
        </g>

        <g>
          <rect
            x="420"
            y="60"
            width="140"
            height="50"
            rx="8"
            fill="#36C2D8"
            stroke="#1F2933"
            strokeWidth="1.5"
          />
          <text
            x="490"
            y="90"
            textAnchor="middle"
            fill="#F9FAFB"
            fontSize="14"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            Gemini API
          </text>
        </g>

        <g>
          <rect
            x="420"
            y="160"
            width="140"
            height="50"
            rx="8"
            fill="#36C2D8"
            stroke="#1F2933"
            strokeWidth="1.5"
          />
          <text
            x="490"
            y="185"
            textAnchor="middle"
            fill="#F9FAFB"
            fontSize="14"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            Tools
          </text>
          <text
            x="490"
            y="200"
            textAnchor="middle"
            fill="#F9FAFB"
            fontSize="11"
            fontWeight="500"
            fontFamily="Inter, sans-serif"
          >
            (MCP)
          </text>
        </g>

        <g>
          <rect
            x="420"
            y="260"
            width="140"
            height="50"
            rx="8"
            fill="#36C2D8"
            stroke="#1F2933"
            strokeWidth="1.5"
          />
          <text
            x="490"
            y="290"
            textAnchor="middle"
            fill="#F9FAFB"
            fontSize="14"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            Postgres DB
          </text>
        </g>

        <path
          d="M 380 150 L 420 85"
          stroke="#36C2D8"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
        />
        <path
          d="M 380 170 L 420 185"
          stroke="#36C2D8"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
        />
        <path
          d="M 380 190 L 420 285"
          stroke="#36C2D8"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
        />
      </svg>
    </div>
  );
}

