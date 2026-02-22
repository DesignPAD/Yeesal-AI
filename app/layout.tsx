import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// Poppins: titles & headings
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Montserrat: body text & UI
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YEESAL AI",
  description:
    "Agence d’intelligence artificielle et d’automatisation basée au Sénégal : agents IA, automatisation, data & aide à la décision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 bg-transparent">
            <div className="px-4 pt-4 md:px-6">
              <div className="mx-auto flex max-w-6xl justify-center">
                <div className="flex w-full items-center justify-between rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg backdrop-blur-xl md:px-5 md:text-sm">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-full px-2 py-1 text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0a2540] transition-all duration-300 hover:ring-2 hover:ring-[#0AFF5C] hover:ring-offset-2 hover:ring-offset-transparent focus-within:ring-2 focus-within:ring-[#0AFF5C] focus-within:ring-offset-2 focus-within:ring-offset-transparent">
                      <Image
                        src="/yeesal-logo.png"
                        alt="Logo YEESAL AI"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        priority
                      />
                    </div>
                    <span className="hidden font-[family-name:var(--font-poppins)] tracking-wide md:inline">
                      YEESAL AI
                    </span>
                  </Link>
                  <nav className="hidden items-center gap-3 md:flex">
                    <Link
                      href="/solutions"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      Solutions
                    </Link>
                    <Link
                      href="/diagnostic"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      Diagnostic
                    </Link>
                    <Link
                      href="/portail"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      Portail client
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/faq"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/legal"
                      className="rounded-full px-3 py-1 font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#1581BF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C]"
                    >
                      Légal
                    </Link>
                    <Link
                      href="/diagnostic"
                      className="inline-flex items-center justify-center rounded-full bg-[#1581BF] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#10659b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AFF5C] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Demander un Diagnostic
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1">{children}</div>

          <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} YEESAL AI. Tous droits réservés.</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="hover:text-sky-900">
                  Contact
                </Link>
                <Link href="/faq" className="hover:text-sky-900">
                  FAQ
                </Link>
                <Link href="/legal" className="hover:text-sky-900">
                  Mentions légales
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
