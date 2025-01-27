"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function GridBackground({
  title,
  description,
  showAvailability = true,
  className
}) {
  return (
    <div
      className={cn(
        'px-5 py-10 rounded-md relative mx-18 flex items-center justify-center',
        className
      )}
      style={{
        backgroundColor: 'rgba(15, 15, 15, 0.5)',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
    >
      <div
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `
        }}
      />
      <div
        className="absolute inset-0 border-2 rounded-md"
        style={{
          animation: 'border-color-change 6s linear infinite'
        }}
      />
      <div className="relative z-20 text-center max-w-7xl">
        <h1 className="text-6xl font-bold text-white">
          {title || "Hritwik Nauriyal"}
        </h1>
        <p className="text-md mt-5 text-gray-300">
          {description ||
            "I'm a final-year Computer Science student at UNSW, passionate about full-stack web development, AI, and workflow automation. Currently building scalable applications, backend systems, and graph-driven data models."}
        </p>

        {showAvailability && (
          <div
            className="available-now text-[#20bb5a] text-sm flex items-center justify-center mt-5"
          >
            <div
              className="w-2 h-2 bg-[#20bb5a] rounded-full inline-block mr-2 animate-pulse shadow-[0_0_8px_#20bb5a]"
            />
            Available for collaboration
          </div>
        )}
      </div>
    </div>
  );
}
