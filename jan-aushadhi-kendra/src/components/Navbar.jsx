// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = ({ t, language, setLanguage, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    [language === "en" ? "Home" : "होम", "hero"],
    [language === "en" ? "About" : "परिचय", "about"],
    [language === "en" ? "Services" : "सेवाएं", "medicines"],
    [language === "en" ? "Generic Info" : "जेनेरिक जानकारी", "generic-info"],
    [language === "en" ? "Why Us" : "क्यों हम", "benefits"],
    [language === "en" ? "Visit" : "विज़िट करें", "location"],
    [language === "en" ? "Contact" : "संपर्क", "contact"],
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
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
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="px-4 py-2 text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 rounded-xl transition-all duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Language Switcher (Desktop) */}
        <div className="hidden md:flex items-center gap-2 mx-4">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-lg font-bold text-sm transition-all ${
              language === "en"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`px-3 py-1.5 rounded-lg font-bold text-sm transition-all ${
              language === "hi"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            HI
          </button>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+919835123889"
          className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          {t("callUs")}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
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
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="block w-full text-left px-5 py-3 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all"
              >
                {label}
              </button>
            ))}

            <div className="flex gap-2 px-4 py-3 border-t border-blue-100/30 mt-2">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                  language === "en"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                  language === "hi"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                हिंदी
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
