"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  CalendarCheck,
  FileText,
  Languages,
  User,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const messages = [
  {
    from: "user",
    text: "Bonjour, je voudrais connaître le statut de ma commande #4521.",
  },
  {
    from: "agent",
    text: "Bonjour Awa 👋 Votre commande #4521 a été expédiée ce matin. Livraison prévue demain avant 18h à Dakar Plateau.",
  },
  {
    from: "user",
    text: "Parfait ! Est-ce que je peux changer l'adresse de livraison ?",
  },
  {
    from: "agent",
    text: "Bien sûr. Je transfère votre demande à notre équipe logistique — vous recevrez une confirmation d'ici quelques minutes.",
  },
] as const;

const automations = [
  {
    icon: CalendarCheck,
    title: "Demande qualifiée et transférée",
    detail: "Ticket créé dans votre CRM",
  },
  {
    icon: FileText,
    title: "Compte rendu généré",
    detail: "Synthèse envoyée à l'équipe",
  },
  {
    icon: Languages,
    title: "Français & Wolof",
    detail: "Réponses dans la langue du client",
  },
];

const points = [
  "Connecté à votre base de connaissances et à vos outils",
  "Escalade automatique vers un humain quand c'est nécessaire",
  "Chaque échange devient une donnée exploitable",
];

export function Showcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-50/40 py-24 sm:py-32">
      <div
        className="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-electric-400/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Automatisation en action"
              title="Vos clients obtiennent une réponse. Vos équipes gagnent du temps."
              description="Un agent YEESAL AI prend en charge les demandes récurrentes 24h/24, pendant que les automatisations orchestrent le travail en arrière-plan."
            />
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <Reveal key={point}>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-navy-900/70">
                    <BadgeCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-mint-600"
                      aria-hidden
                    />
                    {point}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Chat mock */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="rounded-3xl border border-white/10 bg-navy-950 p-5 shadow-2xl shadow-navy-950/25 lg:pb-24"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500/15">
                  <Bot className="h-5 w-5 text-electric-400" aria-hidden />
                </span>
                <div>
                  <p className="font-ui text-sm font-semibold text-white">
                    Agent YEESAL AI
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-navy-100/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-400" aria-hidden />
                    En ligne · répond en quelques secondes
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                {messages.map((message, i) => (
                  <motion.div
                    key={i}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.35,
                      ease: EASE,
                    }}
                    className={cn(
                      "flex items-end gap-2",
                      message.from === "user" && "flex-row-reverse",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        message.from === "user"
                          ? "bg-white/10"
                          : "bg-electric-500/15",
                      )}
                      aria-hidden
                    >
                      {message.from === "user" ? (
                        <User className="h-3.5 w-3.5 text-navy-100/70" />
                      ) : (
                        <Bot className="h-3.5 w-3.5 text-electric-400" />
                      )}
                    </span>
                    <p
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        message.from === "user"
                          ? "rounded-br-sm bg-electric-500 text-white"
                          : "rounded-bl-sm bg-white/[0.06] text-navy-100/85",
                      )}
                    >
                      {message.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Background automation feed */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-4 rounded-2xl border border-white/10 bg-navy-900 p-4 shadow-2xl shadow-navy-950/30 lg:absolute lg:-bottom-14 lg:-right-8 lg:mt-0 lg:w-72"
            >
              <p className="flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-navy-100/50">
                <Zap className="h-3.5 w-3.5 text-electric-400" aria-hidden />
                En arrière-plan
              </p>
              <ul className="mt-3 space-y-3">
                {automations.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <item.icon
                        className="h-3.5 w-3.5 text-electric-300"
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-navy-100/50">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
