import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { footerLinks, siteConfig } from "@/lib/site";

const columns = [
  { title: "Solutions", links: footerLinks.solutions },
  { title: "Entreprise", links: footerLinks.company },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy-950/[0.06] bg-navy-50/60 text-navy-900">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light mask-fade-b"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/brand/yeesal-mark.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-navy-950">
                YEESAL&nbsp;AI
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-900/70">
              {siteConfig.description}
            </p>
            <p className="mt-6 font-ui text-xs font-medium uppercase tracking-[0.2em] text-navy-900/65">
              Dakar · Sénégal · Afrique
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-ui text-sm font-semibold text-navy-950">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-900/70 transition-colors hover:text-navy-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-ui text-sm font-semibold text-navy-950">
              Nous contacter
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-900/70">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-navy-950"
                >
                  <Mail className="h-4 w-4 text-electric-500" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-navy-950"
                >
                  <MessageCircle
                    className="h-4 w-4 text-electric-500"
                    aria-hidden
                  />
                  WhatsApp Business
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-electric-500" aria-hidden />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-navy-950/[0.08] py-8 text-xs text-navy-900/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-navy-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
