import React from "react";
import styles from "../style";
import Button from "./Button";

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    price: "180€",
    period: "",
    description: "Për biznese të reja ose individuale",
    features: [
      "Logo Profesionale",
      "Website i thjeshtë (one-page)",
      "Konfigurim Instagram/Facebook",
      "3 dizajne postimesh",
      "Bio + copywriting",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Package",
    price: "350€",
    period: "",
    description: "Për biznese me aktivitet të rregullt",
    features: [
      "Logo + identitet vizual",
      "Website me 4–5 seksione",
      "SEO bazik",
      "6 dizajne social media",
      "Menaxhim rrjetesh sociale (1 muaj)",
      "Video prezantuese e thjeshtë",
      "Copywriting bio + captions",
      "Dizajn broshure + kartvizitë",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "550€",
    period: "",
    description: "Për marka që duan rritje të plotë & reklamim",
    features: [
      "Logo + mini brandbook",
      "Website profesional me SEO & kontakt",
      "8 dizajne social media + strategji mujore",
      "Menaxhim rrjetesh sociale (1 muaj)",
      "Fotografi profesionale (10 foto)",
      "1 video promo profesionale",
      "Menaxhim reklamash (1 muaj)",
      "Dizajn broshure + kartvizita",
      "Auditim & optimizim profil online",
    ],
    popular: false,
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

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
