import React from "react";

const ServicesSection = ({ t }) => {
  const services = [
    {
      icon: "💊",
      titleKey: "genericMedicinesTitle",
      descKey: "genericMedicinesSubDesc",
      itemKeys: ["cardiac", "antibiotics", "painRelief"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: "🛒",
      titleKey: "otcWellness",
      descKey: "otcWellnessDesc",
      itemKeys: ["feverCold", "vitamins", "skinCare"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: "⚕️",
      titleKey: "surgicalItemsTitle",
      descKey: "surgicalItemsDesc",
      itemKeys: ["syringes", "bandages", "masks"],
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: "👨‍⚕️",
      titleKey: "patientSupport",
      descKey: "patientSupportDesc",
      itemKeys: ["counselling", "dosageHelp", "alternatives"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: "📋",
      titleKey: "chronicCare",
      descKey: "chronicCareDesc",
      itemKeys: ["monthlyRefills", "bulkOrders", "records"],
      gradient: "from-rose-500 to-red-500",
      bgGradient: "from-rose-50 to-red-50",
    },
    {
      icon: "🚚",
      titleKey: "specialOrders",
      descKey: "specialOrdersDesc",
      itemKeys: ["onDemand", "quickDelivery", "support"],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
    },
  ];

  return (
    <section
      id="medicines"
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-300/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 to-blue-300/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative space-y-16 lg:space-y-20">
        {/* Header */}
        <div className="space-y-5 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("servicesLabel")}
            </span>
          </div>
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-3">
              {t("whatWeOffer")}
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Comprehensive healthcare solutions tailored for you
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {services.map((service, idx) => (
            <div key={idx} className="group h-full relative">
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity duration-500`}
              />

              {/* Card */}
              <div
                className={`relative h-full p-7 sm:p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/60 hover:border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Icon Badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform origin-left duration-300`}
                >
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 font-medium mb-6 flex-grow">
                  {t(service.descKey)}
                </p>

                {/* Divider */}
                <div
                  className={`h-1.5 w-12 bg-gradient-to-r ${service.gradient} rounded-full mb-6`}
                />

                {/* Features List */}
                <ul className="space-y-3">
                  {service.itemKeys.map((itemKey, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}
                      >
                        <span className="text-xs font-bold text-white">✓</span>
                      </span>
                      <span className="text-sm text-slate-700 font-semibold leading-snug group-hover/item:text-slate-900 transition-colors">
                        {t(itemKey)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div className="mt-6 pt-6 border-t border-white/40" />
                <button
                  className={`w-full mt-4 px-4 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg active:scale-95`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Need Expert Guidance?
              </h3>
              <p className="text-lg text-blue-100 font-medium mb-6">
                Our certified pharmacists are available 24/7 to help you find
                the right medicines.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
              <a
                href="tel:+919835123889"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-center"
              >
                <span className="text-xl">📞</span>
                <span>Call Now</span>
              </a>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-xl">💬</span>
                <span>Chat with Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
