import { HeroGeometric } from "@/components/home/hero-geometric";
import { TrustedBy } from "@/components/home/trusted-by";
import { Services } from "@/components/home/services";
import { Showcase } from "@/components/home/showcase";
import { UseCases } from "@/components/home/use-cases";
import { Method } from "@/components/home/method";
import { WhyYeesal } from "@/components/home/why-yeesal";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <HeroGeometric />
      <TrustedBy />
      <Services />
      <Showcase />
      <UseCases />
      <Method />
      <WhyYeesal />
      <FaqSection />
      <FinalCta />
    </>
  );
}
