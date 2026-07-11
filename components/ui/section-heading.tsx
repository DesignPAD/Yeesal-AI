import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-ui text-xs font-semibold uppercase tracking-[0.22em]",
            dark ? "text-electric-300" : "text-electric-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-navy-100/70" : "text-navy-900/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
