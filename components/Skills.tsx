import React, { ReactNode } from "react";

type SkillsProps = {
  label: string;
  icon: ReactNode;
};

export default function Skills({
  label,
  icon,
}: SkillsProps) {
  return (
    <div
      className="flex justify-center items-center gap-2 border border-neutral-700 bg-neutral-900 rounded-lg px-2 py-1.5"
    >
      {icon}
      {label}
    </div>
  );
}
