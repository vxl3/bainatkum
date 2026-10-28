export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bk-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="24" r="14" fill="url(#bk-grad)" fillOpacity="0.95" />
      <circle cx="30" cy="24" r="14" fill="url(#bk-grad)" fillOpacity="0.55" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontSize="15"
        fontWeight="800"
        fill="#0B0A14"
      >
        ؟
      </text>
    </svg>
  );
}
