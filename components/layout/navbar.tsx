"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation (state adjustment during render,
  // see https://react.dev/learn/you-might-not-need-an-effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="px-4 pt-4 sm:px-6">
        <nav
          aria-label="Navigation principale"
          className={cn(
            "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] px-4 pl-5 backdrop-blur-[18px] transition-all duration-300",
            scrolled || open
              ? "bg-[rgba(25,25,35,0.78)] shadow-xl shadow-navy-950/25"
              : "bg-[rgba(25,25,35,0.60)] shadow-lg shadow-navy-950/10",
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg"
            aria-label="YEESAL AI — Accueil"
          >
            <Image
              src="/brand/yeesal-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_4px_14px_rgba(13,92,255,0.65)]"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              YEESAL&nbsp;AI
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 font-ui text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/contact"
              className="group inline-flex h-10 items-center gap-2 rounded-full bg-electric-500 px-5 font-ui text-sm font-semibold text-white shadow-lg shadow-electric-500/30 transition-all duration-200 hover:bg-electric-600 hover:-translate-y-0.5"
            >
              Demander une démo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="px-4 pt-2 sm:px-6 md:hidden"
          >
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/[0.08] bg-[rgba(25,25,35,0.92)] p-3 shadow-2xl shadow-navy-950/40 backdrop-blur-[18px]">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 font-ui text-base font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-white/[0.08] pt-3">
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-electric-500 font-ui text-sm font-semibold text-white transition-colors hover:bg-electric-600"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
