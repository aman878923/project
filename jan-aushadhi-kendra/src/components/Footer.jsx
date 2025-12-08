import React from "react";

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#hero" },
        { name: "Services", href: "#medicines" },
        { name: "Benefits", href: "#benefits" },
        { name: "Location", href: "#location" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Generic Medicines", href: "#generic-info" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "FAQs", href: "#generic-info" },
      ],
    },
    {
      title: "Social Links",
      links: [
        { name: "📘 Facebook", href: "#" },
        { name: "🐦 Twitter", href: "#" },
        { name: "📸 Instagram", href: "#" },
        { name: "💼 LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="section-container relative py-16 sm:py-20 lg:py-24 space-y-16">
        {/* Top Section: Brand + About */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                  {t("govProgram")}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Jan Aushadhi Kendra
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              {t("footerDesc")}
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: "✅", label: "WHO Certified" },
                { icon: "📋", label: "FDA Approved" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs font-bold text-slate-300">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-sm font-black text-white uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Middle Section: Contact Info */}
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              icon: "📍",
              title: "Address",
              content: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
              gradient: "from-red-500 to-rose-500",
            },
            {
              icon: "📞",
              title: "Phone",
              content: "+91-98351 23889",
              link: "tel:+919835123889",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: "🕒",
              title: "Hours",
              content: "8:00 AM – 10:00 PM (All Days)",
              gradient: "from-amber-500 to-orange-500",
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600/80 hover:bg-slate-800/60 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}
                >
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                    {info.title}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors break-words"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-slate-200 break-words">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom Section: Copyright & Info */}
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <p className="text-sm font-bold text-slate-300">
              © {currentYear} Jan Aushadhi Kendra. {t("copyright")}
            </p>
            <p className="text-xs text-slate-500 font-medium">{t("pmbjp")}</p>
          </div>
          <div className="flex items-center justify-start sm:justify-end gap-4">
            {[
              { icon: "🔒", label: "Privacy" },
              { icon: "📋", label: "Terms" },
              { icon: "⚖️", label: "Disclaimer" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating CTA Bar */}
      <div className="border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-300 mb-1">
                Need help right now?
              </p>
              <p className="text-xs text-slate-500">
                Available 24/7 for your queries
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <a
                href="tel:+919835123889"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-sm hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>📞</span>
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 font-bold text-sm hover:border-slate-500 hover:text-slate-200 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>📧</span>
                <span>Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Line */}
      <div className="border-t border-slate-700/30 bg-slate-950/50 backdrop-blur">
        <div className="section-container py-4 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Made with <span className="text-red-500">❤️</span> for your health.
            Trusted by thousands of families across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
