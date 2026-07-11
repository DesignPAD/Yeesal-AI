import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet IA",
  description:
    "Contactez YEESAL AI : demande de démo, diagnostic IA ou question sur nos solutions. Réponse sous 24h ouvrées, par email ou WhatsApp Business.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    detail: "Réponse rapide en journée",
    href: siteConfig.whatsapp,
  },
  {
    icon: MapPin,
    title: "Bureau",
    detail: siteConfig.address,
  },
  {
    icon: Clock,
    title: "Délai de réponse",
    detail: "Sous 24h ouvrées",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une démo, un diagnostic ou une simple question : dites-nous où vous en êtes, nous vous répondons sous 24h ouvrées."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="space-y-4">
                {channels.map((channel) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-navy-950/[0.07] bg-navy-50/40 p-5 transition-colors duration-300 hover:border-electric-500/30 hover:bg-white">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-electric-300">
                        <channel.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-ui text-sm font-semibold text-navy-950">
                          {channel.title}
                        </p>
                        <p className="mt-0.5 text-sm text-navy-900/65">
                          {channel.detail}
                        </p>
                      </div>
                    </div>
                  );
                  return channel.href ? (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={channel.title}>{content}</div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-950/[0.07] bg-navy-50/30 p-6 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
