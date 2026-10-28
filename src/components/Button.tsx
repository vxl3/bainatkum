import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-bold transition-all duration-200 active:scale-[0.97] select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-l from-primary to-accent text-bg shadow-glow hover:brightness-110",
  secondary:
    "bg-bg-elevated text-ink border border-white/10 hover:bg-white/5",
  ghost: "text-ink-muted hover:text-ink",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
