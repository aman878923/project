// src/components/ContactSection.jsx
import React from "react";

const ContactSection = ({ t }) => {
  const contacts = [
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
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
              {t("contact")}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {t("getInTouch")}
            </h2>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            {t("questionsDesc")}
          </p>

          <div className="space-y-3">
            {contacts.map((contact, idx) => (
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
            {t("quickContact")}
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t("name")}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                placeholder={t("yourName")}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                  placeholder={t("yourPhone")}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                  placeholder={t("yourEmail")}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t("message")}
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white resize-none"
                rows="4"
                placeholder={t("yourMessage")}
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t("sendMessage")}
            </button>

            <p className="text-xs text-slate-600 text-center">
              {t("respondTime")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
