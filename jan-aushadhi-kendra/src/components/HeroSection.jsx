import React from "react";

const HeroSection = ({ t, scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 pt-12 sm:pt-20 lg:pt-32 pb-16 sm:pb-28 lg:pb-40"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/15 to-indigo-300/10 rounded-full blur-3xl -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/15 to-blue-300/10 rounded-full blur-3xl -ml-64 -mb-64 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-300/10 to-blue-300/5 rounded-full blur-3xl" />

      <div className="section-container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("trustedHealthcare")}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-tight">
              {t("qualityMedicines")}
              <span className="block mt-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                {t("unbeatable")}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-medium">
            {t("heroDesc")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="tel:+919835123889"
              className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-center relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative text-lg group-hover:scale-125 transition-transform duration-300">
                📞
              </span>
              <span className="relative font-semibold">{t("callNow")}</span>
            </a>
            <button
              onClick={() => scrollToSection("location")}
              className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 hover:-translate-y-1 active:bg-blue-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-indigo-600 hover:text-indigo-600 bg-white/30"
            >
              <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                📍
              </span>
              <span>{t("findUs")}</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-4 pt-8">
            {[
              {
                label: t("savings"),
                value: t("savingsPct"),
                icon: "💰",
                color: "from-orange-500",
              },
              {
                label: t("status"),
                value: t("statusOpen"),
                icon: "🟢",
                color: "from-emerald-500",
              },
              {
                label: t("hours"),
                value: t("hours24"),
                icon: "🕐",
                color: "from-blue-500",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-md hover:border-blue-300/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </span>
                </div>
                <p
                  className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.color} to-indigo-500 bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Store Info Card */}
        <div className="relative h-fit lg:sticky lg:top-24">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-300" />

          <div className="relative bg-gradient-to-br from-white/85 to-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 sm:p-10 space-y-6 group">
            {/* Header */}
            <div className="space-y-3 pb-6 border-b border-blue-100/50">
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t("storeInfo")}
              </h3>
              <p className="text-sm text-slate-600 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                {t("govCertified")}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {[
                { icon: "📍", label: t("address"), value: t("addressValue") },
                {
                  icon: "📞",
                  label: t("contactLabel"),
                  value: t("contactValue"),
                },
                { icon: "📧", label: t("email"), value: t("emailValue") },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 group/item hover:pl-1 transition-all duration-300"
                >
                  <span className="text-3xl flex-shrink-0 group-hover/item:scale-125 group-hover/item:rotate-6 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-700 font-semibold break-words group-hover/item:text-slate-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Badge */}
            <div className="bg-gradient-to-br from-emerald-50/90 to-green-50/80 rounded-2xl p-6 border border-emerald-200/80 backdrop-blur-sm hover:from-emerald-100/90 hover:to-green-100/80 transition-all duration-300">
              <p className="text-xs font-bold text-emerald-700 mb-3 uppercase tracking-widest">
                {t("status")}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-slate-900 text-lg">
                    {t("openNow")}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">
                    {t("openTime")}
                  </p>
                </div>
                <span className="text-3xl animate-pulse">🟢</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-4 pt-3 border-t border-blue-100/40">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {t("weProvide")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  t("genericMedicines"),
                  t("otcProducts"),
                  t("surgicalItems"),
                  t("wellness"),
                ].map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 px-3 py-3 rounded-xl font-bold text-center hover:from-blue-200 hover:to-indigo-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default border border-blue-200/60"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
