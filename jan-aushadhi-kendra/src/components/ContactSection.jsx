import React, { useState } from "react";

const ContactSection = ({ t }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    {
      icon: "📞",
      label: "Phone",
      value: "+91-98351 23889",
      link: "tel:+919835123889",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: "📧",
      label: "Email",
      value: "nandlalrg1947@gmail.com",
      link: "mailto:nandlalrg1947@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: "📍",
      label: "Address",
      value: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
      link: "https://www.google.com/maps/search/Gola+Rd,+Ramgarh+Cantonment,+Jharkhand+829122",
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
    },
    {
      icon: "🕒",
      label: "Hours",
      value: "8:00 AM – 10:00 PM (All Days)",
      link: null,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 to-blue-300/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative space-y-16 lg:space-y-0">
        {/* Header */}
        <div className="max-w-2xl space-y-5 lg:mb-0">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("contact")}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
            {t("getInTouch")}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            {t("questionsDesc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Contact Methods */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contacts.map((contact, idx) => (
                <div key={idx} className="group relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-lg transition-opacity duration-300`}
                  />

                  {/* Card */}
                  <div
                    className={`relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${contact.bgGradient} backdrop-blur-xl border border-white/60 hover:border-white/80 shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target={
                          contact.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          contact.link.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="flex gap-4 sm:gap-5"
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md`}
                          >
                            {contact.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                            {contact.label}
                          </p>
                          <p className="text-sm sm:text-base text-slate-900 font-bold break-words group-hover:text-slate-700 transition-colors">
                            {contact.value}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>→</span>
                            <span>Open</span>
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex gap-4 sm:gap-5">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-2xl shadow-md`}
                          >
                            {contact.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                            {contact.label}
                          </p>
                          <p className="text-sm sm:text-base text-slate-900 font-bold break-words">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Info Badges */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                {
                  icon: "✅",
                  text: "24/7 Support",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "⚡",
                  text: "Quick Response",
                  color: "from-blue-500 to-cyan-500",
                },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/60 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {badge.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative group">
            {/* Form Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Form Container */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white to-slate-50 backdrop-blur-xl border border-white/80 shadow-xl group-hover:shadow-2xl transition-all duration-300 h-full">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                {t("quickContact")}
              </h3>
              <p className="text-sm text-slate-600 font-medium mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5">
                    {t("name")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-slate-300"
                    placeholder={t("yourName")}
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2.5">
                      {t("phone")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300 hover:border-slate-300"
                      placeholder={t("yourPhone")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2.5">
                      {t("email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-slate-300"
                      placeholder={t("yourEmail")}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2.5">
                    {t("message")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-slate-300 resize-none"
                    rows="4"
                    placeholder={t("yourMessage")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 ${
                    submitted
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105"
                  }`}
                >
                  {submitted ? (
                    <>
                      <span className="text-xl">✓</span>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xl">📧</span>
                      <span>{t("sendMessage")}</span>
                    </>
                  )}
                </button>

                {/* Response Time Info */}
                <p className="text-xs text-slate-600 text-center font-medium">
                  {t("respondTime")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
