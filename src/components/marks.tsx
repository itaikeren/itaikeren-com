/**
 * Project marks, inlined from each project's own favicon.svg so they stay
 * crisp and theme-aware. Kept faithful to the source art:
 *  - mdv: the lowercase pixel "m" (Pixelify Sans glyph), in terminal green.
 *  - locutory: the near-black tile with a single light slot — the one room
 *    where the monks could speak.
 */

export function MdvMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M3.0 25.3 L3.0 6.7 L14.39 6.7 L14.39 10.37 L17.61 10.37 L17.61 6.7 L25.38 6.7 L25.38 10.37 L29.0 10.37 L29.0 25.3 L24.98 25.3 L24.98 10.73 L18.01 10.73 L18.01 25.3 L13.99 25.3 L13.99 10.73 L7.07 10.73 L7.07 25.3 Z" />
    </svg>
  );
}

export function LocutoryMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" fill="#0e0e0e" />
      <rect x="12" y="9" width="8" height="14" fill="#e2e2e2" />
    </svg>
  );
}
