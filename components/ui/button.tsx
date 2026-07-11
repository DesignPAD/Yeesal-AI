import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "primary-glass"
  | "secondary"
  | "ghost"
  | "white"
  | "outline"
  | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-ui font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-electric-500 text-white shadow-lg shadow-electric-500/25 hover:bg-electric-600 hover:shadow-electric-600/30 hover:-translate-y-0.5 active:translate-y-0",
  // Solid blue that melts into frosted glass on hover
  "primary-glass":
    "border border-transparent bg-electric-500 text-white shadow-lg shadow-electric-500/25 duration-[350ms] hover:border-white/70 hover:bg-white/40 hover:text-electric-700 hover:shadow-electric-500/10 hover:backdrop-blur-[14px] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-navy-950 text-white hover:bg-navy-900 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-navy-900 hover:bg-navy-950/5",
  white:
    "bg-white text-navy-950 shadow-lg shadow-black/10 hover:bg-navy-50 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-navy-950/15 bg-white/60 text-navy-950 backdrop-blur-sm hover:border-navy-950/30 hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link {...(rest as Omit<ButtonAsLink, keyof CommonProps>)} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as Omit<ButtonAsButton, keyof CommonProps>)}
      className={classes}
    >
      {children}
    </button>
  );
}
