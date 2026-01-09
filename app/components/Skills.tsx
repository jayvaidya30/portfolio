import React, { ReactNode } from "react";

type SkillsProps = {
  href?: string;
  label: string;
  icon: ReactNode;
};

export default function Skills({
  href,
  label,
  icon,
}: SkillsProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-1.5"
    >
      {icon}
      {label}
    </a>
  );
}
