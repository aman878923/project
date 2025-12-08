import React from "react";

const LocationSection = ({ t }) => {
  const infoItems = [
    {
      icon: "📍",
      label: "Address",
      value: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
      action: {
        text: "Open in Maps",
        url: "https://www.google.com/maps/search/Gola+Rd,+Ramgarh+Cantonment,+Jharkhand+829122",
      },
    },
    {
      icon: "🕒",
      label: "Hours",
      value: "8:00 AM – 10:00 PM (All Days)",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91-98351 23889",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      action: {
        text: "Call Now",
        url: "tel:+919835123889",
      },
    },
    {
      icon: "📧",
      label: "Email",
      value: "nandlalrg1947@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      action: {
        text: "Send Email",
        url: "mailto:nandlalrg1947@gmail.com",
      },
    },
  ];

  return (
    <section
      id="location"
      className="relative py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 to-blue-300/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative space-y-12 lg:space-y-0">
        {/* Header */}
        <div className="mb-12 lg:mb-0 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
              {t("visitOurStore")}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
            {t("location")}
          </h2>
          <p className="text-lg text-slate-700 font-medium">
            We're conveniently located and easily accessible. Visit us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {infoItems.map((item, idx) => (
                <div key={idx} className="group relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-lg transition-opacity duration-300`}
                  />

                  {/* Card */}
                  <div
                    className={`relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl border border-white/60 hover:border-white/80 shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex gap-4 sm:gap-5">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-base text-slate-900 font-bold break-words mb-3">
                          {item.value}
                        </p>

                        {/* Action Button */}
                        {item.action && (
                          <a
                            href={item.action.url}
                            target={
                              item.action.url.startsWith("http")
                                ? "_blank"
                                : "_self"
                            }
                            rel={
                              item.action.url.startsWith("http")
                                ? "noreferrer"
                                : undefined
                            }
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${item.gradient} text-white font-bold text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg active:scale-95`}
                          >
                            <span>→</span>
                            <span>{item.action.text}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: "✅",
                  text: "Government Approved",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "🛡️",
                  text: "Quality Certified",
                  color: "from-blue-500 to-cyan-500",
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/60 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{info.icon}</span>
                    <span className="text-sm font-bold text-slate-700">
                      {info.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative h-72 sm:h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden group">
            {/* Map Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Map Container */}
            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/60 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 bg-slate-200">
              <iframe
                title="Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2724284789797!2d85.5148444!3d23.630412800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f394ee1ba44b%3A0x9797b543219923bf!2sPradhan%20Mantri%20Jan%20Aushadhi%20Kendra!5e0!3m2!1sen!2sin!4v1764752466985!5m2!1sen!2sin"
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "none" }}
              ></iframe>

              {/* Map Overlay Label */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="text-lg">📍</span>
                Jan Aushadhi Kendra
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-slate-200/60">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://www.google.com/maps/search/Gola+Rd,+Ramgarh+Cantonment,+Jharkhand+829122"
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                📍
              </span>
              <span className="text-lg">{t("openMaps")}</span>
            </a>

            <a
              href="tel:+919835123889"
              className="group px-8 py-6 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold text-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                📞
              </span>
              <span className="text-lg">Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
