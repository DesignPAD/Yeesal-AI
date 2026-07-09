import {
  Landmark,
  GraduationCap,
  HeartPulse,
  Globe2,
  ShoppingBag,
  Truck,
  Wheat,
  Radio,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const sectors = [
  { label: "Banque & Finance", icon: Landmark },
  { label: "Éducation", icon: GraduationCap },
  { label: "Santé", icon: HeartPulse },
  { label: "ONG & Institutions", icon: Globe2 },
  { label: "Commerce", icon: ShoppingBag },
  { label: "Logistique", icon: Truck },
  { label: "Agriculture", icon: Wheat },
  { label: "Télécoms", icon: Radio },
];

export function TrustedBy() {
  return (
    <section className="bg-white pb-20 pt-4" aria-label="Secteurs accompagnés">
      <Container>
        <p className="text-center font-ui text-xs font-semibold uppercase tracking-[0.24em] text-navy-900/65">
          Ils font confiance à l&apos;IA pour transformer leur secteur
        </p>
      </Container>
      <div className="mask-fade-x mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 pr-4">
          {[...sectors, ...sectors].map((sector, i) => (
            <div
              key={`${sector.label}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-navy-950/[0.08] bg-navy-50/50 px-6 py-3"
              aria-hidden={i >= sectors.length}
            >
              <sector.icon
                className="h-4 w-4 text-electric-500/80"
                aria-hidden
              />
              <span className="whitespace-nowrap font-display text-sm font-medium text-navy-900/70">
                {sector.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
