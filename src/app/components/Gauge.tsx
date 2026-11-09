type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

export default function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const ticks = 40;
  const activeCount = Math.round((value / 100) * ticks);
  const centerX = 100;
  const centerY = 100;
  const radius = 80;

  return (
    <div className="mx-auto w-full max-w-[260px]">
      <svg viewBox="0 0 200 120" className="block w-full">
        {Array.from({ length: ticks }).map((_, index) => {
          const angle = Math.PI + (index / (ticks - 1)) * Math.PI;
          const innerRadius = radius - 10;
          const outerX = centerX + Math.cos(angle) * radius;
          const outerY = centerY + Math.sin(angle) * radius;
          const innerX = centerX + Math.cos(angle) * innerRadius;
          const innerY = centerY + Math.sin(angle) * innerRadius;

          return (
            <line
              key={index}
              x1={innerX}
              y1={innerY}
              x2={outerX}
              y2={outerY}
              stroke={index < activeCount ? color : "#d4d4d8"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fontSize="22"
          fontWeight="600"
          fill="#111827"
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="mt-1 flex justify-between text-[11px] text-neutral-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
