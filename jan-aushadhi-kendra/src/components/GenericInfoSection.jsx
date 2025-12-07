// src/components/GenericInfoSection.jsx
import React from "react";

const GenericInfoSection = ({ t, scrollToSection }) => {
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
      icon: "💸",
      title: "Huge Cost Savings",
      desc: "Save 50-90% on your monthly medicine expenses. Your family budget benefits immediately.",
    },
    {
      icon: "🏥",
      title: "Same Effectiveness",
      desc: "Contains identical active ingredients. Works exactly the same way as branded medicines.",
    },
    {
      icon: "✅",
      title: "Quality Certified",
      desc: "Approved by WHO, FDA, and BPPI. Meets highest pharmaceutical standards globally.",
    },
    {
      icon: "⏱️",
      title: "Fast Relief",
      desc: "Starts working at the same speed. Same strength, same dosage as branded versions.",
    },
    {
      icon: "🌍",
      title: "Accessible Healthcare",
      desc: "Makes essential medicines affordable for all families, rich and poor alike.",
    },
    {
      icon: "📊",
      title: "Better Compliance",
      desc: "Lower cost means patients can afford full treatment. Better health outcomes overall.",
    },
  ];

  return (
    <section
      id="generic-info"
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="section-container space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
            {t("understandingMedicines")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {t("whatAreGeneric")}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("genericDesc")}
          </p>
        </div>

        {/* Main Definition Card */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t("definition")}
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {t("definitionText")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                <span className="text-3xl flex-shrink-0">🎯</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {t("sameActiveIngredient")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("sameActiveIngredientDesc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                <span className="text-3xl flex-shrink-0">✅</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {t("fdaApproved")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("fdaApprovedDesc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                <span className="text-3xl flex-shrink-0">💰</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {t("cheaper")}
                  </h4>
                  <p className="text-sm text-slate-600">{t("cheaperDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Branded vs Generic Card */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
            <div className="relative bg-white rounded-2xl border-2 border-blue-100 shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {t("brandedVsGeneric")}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-lg">
                      🏷️
                    </div>
                    <h4 className="font-bold text-slate-900">{t("branded")}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 ml-3">
                    <li>{t("expensivePackaging")}</li>
                    <li>{t("heavyAdvertising")}</li>
                    <li>{t("premiumPricing")}</li>
                    <li>{t("sameIngredient")}</li>
                  </ul>
                </div>

                <div className="border-t-2 border-blue-100 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                      💚
                    </div>
                    <h4 className="font-bold text-slate-900">{t("generic")}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 ml-3">
                    <li>{t("simplePackaging")}</li>
                    <li>{t("minimalAdvertising")}</li>
                    <li>{t("affordablePricing")}</li>
                    <li>{t("sameIngredient")}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  {t("onlyDifference")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {t("keyBenefits")}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCards.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why are they cheaper + cost breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              {t("whyCheap")}
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">1️⃣</span> {t("noResearch")}
                </h4>
                <p className="text-sm text-slate-700">{t("noResearchDesc")}</p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">2️⃣</span> {t("noAdvertising")}
                </h4>
                <p className="text-sm text-slate-700">
                  {t("noAdvertisingDesc")}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">3️⃣</span>{" "}
                  {t("simplePackagingTitle")}
                </h4>
                <p className="text-sm text-slate-700">
                  {t("simplePackagingDesc")}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">4️⃣</span> {t("competition")}
                </h4>
                <p className="text-sm text-slate-700">{t("competitionDesc")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">
                {t("costBreakdown")}
              </h4>

              <div className="space-y-4">
                {/* Branded cost */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">
                      {t("brandedMedicine")}
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                      ₹500
                    </span>
                  </div>
                  <div className="w-full bg-slate-300 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full w-full flex items-center justify-end pr-2">
                      <span className="text-xs text-white font-bold">100%</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 mt-2 space-y-1">
                    <p>- {t("medicine")}: ₹50</p>
                    <p>- {t("research")}: ₹150</p>
                    <p>- {t("marketing")}: ₹200</p>
                    <p>- {t("profit")}: ₹100</p>
                  </div>
                </div>

                {/* Generic cost */}
                <div className="border-t-2 border-blue-200 pt-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">
                        {t("genericMedicine")}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        ₹50
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-[10%]" />
                    </div>
                    <div className="text-xs text-slate-600 mt-2 space-y-1">
                      <p>- {t("medicine")}: ₹40</p>
                      <p>- packaging: ₹5</p>
                      <p>- {t("profit")}: ₹5</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-100 border border-green-300">
                <p className="text-sm font-bold text-green-800">
                  {t("youSave")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">
            {t("commonQuestions")}
          </h3>

          <div className="grid gap-6">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">
                    {t("q")}
                  </span>
                  {faq.q}
                </h4>
                <p className="text-slate-700 leading-relaxed pl-8 text-base">
                  <span className="font-bold text-green-600">{t("ans")}</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12 text-white shadow-2xl">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold">
              {t("startSaving")}
            </h3>
            <p className="text-lg opacity-90">{t("startSavingDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="tel:+919835123889"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                📞 {t("callUs")}
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                📝 {t("sendMessage")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericInfoSection;
