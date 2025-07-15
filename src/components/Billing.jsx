import React from "react";
import styles from "../style";
import Button from "./Button";

const categories = [
  {
    id: "social-media",
    name: "Social Media",
    packages: [
      {
        id: "sm-basic",
        name: "Social Start",
        price: "129€",
        period: "",
        description: "Menaxhim bazik i rrjeteve sociale",
        features: [
          "Konfigurim Instagram/Facebook/Tik Tok",
          "4 dizajne Postimesh (në javë)",
          "1 video Reels (në javë)",
          "Bio + copywriting",
        ],
        popular: false,
      },
      {
        id: "sm-pro",
        name: "Engage Pro",
        price: "249€",
        period: "",
        description: "Menaxhim i avancuar për rritje audience",
        features: [
          "Konfigurim Instagram/Facebook/Tik Tok",
          "12 dizajne Postimesh (në javë)",
          "2 video Reels (në javë)",
          "Bio + copywriting",
          "Strategji postimesh",
        ],
        popular: true,
      },
      {
        id: "sm-premium",
        name: "Full Growth",
        price: "349€",
        period: "",
        description: "Menaxhim i plotë & reklamim",
        features: [
          "Konfigurim Instagram/Facebook/Tik Tok",
          "18 dizajne Postimesh (në javë)",
          "3 video Reels (në javë)",

          "Bio + copywriting",
          "Strategji postimesh",
          "Menaxhim rreklamash",
          "Video promo profesionale",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "branding",
    name: "Logo/Branding dhe Website",
    packages: [
      {
        id: "branding-basic",
        name: "Brand Start",
        price: "249€",
        period: "",
        description: "Logo dhe website i thjeshtë",
        features: [
          "Logo Profesionale",
          "Website i thjeshtë (one-page)",
          "Dizajn kartvizitë",
        ],
        popular: false,
      },
      {
        id: "branding-pro",
        name: "Branding Boost",
        price: "399€",
        period: "",
        description: "Identitet vizual & website me seksione",
        features: [
          "Logo + identitet vizual + Google Biznes",
          "Website me 4–5 faqe",
          "Formë Kontakti",
          "SEO bazik",
          "Dizajn broshure + kartvizitë",
        ],
        popular: true,
      },
      {
        id: "branding-premium",
        name: "Brand Identity",
        price: "649€",
        period: "",
        description: "Brandbook & website profesional",
        features: [
          "Logo + mini brandbook",
          "Email Zyrtarë",
          "Website profesional me SEO & kontakt",
          "Auditim & optimizim profil online",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "full-package",
    name: "Social Media + Logo/Branding dhe Website",
    packages: [
      {
        id: "full-basic",
        name: "Starter Combo",
        price: "379€",
        period: "",
        description: "Për fillim të plotë të biznesit",
        features: [
          "Logo Profesionale",
          "Website i thjeshtë",
          "Konfigurim rrjetesh sociale",
          "3 dizajne postimesh (në javë)",
          "1 video Reels (në javë)",
        ],
        popular: false,
      },
      {
        id: "full-pro",
        name: "Growth Combo",
        price: "599€",
        period: "",
        description: "Për biznese me aktivitet të rregullt",
        features: [
          "Logo + identitet vizual",
          "Website me 4–5 seksione",
          "6 dizajne postimesh (në javë)",
          "2 video Reels (në javë)",
        ],
        popular: true,
      },
      {
        id: "full-premium",
        name: "Full Brand Suite",
        price: "849€",
        period: "",
        description: "Për marka që duan rritje të plotë & reklamim",
        features: [
          "Logo + mini brandbook",
          "Website profesional me SEO & kontakt",
          "Menaxhim reklamash (1 muaj)",
          "18 dizajne social media",
          "3 video Reels (në javë)",
          "Fotografi profesionale (10 foto)",
        ],
        popular: false,
      },
    ],
  },
];

const PackageCard = ({ pkg }) => (
  <div
    className={`relative p-8 bg-discount-gradient rounded-[20px] shadow-lg ${
      pkg.popular ? "border-2 border-gradient" : "border border-gray-700"
    } hover:scale-105 transition-transform duration-300 flex flex-col`}
  >
    {pkg.popular && (
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-gradient to-pink-gradient px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md">
        Më e Zgjedhura
      </div>
    )}

    <div className="text-center mb-6">
      <h3 className={`${styles.heading3} mb-2`}>{pkg.name}</h3>
      <div className="flex items-baseline justify-center mb-2">
        <span className="text-5xl font-bold text-white">{pkg.price}</span>
        <span className="text-dimWhite ml-2">{pkg.period}</span>
      </div>
      <p className="text-dimWhite text-sm">{pkg.description}</p>
    </div>

    <ul className="space-y-3 mb-8">
      {pkg.features.map((feature, index) => (
        <li key={index} className="flex items-center text-dimWhite">
          <svg
            className="w-5 h-5 text-secondary mr-3 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>

    <div className="text-center mt-0">
      <button
        className={`
          w-full py-3 rounded-lg font-bold focus:outline-none transition-all duration-300
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700
          text-white shadow-xl
          hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-800
          hover:scale-105
          border-0
          ${pkg.popular ? "ring-4 ring-yellow-400" : ""}
          relative overflow-hidden
        `}
        style={{
          boxShadow: "0 6px 32px 0 rgba(255, 193, 7, 0.35)",
          letterSpacing: "0.08em",
        }}
      >
        <span className="relative z-10 text-lg tracking-wide font-extrabold drop-shadow-lg uppercase">
          Fillo
        </span>
        <span className="absolute inset-0 rounded-lg bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></span>
      </button>
    </div>
  </div>
);

const Billing = () => {
  return (
    <section id="services" className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className="text-center mb-16">
        <h2 className={`${styles.heading2} mb-4`}>
          Zgjidh{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Paketën e Duhur
          </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
          Paketat tona janë krijuar për të mbuluar çdo nevojë të biznesit tuaj:
          nga fillimi i markës deri te prezenca dixhitale dhe rritja me reklama.
        </p>
      </div>

      {categories.map((category, categoryIndex) => (
        <div key={category.id} className="mb-16">
          <div className="text-center mb-12">
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ animationDelay: `${0.6 + categoryIndex * 0.3}s` }}
            >
              {category.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start stagger-children">
            {category.packages.map((pkg, pkgIndex) => (
              <div
                key={pkg.id}
                style={{
                  animationDelay: `${
                    0.8 + categoryIndex * 0.3 + pkgIndex * 0.1
                  }s`,
                }}
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-12">
        <p className="text-dimWhite text-sm mb-4">
          Keni nevojë për një zgjidhje të personalizuar? Na kontaktoni për një
          ofertë të posaçme.
        </p>
        <button className="text-secondary hover:text-white transition-colors duration-300 font-semibold">
          Na Kontakto →
        </button>
      </div>
    </section>
  );
};

export default Billing;
