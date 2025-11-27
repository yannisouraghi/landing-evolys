export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="20" height="60" fill="#00B4D8"/>
      <rect x="10" y="70" width="60" height="20" fill="#00B4D8"/>
      <rect x="230" y="10" width="60" height="20" fill="#00B4D8"/>
      <rect x="270" y="10" width="20" height="80" fill="#00B4D8"/>
      <text x="60" y="75" fontFamily="Inter, sans-serif" fontSize="58" fontWeight="600" fill="currentColor">
        Evolys
      </text>
    </svg>
  );
}
