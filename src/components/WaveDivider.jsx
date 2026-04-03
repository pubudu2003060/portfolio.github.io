function WaveDivider({ flip = false, fromColor = "#0f172a", toColor = "#1e293b" }) {
  return (
    <div
      className="wave-divider"
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`waveGrad-${flip ? 'flip' : 'normal'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
          fill={`url(#waveGrad-${flip ? 'flip' : 'normal'})`}
          opacity="0.6"
        />
        <path
          d="M0,50 C150,70 350,10 550,50 C750,90 950,20 1200,50 L1200,80 L0,80 Z"
          fill={`url(#waveGrad-${flip ? 'flip' : 'normal'})`}
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
