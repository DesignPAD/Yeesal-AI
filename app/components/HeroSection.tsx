"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Max 10px movement
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`,
          }}
        >
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
        <div className="max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0AFF5C]">
            Agence d&apos;intelligence artificielle · Sénégal
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            L&apos;IA au service des organisations au Sénégal.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            YEESAL AI conçoit des agents IA, des automatisations et des
            solutions data adaptés aux réalités des entreprises, ONG et
            institutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center rounded-full bg-[#1581BF] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#10659b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Demander un Diagnostic
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
