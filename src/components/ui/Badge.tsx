import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 transition-colors hover:bg-gray-300";

  return <span className={`${baseStyles} ${className}`.trim()}>{children}</span>;
}
