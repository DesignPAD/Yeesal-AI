"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.7, 0, 0.25, 1] as const;

const ROTATING_PHRASES = [
  "répond à vos clients 24h/24.",
  "parle wolof et français.",
  "automatise votre travail.",
  "booste votre performance.",
  "comprend nos réalités.",
] as const;

const PHRASE_INTERVAL_MS = 2600;

function RotatingPhrase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ROTATING_PHRASES.length),
      PHRASE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <span className="block whitespace-nowrap text-electric-500">
        {ROTATING_PHRASES[0]}
      </span>
    );
  }

  return (
    // Slight bottom padding (compensated by the negative margin) keeps
    // descenders like « ç » and « p » out of the clipped zone.
    <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_PHRASES[index]}
          initial={{ y: "115%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-115%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="block whitespace-nowrap text-electric-500"
        >
          {ROTATING_PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * Soft blurred gradient blobs that drift on their own and ease toward the
 * cursor with per-blob depth. All movement is transform-only (GPU).
 */
const BLOBS = [
  {
    color: "#5b8cff",
    size: 560,
    className: "left-[-8%] top-[4%]",
    opacity: 0.45,
    depth: 1,
    driftX: [0, 60, -45, 0],
    driftY: [0, -50, 35, 0],
    duration: 22,
  },
  {
    color: "#2f6bff",
    size: 480,
    className: "right-[-6%] top-[20%]",
    opacity: 0.35,
    depth: 0.6,
    driftX: [0, -70, 40, 0],
    driftY: [0, 45, -35, 0],
    duration: 17,
  },
  {
    color: "#8fd0ff",
    size: 540,
    className: "bottom-[-14%] left-[16%]",
    opacity: 0.5,
    depth: 0.8,
    driftX: [0, 50, -60, 0],
    driftY: [0, -35, 20, 0],
    duration: 25,
  },
  {
    color: "#2f6bff",
    size: 380,
    className: "bottom-[2%] right-[16%]",
    opacity: 0.3,
    depth: 0.4,
    driftX: [0, -40, 55, 0],
    driftY: [0, 30, -25, 0],
    duration: 15,
  },
] as const;

const PARALLAX_MAX_PX = 55;
const PARALLAX_LERP = 0.05;

/* ——— Interactive tile grid (Aceternity-style “background boxes”) ——— */

const TILE_COLORS = [
  "#0d5cff",
  "#2f6bff",
  "#5b8cff",
  "#8fd0ff",
  "#bdd3ff",
] as const;

const TILE_ROWS = 34;
const TILE_COLS = 44;
const TILE_FADE_MS = 1400;

// Flash a tile in a random brand blue, then let it fade back out.
// Direct DOM writes: zero React re-renders while the mouse sweeps the grid.
function paintTile(tile: HTMLElement) {
  tile.style.transition = "none";
  tile.style.backgroundColor =
    TILE_COLORS[Math.floor(Math.random() * TILE_COLORS.length)];
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      tile.style.transition = `background-color ${TILE_FADE_MS}ms ease`;
      tile.style.backgroundColor = "transparent";
    });
  });
}

function InteractiveTileGrid() {
  const reduceMotion = useReducedMotion();

  const handleMouseOver = (event: React.MouseEvent) => {
    if (reduceMotion) return;
    const target = event.target as HTMLElement;
    if (target.dataset.tile) paintTile(target);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (reduceMotion) return;
    const touch = event.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    if (el instanceof HTMLElement && el.dataset.tile) paintTile(el);
  };

  return (
    <div
      className="absolute inset-0 z-[1] overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 75% at 50% 45%, black 35%, transparent 78%)",
      }}
      aria-hidden
    >
      <div
        onMouseOver={handleMouseOver}
        onTouchMove={handleTouchMove}
        className="absolute left-1/2 top-1/2"
        style={{
          transform:
            "translate(-50%, -50%) skewX(-48deg) skewY(14deg) scale(0.75)",
        }}
      >
        {Array.from({ length: TILE_ROWS }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: TILE_COLS }).map((_, col) => (
              <div
                key={col}
                data-tile="1"
                className="h-10 w-20 border-r border-t border-electric-500/[0.09]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BlobField() {
  const reduceMotion = useReducedMotion();
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const field = fieldRef.current;
    if (!field) return;

    const layers = field.querySelectorAll<HTMLElement>("[data-depth]");
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      // Normalized cursor position: -1 (left/top) → 1 (right/bottom)
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * PARALLAX_LERP;
      pos.y += (target.y - pos.y) * PARALLAX_LERP;
      for (const layer of layers) {
        const depth = Number(layer.dataset.depth);
        layer.style.transform = `translate3d(${pos.x * PARALLAX_MAX_PX * depth}px, ${pos.y * PARALLAX_MAX_PX * depth}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduceMotion]);

  return (
    <div ref={fieldRef} className="absolute inset-0 overflow-hidden" aria-hidden>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          data-depth={blob.depth}
          className={`absolute will-change-transform ${blob.className}`}
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { x: blob.driftX as unknown as number[], y: blob.driftY as unknown as number[] }
            }
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: blob.size,
              height: blob.size,
              opacity: blob.opacity,
              background: `radial-gradient(circle at center, ${blob.color} 0%, transparent 70%)`,
              filter: "blur(80px)",
            }}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

export function HeroGeometric() {
  const reduceMotion = useReducedMotion();

  // Staggered entrance: element n fades in and rises, 0.12s after the previous
  const fadeUp = (order: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + order * 0.12, ease: EASE },
  });

  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #eef3ff 0%, #ffffff 100%)" }}
    >
      <div className="opacity-70">
        <BlobField />
      </div>
      <InteractiveTileGrid />
      {/* Soft veil that keeps the headline readable over the grid */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(closest-side_at_50%_45%,rgba(255,255,255,0.55),transparent_75%)]"
        aria-hidden
      />

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-950/10 bg-white/70 px-4 py-1.5 font-ui text-xs font-medium tracking-wide text-navy-900/70 backdrop-blur-sm md:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-electric-500" aria-hidden />
              Innovation africaine · IA en français
            </span>
          </motion.div>

          <h1 className="mt-9 font-display font-bold leading-[1.06] tracking-tight text-navy-950">
            <motion.span
              {...fadeUp(1)}
              className="block text-[clamp(2.5rem,7vw,5rem)]"
            >
              Une IA qui
            </motion.span>
            <motion.span
              {...fadeUp(2)}
              className="mt-3 block text-[clamp(1.375rem,5.5vw,3rem)]"
            >
              <RotatingPhrase />
            </motion.span>
          </h1>

          <motion.p
            {...fadeUp(3)}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-navy-900/70 sm:text-lg"
          >
            YEESAL AI aide les entreprises, ONG et institutions à automatiser
            leur travail, déployer des assistants IA en français et transformer
            leurs données en décisions.
          </motion.p>

          <motion.div
            {...fadeUp(4)}
            className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              href="/contact"
              variant="primary-glass"
              size="lg"
              className="pointer-events-auto w-full sm:w-auto"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="/diagnostic"
              variant="outline"
              size="lg"
              className="pointer-events-auto w-full sm:w-auto"
            >
              Essayer gratuitement
            </Button>
          </motion.div>

          <motion.div {...fadeUp(5)} className="mt-6">
            <Link
              href="/solutions"
              className="group pointer-events-auto inline-flex items-center gap-1.5 font-ui text-sm font-medium text-navy-900/70 transition-colors hover:text-navy-950"
            >
              Découvrir nos solutions
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.div>

          <motion.ul
            {...fadeUp(6)}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-ui text-xs font-medium uppercase tracking-[0.18em] text-navy-900/65"
          >
            <li>Disponible 24/7</li>
            <li className="hidden h-1 w-1 rounded-full bg-navy-900/25 sm:block" aria-hidden />
            <li>Français &amp; Wolof</li>
            <li className="hidden h-1 w-1 rounded-full bg-navy-900/25 sm:block" aria-hidden />
            <li>Basé à Dakar</li>
          </motion.ul>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden
      />
    </section>
  );
}
