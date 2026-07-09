"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, ShieldCheck, Languages, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const stats = [
  { value: 70, suffix: "%", label: "de temps gagné sur les tâches répétitives" },
  { value: 24, suffix: "/7", label: "de disponibilité pour vos clients et équipes" },
  { value: 3, suffix: " sem.", label: "pour mettre en place un premier POC" },
  { value: 100, suffix: "%", label: "des solutions livrées en français" },
];

const reasons = [
  {
    icon: MapPin,
    title: "Ancrage local",
    description:
      "Une équipe basée à Dakar qui comprend les réalités du terrain : connectivité, langues, usages et contraintes des organisations africaines.",
  },
  {
    icon: Languages,
    title: "IA en français et en wolof",
    description:
      "Des assistants et des livrables dans les langues de travail de vos équipes et de vos clients — pas de barrière linguistique.",
  },
  {
    icon: ShieldCheck,
    title: "Données sécurisées",
    description:
      "Confidentialité et protection des données au cœur de chaque projet, avec des architectures maîtrisées de bout en bout.",
  },
  {
    icon: Handshake,
    title: "Accompagnement complet",
    description:
      "Du diagnostic à la formation des équipes, nous restons à vos côtés jusqu'à ce que l'impact soit mesurable et durable.",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className="font-tech text-5xl tracking-tight text-navy-950 sm:text-6xl">
      {reduceMotion ? value : display}
      <span className="font-display font-semibold text-electric-500">
        {suffix}
      </span>
    </span>
  );
}

export function WhyYeesal() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Container className="relative">
        <SectionHeading
          eyebrow="Pourquoi YEESAL AI"
          title="L'exigence d'une entreprise tech, la connaissance du terrain africain"
        />

        <StaggerGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center lg:text-left">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-navy-900/70 lg:mx-0">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-20 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full gap-5 rounded-3xl border border-navy-950/[0.07] bg-navy-50/40 p-7 transition-colors duration-300 hover:border-electric-500/30 hover:bg-white hover:shadow-xl hover:shadow-navy-950/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-50">
                  <reason.icon
                    className="h-5 w-5 text-electric-600"
                    aria-hidden
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-navy-950">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
