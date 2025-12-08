import React from "react";

const BenefitsSection = ({ t }) => {
  const benefits = [
    {
      icon: "💰",
      title: t("saveMoney"),
      desc: t("saveMoneyDesc"),
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      iconBg: "from-orange-100 to-amber-100",
    },
    {
      icon: "🔍",
      title: t("transparent"),
      desc: t("transparentDesc"),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-100 to-cyan-100",
    },
    {
      icon: "🏛️",
      title: t("govBacked"),
      desc: t("govBackedDesc"),
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "from-emerald-100 to-teal-100",
    },
    {
      icon: "👥",
      title: t("friendly"),
      desc: t("friendlyDesc"),
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "from-purple-100 to-pink-100",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/10 to-amber-300/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-pink-300/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative space-y-16 lg:space-y-20">
        {/* Header */}
        <div className="space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("whyChooseUs")}
            </span>
          </div>
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              {t("whyChooseUs")}
            </h2>
            <p className="mt-4 text-lg text-slate-700 font-medium">
              Discover the advantages of choosing Jan Aushadhi Kendra for your
              healthcare needs
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group relative h-full">
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity duration-500`}
              />

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-xl border border-white/60 hover:border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group-hover:scale-105 origin-center`}
              >
                {/* Icon Badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/50`}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform origin-left duration-300`}
                >
                  {benefit.title}
                </h3>

                {/* Divider */}
                <div
                  className={`h-1.5 w-8 bg-gradient-to-r ${benefit.gradient} rounded-full mb-5`}
                />

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed flex-grow">
                  {benefit.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 pt-6 border-t border-white/40">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    <span
                      className={`w-1.5 h-1.5 bg-gradient-to-r ${benefit.gradient} rounded-full`}
                    />
                    Learn more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-200/60">
          {[
            {
              stat: "90%",
              label: "Average Savings",
              icon: "💰",
            },
            {
              stat: "24/7",
              label: "Customer Support",
              icon: "🛟",
            },
            {
              stat: "100%",
              label: "Quality Assured",
              icon: "✅",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                {item.stat}
              </p>
              <p className="text-sm font-bold text-slate-700">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-slate-200/60">
          <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-6">
            ✓ Trusted by thousands of families across India
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: "🏥", label: "WHO Certified" },
              { icon: "📋", label: "FDA Approved" },
              { icon: "🛡️", label: "Quality Assured" },
              { icon: "🇮🇳", label: "Government Program" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
