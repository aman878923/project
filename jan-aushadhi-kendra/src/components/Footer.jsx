// src/components/Footer.jsx
import React from "react";

const Footer = ({ t }) => {
  return (
    <footer className="border-t border-blue-100/30 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="section-container py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Jan Aushadhi Kendra</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t("footerDesc")}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">{t("hours")}</h3>
          <p className="text-slate-400 text-sm">{t("footerHours")}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">{t("contact")}</h3>
          <p className="text-slate-400 text-sm">{t("footerContact")}</p>
        </div>
      </div>
      <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-slate-400">
          <p className="font-medium">{t("copyright")}</p>
          <p className="text-xs">{t("pmbjp")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
