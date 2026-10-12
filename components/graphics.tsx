/** Shield mark used in the logo. Drawn in code so it stays sharp at any size. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M24 3 42 10v13c0 11-7.500 19-18 22C13.500 42 6 34 6 23V10z"
        fill="#031007"
        stroke="var(--green)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M17 15v18M31 15v18M17 24h14"
        fill="none"
        stroke="var(--green)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
