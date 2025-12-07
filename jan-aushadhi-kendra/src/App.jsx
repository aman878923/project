// src/App.jsx
import React, { useState } from "react";
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

  const t = (key) => translations[language][key] || key;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white font-sans">
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
  );
};

export default App;
