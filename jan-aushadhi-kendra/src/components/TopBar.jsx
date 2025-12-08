import React from "react";

const TopBar = ({ t }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs sm:text-sm shadow-lg overflow-hidden relative group">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />

      <div className="section-container relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 py-3.5 sm:py-4">
        {/* Left: Status Message */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          {/* Main Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group/badge">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-[11px] font-bold backdrop-blur shadow-sm group-hover/badge:animate-pulse">
              ✓
            </span>
            <span className="font-bold tracking-wide text-white">
              {t("topBar")}
            </span>
          </div>

          {/* Online Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-300/30 hover:bg-green-500/30 transition-all duration-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-200">
              {t("available")}
            </span>
          </div>
        </div>

        {/* Right: Contact Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Phone Link */}
          <a
            href="tel:+919835123889"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 font-bold transition-all duration-300 hover:scale-105 active:scale-95 group/phone"
          >
            <span className="text-sm group-hover/phone:scale-125 transition-transform">
              📞
            </span>
            <span>{t("phone")}</span>
          </a>

          {/* Hours Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 font-semibold hover:bg-white/15 transition-all duration-300">
            <span className="text-sm">🕐</span>
            <span className="text-xs">{t("available")}</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
};

export default TopBar;
