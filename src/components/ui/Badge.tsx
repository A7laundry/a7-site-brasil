import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "success" | "warning";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-primary/5 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success-50 text-success-600",
    warning: "bg-warning-50 text-warning-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
