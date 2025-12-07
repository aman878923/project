// src/components/BenefitsSection.jsx
import React from "react";

const BenefitsSection = ({ t }) => {
  const benefits = [
    {
      title: t("saveMoney"),
      desc: t("saveMoneyDesc"),
    },
    {
      title: t("transparent"),
      desc: t("transparentDesc"),
    },
    {
      title: t("govBacked"),
      desc: t("govBackedDesc"),
    },
    {
      title: t("friendly"),
      desc: t("friendlyDesc"),
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white">
      <div className="section-container space-y-16">
        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
            {t("whyChooseUs")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {t("whyChooseUs")}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <h3 className="font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
