/** Shield mark used in the logo. Drawn in code so it stays sharp at any size. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id="logo-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path
        d="M24 3 42 10v13c0 11-7.500 19-18 22C13.500 42 6 34 6 23V10z"
        fill="url(#logo-fill)"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 15v18M31 15v18M17 24h14"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
