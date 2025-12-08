import React from "react";

const AboutSection = ({ t }) => {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            {t("aboutUs")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            {t("affordableHealthcare")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-6">
            <div className="space-y-5">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-semibold text-blue-950">
                {t("janAushadhi")}
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t("genericMedicinesDesc")}
              </p>
            </div>

            <div className="pt-4 pl-4 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-lg p-4">
              <p className="text-sm text-slate-600 italic font-medium">
                {t("savingsCalculated")}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50">
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                  90%
                </p>
                <p className="text-xs text-slate-600 font-semibold mt-1">
                  Max Savings
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  2000+
                </p>
                <p className="text-xs text-slate-600 font-semibold mt-1">
                  Medicines
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50">
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  WHO
                </p>
                <p className="text-xs text-slate-600 font-semibold mt-1">
                  Certified
                </p>
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                icon: "💰",
                title: t("affordable"),
                desc: t("affordableDesc"),
                gradient: "from-orange-50 to-amber-50",
                border: "border-orange-200/50",
                accent: "text-orange-600",
              },
              {
                icon: "✅",
                title: t("qualityAssured"),
                desc: t("qualityAssuredDesc"),
                gradient: "from-green-50 to-emerald-50",
                border: "border-green-200/50",
                accent: "text-green-600",
              },
              {
                icon: "📦",
                title: t("wideRange"),
                desc: t("wideRangeDesc"),
                gradient: "from-blue-50 to-cyan-50",
                border: "border-blue-200/50",
                accent: "text-blue-600",
              },
              {
                icon: "❤️",
                title: t("forEveryone"),
                desc: t("forEveryoneDesc"),
                gradient: "from-pink-50 to-rose-50",
                border: "border-pink-200/50",
                accent: "text-pink-600",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`group p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-slate-900 mb-2 text-lg ${card.accent}`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
