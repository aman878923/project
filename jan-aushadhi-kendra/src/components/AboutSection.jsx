// src/components/AboutSection.jsx
import React from "react";

const AboutSection = ({ t }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
              {t("aboutUs")}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {t("affordableHealthcare")}
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {t("janAushadhi")}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t("genericMedicinesDesc")}
            </p>
          </div>

          <div className="text-sm text-slate-600 italic font-medium pt-4 border-t border-blue-100/50">
            {t("savingsCalculated")}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-3">💰</p>
            <h3 className="font-bold text-slate-900 mb-2">{t("affordable")}</h3>
            <p className="text-sm text-slate-700">{t("affordableDesc")}</p>
          </div>
          <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-3">✅</p>
            <h3 className="font-bold text-slate-900 mb-2">
              {t("qualityAssured")}
            </h3>
            <p className="text-sm text-slate-700">{t("qualityAssuredDesc")}</p>
          </div>
          <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-3">📦</p>
            <h3 className="font-bold text-slate-900 mb-2">{t("wideRange")}</h3>
            <p className="text-sm text-slate-700">{t("wideRangeDesc")}</p>
          </div>
          <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-3">❤️</p>
            <h3 className="font-bold text-slate-900 mb-2">
              {t("forEveryone")}
            </h3>
            <p className="text-sm text-slate-700">{t("forEveryoneDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
