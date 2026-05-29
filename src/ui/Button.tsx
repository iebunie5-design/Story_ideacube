import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const variants = {
    primary:
      "bg-accent-yellow text-navy-deep hover:bg-accent-hover focus-visible:outline-accent-yellow",
    secondary:
      "border border-white/28 bg-white/8 text-white hover:bg-white/14 focus-visible:outline-white",
    dark: "bg-navy-primary text-white hover:bg-navy-deep focus-visible:outline-navy-primary"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[15px] font-bold transition duration-300 ease-premium hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:min-w-0 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
