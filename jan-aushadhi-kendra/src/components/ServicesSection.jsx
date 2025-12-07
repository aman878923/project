// src/components/ServicesSection.jsx
import React from "react";

const ServicesSection = ({ t }) => {
  const services = [
    {
      icon: "💊",
      titleKey: "genericMedicinesTitle",
      descKey: "genericMedicinesSubDesc",
      itemKeys: ["cardiac", "antibiotics", "painRelief"],
    },
    {
      icon: "🛒",
      titleKey: "otcWellness",
      descKey: "otcWellnessDesc",
      itemKeys: ["feverCold", "vitamins", "skinCare"],
    },
    {
      icon: "⚕️",
      titleKey: "surgicalItemsTitle",
      descKey: "surgicalItemsDesc",
      itemKeys: ["syringes", "bandages", "masks"],
    },
    {
      icon: "👨‍⚕️",
      titleKey: "patientSupport",
      descKey: "patientSupportDesc",
      itemKeys: ["counselling", "dosageHelp", "alternatives"],
    },
    {
      icon: "📋",
      titleKey: "chronicCare",
      descKey: "chronicCareDesc",
      itemKeys: ["monthlyRefills", "bulkOrders", "records"],
    },
    {
      icon: "🚚",
      titleKey: "specialOrders",
      descKey: "specialOrdersDesc",
      itemKeys: ["onDemand", "quickDelivery", "support"],
    },
  ];

  return (
    <section
      id="medicines"
      className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="section-container space-y-16">
        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
            {t("servicesLabel")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
            {t("whatWeOffer")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-white border border-blue-100/30 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <p className="text-3xl mb-4">{service.icon}</p>
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {t(service.descKey)}
              </p>
              <ul className="space-y-2">
                {service.itemKeys.map((itemKey, i) => (
                  <li
                    key={i}
                    className="text-xs text-slate-600 flex items-center gap-2"
                  >
                    <span className="text-blue-600 font-bold">•</span>
                    {t(itemKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
