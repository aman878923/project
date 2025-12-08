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
    <header className="sticky top-0 z-50 bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="section-container flex items-center justify-between py-4 sm:py-5">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            💊
          </div>
          <div className="hidden xs:block">
            <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              Jan Aushadhi
            </h1>
            <p className="text-[10px] sm:text-xs text-blue-600 font-bold tracking-wide">
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
              className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-lg transition-all duration-200 relative group"
            >
              {label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/60 backdrop-blur-sm">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-md font-bold text-xs sm:text-sm transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              EN
            </button>
            <div className="w-px h-4 bg-slate-300/40" />
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2.5 py-1 rounded-md font-bold text-xs sm:text-sm transition-all duration-300 ${
                language === "hi"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              HI
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+919835123889"
            className="hidden sm:inline-flex px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="group-hover:scale-110 transition-transform">
              📞
            </span>
            <span className="hidden sm:inline">{t("callUs")}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 hover:bg-blue-100/60 rounded-lg transition-all duration-200 text-slate-700"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-200/60 bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-sm">
          <nav className="section-container py-4 space-y-2">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="block w-full text-left px-4 py-3 text-base font-bold text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 rounded-lg transition-all duration-200 relative group"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </span>
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex gap-3 px-4 py-4 border-t border-slate-200/60 mt-2">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`flex-1 px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                  language === "hi"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Mobile CTA */}
            <a
              href="tel:+919835123889"
              className="block w-full px-4 py-3.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
