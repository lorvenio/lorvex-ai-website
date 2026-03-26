export default function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-glow" />
      <svg
        className="neural-glow absolute right-0 top-0 h-full w-full opacity-70"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2F80ED" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#56A3FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g stroke="url(#glow)" strokeWidth="1.2" fill="none">
          <path d="M80 120 C220 60, 340 200, 520 140" />
          <path d="M120 360 C280 280, 420 420, 600 360" />
          <path d="M480 100 C640 40, 820 180, 1020 120" />
          <path d="M520 360 C700 300, 860 460, 1100 420" />
          <path d="M260 220 C420 180, 600 260, 760 220" />
        </g>
        <g fill="#56A3FF">
          <circle cx="120" cy="120" r="4" />
          <circle cx="520" cy="140" r="4" />
          <circle cx="600" cy="360" r="4" />
          <circle cx="1020" cy="120" r="4" />
          <circle cx="760" cy="220" r="4" />
          <circle cx="1100" cy="420" r="4" />
        </g>
      </svg>
      <div className="absolute inset-0 gradient-animate opacity-30" />
    </div>
  );
}
