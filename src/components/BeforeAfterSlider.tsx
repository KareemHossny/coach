import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initial?: number; // 0-100
  aspect?: string; // tailwind aspect-* class
};

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  initial = 50,
  aspect = "aspect-[3/4]",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(initial);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspect} overflow-hidden select-none touch-none bg-[var(--surface)] cursor-ew-resize`}
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
    >
      {/* After image (base) */}
      <img
        src={after}
        alt={afterAlt}
        draggable={false}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute top-3 right-3 z-20 text-[10px] tracking-widest font-medium px-2 py-1 rounded bg-primary text-primary-foreground">
        {afterLabel}
      </span>

      {/* Before image clipped */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 text-[10px] tracking-widest font-medium px-2 py-1 rounded bg-background/70 backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${pos}%` }}
      />
      <button
        type="button"
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={(e) => {
          e.stopPropagation();
          draggingRef.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
        }}
        className="absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center ring-2 ring-white/60 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
        style={{ left: `${pos}%` }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 6 3 12 9 18" />
          <polyline points="15 6 21 12 15 18" />
        </svg>
      </button>
    </div>
  );
}
