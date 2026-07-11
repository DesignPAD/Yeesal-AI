"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Decorative backdrop for the Solutions section: oversized, tilted,
 * blurred product-UI mockups at very low opacity (Hall-IA style).
 * Pure CSS panels — no image assets — with a light scroll parallax.
 */

function Bar({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-navy-200/80", className)} />;
}

function PanelChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-navy-100 px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
      <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
      <span className="h-2.5 w-2.5 rounded-full bg-electric-300" />
      <span className="ml-3 font-ui text-[11px] font-semibold uppercase tracking-wider text-navy-400">
        {label}
      </span>
    </div>
  );
}

function ChatPanel() {
  return (
    <div className="w-[540px] overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl">
      <PanelChrome label="Agent YEESAL — WhatsApp" />
      <div className="space-y-3 p-5">
        <div className="ml-auto w-3/5 rounded-2xl rounded-br-sm bg-electric-500/90 p-3">
          <Bar className="h-2 w-4/5 bg-white/60" />
          <Bar className="mt-2 h-2 w-3/5 bg-white/60" />
        </div>
        <div className="w-2/3 rounded-2xl rounded-bl-sm bg-navy-50 p-3">
          <Bar className="h-2 w-full" />
          <Bar className="mt-2 h-2 w-4/5" />
          <Bar className="mt-2 h-2 w-2/5" />
        </div>
        <div className="ml-auto w-1/2 rounded-2xl rounded-br-sm bg-electric-500/90 p-3">
          <Bar className="h-2 w-full bg-white/60" />
        </div>
        <div className="w-3/5 rounded-2xl rounded-bl-sm bg-navy-50 p-3">
          <Bar className="h-2 w-4/5" />
          <Bar className="mt-2 h-2 w-3/5" />
        </div>
      </div>
    </div>
  );
}

function DashboardPanel() {
  return (
    <div className="flex w-[920px] overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl">
      <div className="w-44 shrink-0 space-y-4 border-r border-navy-100 bg-navy-50/60 p-5">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-electric-500" />
          <Bar className="h-2.5 w-16 bg-navy-300" />
        </div>
        {[24, 20, 28, 16, 22].map((w, i) => (
          <div
            key={i}
            className="h-2 rounded-full bg-navy-200/80"
            style={{ width: w * 4 }}
          />
        ))}
      </div>
      <div className="flex-1">
        <PanelChrome label="Tableau de bord" />
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {["70", "34", "3"].map((n, i) => (
              <div
                key={i}
                className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm"
              >
                <Bar className="h-2 w-16" />
                <p className="mt-2 font-display text-2xl font-bold text-navy-900">
                  {n}
                </p>
                <Bar className="mt-2 h-1.5 w-10 bg-electric-200" />
              </div>
            ))}
          </div>
          <div className="mt-5 flex h-28 items-end gap-2 rounded-xl border border-navy-100 bg-navy-50/40 p-4">
            {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75].map((h, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-t",
                  i % 3 === 0 ? "bg-electric-400" : "bg-electric-200",
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryPanel() {
  return (
    <div className="w-[520px] overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl">
      <PanelChrome label="Historique — Rapports" />
      <div className="divide-y divide-navy-50 p-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-4 px-4 py-3">
            <span className="h-8 w-8 shrink-0 rounded-lg bg-electric-50" />
            <div className="flex-1">
              <Bar className={cn("h-2", i % 2 ? "w-4/5" : "w-3/5")} />
              <Bar className="mt-2 h-1.5 w-2/5 bg-navy-100" />
            </div>
            <Bar className="h-4 w-14 rounded-md bg-mint-400/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

const PANELS = [
  {
    Panel: ChatPanel,
    className:
      "left-[-8%] top-[-4%] rotate-[-8deg] opacity-[0.11] blur-[5px]",
    parallax: [-28, 28] as const,
  },
  {
    Panel: DashboardPanel,
    className:
      "left-1/2 top-[26%] -ml-[460px] rotate-[6deg] opacity-[0.09] blur-[6px]",
    parallax: [36, -36] as const,
  },
  {
    Panel: HistoryPanel,
    className:
      "right-[-7%] top-[8%] rotate-[9deg] opacity-[0.12] blur-[4px]",
    parallax: [-18, 42] as const,
  },
  {
    Panel: ChatPanel,
    className:
      "bottom-[-10%] left-[6%] rotate-[5deg] opacity-[0.08] blur-[7px]",
    parallax: [24, -30] as const,
  },
] as const;

export function SolutionsBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // One transform per panel — different speeds/directions add depth
  const offsets = [
    useTransform(scrollYProgress, [0, 1], PANELS[0].parallax as unknown as number[]),
    useTransform(scrollYProgress, [0, 1], PANELS[1].parallax as unknown as number[]),
    useTransform(scrollYProgress, [0, 1], PANELS[2].parallax as unknown as number[]),
    useTransform(scrollYProgress, [0, 1], PANELS[3].parallax as unknown as number[]),
  ];

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {PANELS.map(({ Panel, className }, i) => (
        <motion.div
          key={i}
          style={reduceMotion ? undefined : { y: offsets[i] }}
          className={cn("absolute will-change-transform", className)}
        >
          <Panel />
        </motion.div>
      ))}
    </div>
  );
}
