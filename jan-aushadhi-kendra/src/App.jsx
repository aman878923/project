import React, { useState, useEffect } from "react";
import { translations } from "./translations";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GenericInfoSection from "./components/GenericInfoSection";
import BenefitsSection from "./components/BenefitsSection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = (key) => translations[language][key] || key;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-indigo-200/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/40 to-pink-200/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar */}
        <TopBar t={t} />

        {/* Navbar */}
        <Navbar
          t={t}
          language={language}
          setLanguage={setLanguage}
          scrollToSection={scrollToSection}
        />

        {/* Page Sections */}
        <main className="flex-1">
          <HeroSection t={t} scrollToSection={scrollToSection} />
          <AboutSection t={t} />
          <ServicesSection t={t} />
          <GenericInfoSection t={t} scrollToSection={scrollToSection} />
          <BenefitsSection t={t} />
          <LocationSection t={t} />
          <ContactSection t={t} />
        </main>

        {/* Footer */}
        <Footer t={t} />
      </div>

      {/* Floating Help Button */}
      <a
        href="tel:+919835123889"
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-pulse"
      >
        <span className="text-2xl group-hover:scale-125 transition-transform">
          📞
        </span>
      </a>

      {/* Scroll to Top Button */}
      {scrollProgress > 10 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-fadeIn"
        >
          <span className="text-2xl group-hover:scale-125 transition-transform">
            ↑
          </span>
        </button>
      )}

      {/* Global Styles */}
      <style>{`
        * {
          scroll-behavior: smooth;
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #6366f1);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #4f46e5);
        }

        /* Firefox Scrollbar */
        * {
          scrollbar-color: #3b82f6 #f1f5f9;
          scrollbar-width: thin;
        }

        /* Text Selection */
        ::selection {
          background-color: #3b82f6;
          color: white;
        }

        ::-moz-selection {
          background-color: #3b82f6;
          color: white;
        }

        /* Link Styles */
        a {
          color: inherit;
          text-decoration: none;
        }

        /* Form Styles */
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
        }

        /* Animation Keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInDown {
          animation: slideInDown 0.3s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth Transitions */
        * {
          transition-property: background-color, border-color, color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
        }

        /* Button Hover Effects */
        button:hover {
          filter: brightness(1.05);
        }

        button:active {
          filter: brightness(0.95);
        }

        /* Links Hover Effects */
        a:hover {
          filter: brightness(1.05);
        }

        /* Section Container */
        .section-container {
          @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
        }

        /* Gradient Text */
        .gradient-text {
          @apply bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent;
        }

        /* Card Styles */
        .card {
          @apply rounded-2xl border border-white/60 bg-white/95 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300;
        }

        /* Badge Styles */
        .badge {
          @apply inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 backdrop-blur-sm;
        }

        /* Responsive Spacing */
        @media (max-width: 640px) {
          .section-container {
            @apply px-4;
          }
        }

        /* Print Styles */
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
