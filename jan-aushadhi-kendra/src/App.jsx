import React, { useState } from "react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white font-sans">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-700 text-white text-xs sm:text-sm shadow-lg">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 py-4">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-[12px] font-bold backdrop-blur shadow">
              ✓
            </span>
            <span className="font-semibold tracking-wide">
              Premium Generic Medicines - Your Trust, Our Priority
            </span>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="tel:+919835123889"
              className="hover:text-blue-200 transition-colors font-semibold"
            >
              📞 +91-98351 23889
            </a>
            <span className="hidden sm:inline font-semibold">
              🕒 24/7 Available
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-blue-100/30 shadow-lg">
        <div className="section-container flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-700 text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all">
              Rx
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold text-slate-900">
                Jan Aushadhi
              </h1>
              <p className="text-[10px] text-blue-700 font-semibold">
                PMBJP Certified
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              ["Home", "hero"],
              ["About", "about"],
              ["Services", "medicines"],
              ["Generic Info", "generic-info"],
              ["Why Us", "benefits"],
              ["Visit", "location"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 rounded-xl transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+919835123889"
            className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Call Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-blue-100 rounded-xl transition-colors"
          >
            <svg
              className="w-7 h-7 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-blue-100/30 bg-white/98 backdrop-blur shadow-lg">
            <nav className="section-container py-4 space-y-2">
              {[
                ["Home", "hero"],
                ["About", "about"],
                ["Services", "medicines"],
                ["Generic Info", "generic-info"],
                ["Why Us", "benefits"],
                ["Visit", "location"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-5 py-3 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1">
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
                  ✨ Trusted Healthcare
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                  Quality Medicines at
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Unbeatable Prices
                  </span>
                </h1>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed max-w-lg font-medium">
                Save up to 90% on your medicines through India's official{" "}
                <span className="text-blue-600 font-bold">PMBJP</span> program.
                Same quality, guaranteed safety, affordable for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+919835123889"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-center"
                >
                  📞 Call Now
                </a>
                <button
                  onClick={() => scrollToSection("location")}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  📍 Find Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    Savings
                  </p>
                  <p className="text-2xl font-bold text-blue-600">50-90%</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    Status
                  </p>
                  <p className="text-2xl font-bold text-blue-600">🟢 Open</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    Hours
                  </p>
                  <p className="text-2xl font-bold text-blue-600">24/7</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Modern Card */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
              <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />

              <div className="relative bg-white/70 backdrop-blur-xl border border-blue-100/50 rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="space-y-3 pb-6 border-b border-blue-100/30">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Store Info
                  </h3>
                  <p className="text-sm text-slate-600">
                    Government Certified Pharmacy
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        Address
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        Gola Rd, Ramgarh Cantonment, Jharkhand 829122
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        Contact
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        +91-98351 23889
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📧</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        Email
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        nandlalrg1947@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200/50">
                  <p className="text-xs font-bold text-emerald-700 mb-2">
                    STATUS
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">Open Now</p>
                      <p className="text-xs text-slate-600">
                        8:00 AM - 10:00 PM
                      </p>
                    </div>
                    <span className="text-lg">🟢</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    We Provide
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      Generic Medicines
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      OTC Products
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      Surgical Items
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      Wellness
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  About Us
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  Affordable Healthcare for All
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Jan Aushadhi Kendra is a{" "}
                  <span className="text-blue-600 font-bold">
                    government-supported pharmacy
                  </span>{" "}
                  under the Pradhan Mantri Bhartiya Janaushadhi Pariyojana,
                  making quality generic medicines accessible to everyone.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Generic medicines have the same quality, safety, and efficacy
                  as branded drugs but cost 50-90% less. We ensure every family
                  gets essential medicines without financial burden.
                </p>
              </div>

              <div className="text-sm text-slate-600 italic font-medium pt-4 border-t border-blue-100/50">
                *Savings calculated against branded MRP
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">💰</p>
                <h3 className="font-bold text-slate-900 mb-2">Affordable</h3>
                <p className="text-sm text-slate-700">
                  50-90% lower prices vs branded medicines
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">✅</p>
                <h3 className="font-bold text-slate-900 mb-2">
                  Quality Assured
                </h3>
                <p className="text-sm text-slate-700">
                  Certified by BPPI with strict standards
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">📦</p>
                <h3 className="font-bold text-slate-900 mb-2">Wide Range</h3>
                <p className="text-sm text-slate-700">
                  Chronic, acute, OTC & wellness products
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">❤️</p>
                <h3 className="font-bold text-slate-900 mb-2">For Everyone</h3>
                <p className="text-sm text-slate-700">
                  Serving all ages with care & expertise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="medicines"
          className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white"
        >
          <div className="section-container space-y-16">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                Services
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
                What We Offer
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "💊",
                  title: "Generic Medicines",
                  desc: "High-quality branded alternatives",
                  items: ["Cardiac & Diabetic", "Antibiotics", "Pain Relief"],
                },
                {
                  icon: "🛒",
                  title: "OTC & Wellness",
                  desc: "Daily healthcare essentials",
                  items: ["Fever & Cold", "Vitamins", "Skin Care"],
                },
                {
                  icon: "⚕️",
                  title: "Surgical Items",
                  desc: "Medical home-care products",
                  items: ["Syringes", "Bandages", "Masks"],
                },
                {
                  icon: "👨‍⚕️",
                  title: "Patient Support",
                  desc: "Expert medicine guidance",
                  items: ["Counselling", "Dosage Help", "Alternatives"],
                },
                {
                  icon: "📋",
                  title: "Chronic Care",
                  desc: "Long-term patient support",
                  items: ["Monthly Refills", "Bulk Orders", "Records"],
                },
                {
                  icon: "🚚",
                  title: "Special Orders",
                  desc: "Custom medicine sourcing",
                  items: ["On-Demand", "Quick Delivery", "Support"],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-white border border-blue-100/30 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <p className="text-3xl mb-4">{service.icon}</p>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 flex items-center gap-2"
                      >
                        <span className="text-blue-600 font-bold">•</span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✨ GENERIC MEDICINES EDUCATION SECTION ✨ */}
        <section
          id="generic-info"
          className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white"
        >
          <div className="section-container space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-3xl">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                Understanding Medicines
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                What are Generic Medicines?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Generic medicines are affordable, high-quality alternatives to
                branded medicines. Learn why they're equally safe and effective.
              </p>
            </div>

            {/* Main Definition Card */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Definition
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Generic medicines are pharmaceutical drugs produced and
                    distributed without brand names. They contain the
                    <span className="font-bold text-blue-600">
                      {" "}
                      exact same active ingredient
                    </span>
                    , strength, and dosage as branded medicines but are sold at
                    significantly lower prices.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">🎯</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        Same Active Ingredient
                      </h4>
                      <p className="text-sm text-slate-600">
                        Same chemical composition as branded drugs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        FDA & WHO Approved
                      </h4>
                      <p className="text-sm text-slate-600">
                        Same quality standards as branded medicines
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">💰</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        50-90% Cheaper
                      </h4>
                      <p className="text-sm text-slate-600">
                        No marketing or advertising costs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
                <div className="relative bg-white rounded-2xl border-2 border-blue-100 shadow-2xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Branded vs Generic
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-lg">
                          🏷️
                        </div>
                        <h4 className="font-bold text-slate-900">Branded</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 ml-13">
                        <li>✓ Expensive packaging</li>
                        <li>✓ Heavy advertising costs</li>
                        <li>✓ Premium pricing</li>
                        <li>✓ Same active ingredient</li>
                      </ul>
                    </div>

                    <div className="border-t-2 border-blue-100 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                          💚
                        </div>
                        <h4 className="font-bold text-slate-900">Generic</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 ml-13">
                        <li>✓ Simple, basic packaging</li>
                        <li>✓ Minimal advertising</li>
                        <li>✓ Affordable pricing</li>
                        <li>✓ Same active ingredient</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      💡 The only difference is the price, not the quality!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Key Benefits of Generic Medicines
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
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
                ].map((benefit, idx) => (
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

            {/* Why Are They Cheaper */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  Why Are Generic Medicines So Cheap?
                </h3>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">1️⃣</span> No Research Costs
                    </h4>
                    <p className="text-sm text-slate-700">
                      Branded companies spend billions on research &
                      development. Generic makers skip this, using proven
                      formulas.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">2️⃣</span> No Advertising
                    </h4>
                    <p className="text-sm text-slate-700">
                      No TV ads, celebrity endorsements, or fancy packaging.
                      Generic makers save on marketing entirely.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">3️⃣</span> Simple Packaging
                    </h4>
                    <p className="text-sm text-slate-700">
                      Basic packaging and labels. Money is saved here and passed
                      directly to customers.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">4️⃣</span> Competition
                    </h4>
                    <p className="text-sm text-slate-700">
                      Multiple generic makers produce the same medicine, driving
                      prices down through competition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">
                    Cost Breakdown
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">
                          Branded Medicine
                        </span>
                        <span className="text-lg font-bold text-slate-900">
                          ₹500
                        </span>
                      </div>
                      <div className="w-full bg-slate-300 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full w-full flex items-center justify-end pr-2">
                          <span className="text-xs text-white font-bold">
                            100%
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 mt-2 space-y-1">
                        <p>- Medicine: ₹50</p>
                        <p>- Research: ₹150</p>
                        <p>- Marketing: ₹200</p>
                        <p>- Profit: ₹100</p>
                      </div>
                    </div>

                    <div className="border-t-2 border-blue-200 pt-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            Generic Medicine
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            ₹50
                          </span>
                        </div>
                        <div className="w-full bg-slate-300 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full w-[10%]" />
                        </div>
                        <div className="text-xs text-slate-600 mt-2 space-y-1">
                          <p>- Medicine: ₹40</p>
                          <p>- Packaging: ₹5</p>
                          <p>- Profit: ₹5</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-green-100 border border-green-300">
                    <p className="text-sm font-bold text-green-800">
                      🎉 You save ₹450 per medicine with generics!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                Common Questions About Generic Medicines
              </h3>

              <div className="grid gap-6">
                {[
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
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">
                        Q.
                      </span>
                      {faq.q}
                    </h4>
                    <p className="text-slate-700 leading-relaxed pl-8 text-base">
                      <span className="font-bold text-green-600">Ans: </span>
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
                  Start Saving Today!
                </h3>
                <p className="text-lg opacity-90">
                  Switch to generic medicines and save 50-90% on your monthly
                  medicine expenses. Your health, your choice, your savings!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <a
                    href="tel:+919835123889"
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    📞 Call Us Now
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300"
                  >
                    📝 Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 sm:py-28 bg-white">
          <div className="section-container space-y-16">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Real Benefits for You
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
              {[
                {
                  title: "💰 Save Money",
                  desc: "Cut medical expenses by up to 90%",
                },
                {
                  title: "📋 Transparent",
                  desc: "Clear billing, full medicine details",
                },
                {
                  title: "🏛️ Govt Backed",
                  desc: "Official PMBJP initiative by India",
                },
                {
                  title: "😊 Friendly",
                  desc: "Warm, respectful expert service",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <h3 className="font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          id="location"
          className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white"
        >
          <div className="section-container grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  Location
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  Visit Our Store
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
                  },
                  {
                    icon: "🕒",
                    label: "Hours",
                    value: "8:00 AM – 10:00 PM (All Days)",
                  },
                  { icon: "📞", label: "Phone", value: "+91-98351 23889" },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "nandlalrg1947@gmail.com",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="h-72 lg:h-96 rounded-xl overflow-hidden border-2 border-blue-100/50 shadow-lg">
              <iframe
                title="Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2724284789797!2d85.5148444!3d23.630412800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f394ee1ba44b%3A0x9797b543219923bf!2sPradhan%20Mantri%20Jan%20Aushadhi%20Kendra!5e0!3m2!1sen!2sin!4v1764752466985!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-28 bg-white">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  Contact
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  Get in Touch
                </h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Questions about medicines or services? We're here 24/7 to help
                with friendly, expert guidance.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91-98351 23889",
                    link: "tel:+919835123889",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "nandlalrg1947@gmail.com",
                    link: "mailto:nandlalrg1947@gmail.com",
                  },
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.link}
                    className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {contact.label}
                      </p>
                      <p className="text-sm text-blue-600 font-semibold mt-1">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Contact
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white resize-none"
                    rows="4"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>

                <p className="text-xs text-slate-600 text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100/30 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="section-container py-12 grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Jan Aushadhi Kendra</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Government-certified pharmacy providing affordable quality
              medicines.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Hours</h3>
            <p className="text-slate-400 text-sm">
              Mon - Sun: 8:00 AM – 10:00 PM
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-slate-400 text-sm">📞 +91-98351 23889</p>
          </div>
        </div>
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur">
          <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-slate-400">
            <p className="font-medium">
              © {new Date().getFullYear()} Jan Aushadhi Kendra. All Rights
              Reserved.
            </p>
            <p className="text-xs">PMBJP | Government of India Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
