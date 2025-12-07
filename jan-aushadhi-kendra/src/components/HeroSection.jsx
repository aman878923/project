// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({ t, scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 pt-12 sm:pt-16 lg:pt-28 pb-16 sm:pb-24 lg:pb-32"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
              {t("trustedHealthcare")}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
              {t("qualityMedicines")}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t("unbeatable")}
              </span>
            </h1>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed max-w-lg font-medium">
            {t("heroDesc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:+919835123889"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              {t("callNow")}
            </a>
            <button
              onClick={() => scrollToSection("location")}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t("findUs")}
            </button>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
              <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                {t("savings")}
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {t("savingsPct")}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
              <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                {t("status")}
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {t("statusOpen")}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
              <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                {t("hours")}
              </p>
              <p className="text-2xl font-bold text-blue-600">{t("hours24")}</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Store Info Card */}
        <div className="relative">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
          <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />

          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-100/50 rounded-2xl shadow-2xl p-8 space-y-6">
            <div className="space-y-3 pb-6 border-b border-blue-100/30">
              <h3 className="text-2xl font-bold text-slate-900">
                {t("storeInfo")}
              </h3>
              <p className="text-sm text-slate-600">{t("govCertified")}</p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {t("address")}
                  </p>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {t("addressValue")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {t("contactLabel")}
                  </p>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {t("contactValue")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">📧</span>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {t("email")}
                  </p>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {t("emailValue")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200/50">
              <p className="text-xs font-bold text-emerald-700 mb-2">
                {t("status")}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{t("openNow")}</p>
                  <p className="text-xs text-slate-600">{t("openTime")}</p>
                </div>
                <span className="text-lg">🟢</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-slate-500 uppercase">
                {t("weProvide")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                  {t("genericMedicines")}
                </span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                  {t("otcProducts")}
                </span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                  {t("surgicalItems")}
                </span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                  {t("wellness")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
