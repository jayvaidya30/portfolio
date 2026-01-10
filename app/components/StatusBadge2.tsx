import React from "react";

interface StatusBadgeProps {
  customText?: string;
  className?: string;
  pulsing?: boolean;
}

export const StatusBadge2: React.FC<StatusBadgeProps> = ({
  customText = "Open for work",
  className = "",
  pulsing = true,
}) => {
  return (
    <div
      className={`
        group relative inline-flex p-0.5 rounded-full 
        bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 
        hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400
        shadow-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] 
        transition-all duration-300 ease-out 
        hover:-translate-y-0.5 hover:scale-105 cursor-pointer select-none
        ${className}
      `}
    >
      {/* Inner Background Container */}
      <div className="bg-white w-full h-full rounded-full px-4 py-1 text-sm font-semibold text-slate-800 flex items-center gap-2 relative z-10 transition-colors duration-300 group-hover:bg-white/95">
        {/* Animated Status Dot */}
        <span className="relative flex h-2.5 w-2.5">
          {pulsing && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-pink-500"></span>
          )}
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
        </span>

        {/* Text with Gradient Hover Effect */}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-800 to-slate-600 group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
          {customText}
        </span>
      </div>
    </div>
  );
};
