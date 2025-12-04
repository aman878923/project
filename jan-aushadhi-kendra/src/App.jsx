import React, { useState } from "react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Top Bar - Modern Blue Theme */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white text-xs sm:text-sm shadow-md">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 py-3.5">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25 text-[10px] font-bold backdrop-blur">
              ✓
            </span>
            <span className="font-medium">
              Premium Generic Medicines - Your Trust, Our Priority
            </span>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="tel:+919835123889"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              📞 +91-98351 23889
            </a>
            <span className="hidden sm:inline font-medium">
              🕒 24/7 Available
            </span>
          </div>
        </div>
      </div>

      {/* Navbar - Sleek Modern Design */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-blue-100/30 shadow-sm">
        <div className="section-container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-all">
              Rx
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900">
                Jan Aushadhi
              </h1>
              <p className="text-[9px] text-blue-600 font-semibold">
                PMBJP Certified
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {[
              ["Home", "hero"],
              ["About", "about"],
              ["Services", "medicines"],
              ["Why Us", "benefits"],
              ["Visit", "location"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+919835123889"
            className="hidden sm:inline-flex px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Call Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-slate-700"
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
          <div className="lg:hidden border-t border-blue-100/30 bg-white/98 backdrop-blur">
            <nav className="section-container py-3 space-y-1">
              {[
                ["Home", "hero"],
                ["About", "about"],
                ["Services", "medicines"],
                ["Why Us", "benefits"],
                ["Visit", "location"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium text-sm"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Modern Gradient */}
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
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
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
