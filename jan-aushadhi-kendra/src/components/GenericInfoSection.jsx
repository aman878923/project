import React, { useState } from "react";

const GenericInfoSection = ({ t, scrollToSection }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqList = [
    {
      q: "Are generic medicines as effective as branded medicines?",
      a: "Yes, absolutely! Generic medicines contain the exact same active ingredient in the same strength. They work identically to branded medicines.",
    },
    {
      q: "Are generic medicines safe?",
      a: "Yes, they are completely safe. Generic medicines are approved by WHO, FDA, and Indian pharmaceutical regulatory bodies (BPPI). They undergo the same strict quality tests.",
    },
    {
      q: "Why do doctors prescribe branded medicines if generics are the same?",
      a: "Many doctors are aware and do prescribe generics. Patients can also ask their doctor or pharmacist for the generic version of any medicine.",
    },
    {
      q: "What if I'm allergic to a branded medicine - will I be allergic to the generic too?",
      a: "If you're allergic to the active ingredient, yes. But generics use the same ingredient. The difference is only in fillers/binders, which are usually similar.",
    },
    {
      q: "How much can I save by using generic medicines?",
      a: "Savings vary, but typically 50-90% per medicine. For a family taking multiple medicines, the monthly savings can be ₹2,000 to ₹10,000+.",
    },
    {
      q: "Can I switch from branded to generic medicine midway through treatment?",
      a: "Yes, you can. Consult your doctor or pharmacist. Since the active ingredient is identical, there's no harm in switching.",
    },
  ];

  const benefitCards = [
    {
      icon: "💰",
      title: "Huge Cost Savings",
      desc: "Save 50-90% on your monthly medicine expenses. Your family budget benefits immediately.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: "⚡",
      title: "Same Effectiveness",
      desc: "Contains identical active ingredients. Works exactly the same way as branded medicines.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      icon: "✅",
      title: "Quality Certified",
      desc: "Approved by WHO, FDA, and BPPI. Meets highest pharmaceutical standards globally.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: "⏱️",
      title: "Fast Relief",
      desc: "Starts working at the same speed. Same strength, same dosage as branded versions.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: "🏥",
      title: "Accessible Healthcare",
      desc: "Makes essential medicines affordable for all families, rich and poor alike.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: "📊",
      title: "Better Compliance",
      desc: "Lower cost means patients can afford full treatment. Better health outcomes overall.",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
    },
  ];

  const whyCheapReasons = [
    {
      icon: "🔬",
      title: "No Research Costs",
      desc: "Branded companies spend billions on research & development. Generic makers skip this, using proven formulas.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: "📺",
      title: "No Advertising",
      desc: "No TV ads, celebrity endorsements, or fancy packaging. Generic makers save on marketing entirely.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: "📦",
      title: "Simple Packaging",
      desc: "Basic packaging and labels. Money is saved here and passed directly to customers.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "🏆",
      title: "Competition",
      desc: "Multiple generic makers produce the same medicine, driving prices down through competition.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="generic-info"
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-300/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 to-blue-300/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative space-y-16 lg:space-y-20">
        {/* Header */}
        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("understandingMedicines")}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
            {t("whatAreGeneric")}
          </h2>
          <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
            {t("genericDesc")}
          </p>
        </div>

        {/* Definition & Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Definition */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200/60 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">📚</span>
                  {t("definition")}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium text-base">
                  {t("definitionText")}
                </p>
                <div className="mt-6 pt-6 border-t border-blue-200/50">
                  <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t("onlyDifference")}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                {
                  icon: "🎯",
                  label: t("sameActiveIngredient"),
                  desc: t("sameActiveIngredientDesc"),
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: "✅",
                  label: t("fdaApproved"),
                  desc: t("fdaApprovedDesc"),
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "💚",
                  label: t("cheaper"),
                  desc: t("cheaperDesc"),
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((point, i) => (
                <div
                  key={i}
                  className={`group p-5 rounded-2xl bg-gradient-to-br ${point.color} bg-opacity-5 border border-current border-opacity-20 hover:border-opacity-40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {point.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 mb-1">
                        {point.label}
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Branded vs Generic */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-lg backdrop-blur-sm h-full flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">⚖️</span>
                {t("brandedVsGeneric")}
              </h3>

              <div className="space-y-6 flex-1">
                {/* Branded */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                    <span className="w-2 h-2 bg-red-600 rounded-full" />
                    Branded
                  </div>
                  <div className="space-y-2">
                    {[
                      t("expensivePackaging"),
                      t("heavyAdvertising"),
                      t("premiumPricing"),
                    ].map((item, i) => (
                      <p
                        key={i}
                        className="text-sm text-slate-700 font-medium flex items-start gap-2"
                      >
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Generic */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    <span className="w-2 h-2 bg-green-600 rounded-full" />
                    Generic
                  </div>
                  <div className="space-y-2">
                    {[
                      t("simplePackaging"),
                      t("minimalAdvertising"),
                      t("affordablePricing"),
                    ].map((item, i) => (
                      <p
                        key={i}
                        className="text-sm text-slate-700 font-medium flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-slate-700 text-center">
                  Same Active Ingredient = Same Effectiveness
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900">
            {t("keyBenefits")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCards.map((benefit, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity duration-300`}
                />
                <div
                  className={`relative h-full p-7 rounded-2xl bg-gradient-to-br ${benefit.bgGradient} border border-white/60 hover:border-white/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4
                    className={`text-lg font-black bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed flex-grow">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Cheap + Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Why Cheap Reasons */}
          <div className="space-y-6">
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900">
              {t("whyCheap")}
            </h3>

            <div className="grid gap-4">
              {whyCheapReasons.map((reason, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}
                    >
                      {reason.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cost Breakdown */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200/60 backdrop-blur-sm h-full">
              <h4 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">📊</span>
                {t("costBreakdown")}
              </h4>

              <div className="space-y-8">
                {/* Branded */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-bold text-slate-900">
                      {t("brandedMedicine")}
                    </span>
                    <span className="text-2xl font-black text-red-600">
                      ₹500
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        {t("medicine")}
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: "10%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹50
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        R&D
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹150
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        Marketing
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹200
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        Profit
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: "20%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹100
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Generic */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-bold text-slate-900">
                      {t("genericMedicine")}
                    </span>
                    <span className="text-2xl font-black text-green-600">
                      ₹50
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        {t("medicine")}
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹40
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        Packaging
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "10%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹5
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        Profit
                      </span>
                      <div className="flex-1 h-2 bg-slate-300 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "10%" }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700 w-10 text-right">
                        ₹5
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-100 border border-green-300">
                  <p className="font-bold text-green-900 text-center">
                    {t("youSave")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900">
            {t("commonQuestions")}
          </h3>

          <div className="space-y-3">
            {faqList.map((faq, idx) => (
              <div key={idx} className="group">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed flex-1">
                      <span className="text-blue-600 font-black mr-2">
                        {t("q")} {idx + 1}.
                      </span>
                      {faq.q}
                    </h4>
                    <span
                      className={`flex-shrink-0 text-2xl transition-transform duration-300 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </button>

                {expandedFaq === idx && (
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-t-0 border-blue-200/60 rounded-b-2xl animate-fadeIn">
                    <p className="text-slate-700 leading-relaxed font-medium">
                      <span className="font-bold text-green-600">
                        {t("ans")}
                      </span>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {t("startSaving")}
              </h3>
              <p className="text-lg text-blue-100 font-medium leading-relaxed">
                {t("startSavingDesc")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919835123889"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span className="text-xl">📞</span>
                <span>{t("callUs")}</span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">📝</span>
                <span>{t("sendMessage")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GenericInfoSection;
