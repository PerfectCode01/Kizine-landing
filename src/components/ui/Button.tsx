import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  href = "#",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition duration-300";

  const variantClasses = {
    primary:
      "bg-[var(--color-secondary)] text-black hover:opacity-90",
    secondary:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
}