// src/components/TopBar.jsx
import React from "react";

const TopBar = ({ t }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-700 text-white text-xs sm:text-sm shadow-lg">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 py-4">
        <p className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-[12px] font-bold backdrop-blur shadow">
            ✓
          </span>
          <span className="font-semibold tracking-wide">{t("topBar")}</span>
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="tel:+919835123889"
            className="hover:text-blue-200 transition-colors font-semibold"
          >
            {t("phone")}
          </a>
          <span className="hidden sm:inline font-semibold">
            {t("available")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
