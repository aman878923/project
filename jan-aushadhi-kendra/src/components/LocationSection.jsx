// src/components/LocationSection.jsx
import React from "react";

const LocationSection = ({ t }) => {
  const infoItems = [
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
  ];

  return (
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
              {t("visitOurStore")}
            </h2>
          </div>

          <div className="space-y-4">
            {infoItems.map((item, idx) => (
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
            {t("openMaps")}
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
  );
};

export default LocationSection;
