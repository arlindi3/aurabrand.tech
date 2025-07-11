import React from "react";
import styles from "../style";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    icon: "🌐",
    description:
      "Krijojmë website moderne, responsive dhe të shpejtë që përfaqësojnë markën tuaj në mënyrën më të mirë.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Modern UI/UX",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Logo & Branding",
    icon: "🎨",
    description:
      "Ndërtojmë identitetin vizual të markës suaj me logo profesionale dhe guideline të plota.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Social Media Management",
    icon: "📱",
    description:
      "Menaxhojmë rrjetet sociale për të rritur prezencën tuaj online dhe angazhimin me audiencën.",
    features: [
      "Content Creation",
      "Post Scheduling",
      "Analytics",
      "Community Management",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Fotografim & Video",
    icon: "📷",
    description:
      "Shërbime profesionale fotografimi dhe video production për përmbajtje cilësore.",
    features: [
      "Product Photography",
      "Video Production",
      "Editing",
      "Social Media Content",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "SEO & Digital Marketing",
    icon: "🔍",
    description:
      "Optimizojmë website-in tuaj për motorët e kërkimit dhe krijojmë strategji marketingu efektive.",
    features: [
      "SEO Optimization",
      "Google Ads",
      "Content Marketing",
      "Analytics",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    icon: "🛒",
    description:
      "Ndërtojmë dyqane online të plota me sisteme pageash dhe menaxhimi produktesh.",
    features: [
      "Online Store",
      "Payment Gateway",
      "Inventory Management",
      "Mobile Optimized",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

const ServiceCard = ({ service }) => (
  <div className="group bg-discount-gradient rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-secondary/50">
    {/* Icon and Title */}
    <div className="flex items-center mb-6">
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {service.icon}
      </div>
      <h3 className="text-white text-xl font-bold">{service.title}</h3>
    </div>

    {/* Description */}
    <p className="text-dimWhite text-sm leading-relaxed mb-6">
      {service.description}
    </p>

    {/* Features */}
    <div className="space-y-2">
      {service.features.map((feature, index) => (
        <div key={index} className="flex items-center text-dimWhite text-sm">
          <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
          {feature}
        </div>
      ))}
    </div>

    {/* Hover effect overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
    ></div>
  </div>
);

const Business = () => (
  <section id="business" className={`${styles.paddingY} ${styles.paddingX}`}>
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className={`${styles.heading2} mb-6`}>
          Shërbimet{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Profesionale
          </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mx-auto`}>
          Ofrojmë një gamë të plotë shërbimesh dixhitale për të ndërtuar dhe
          rritur prezencën online të biznesit tuaj. Nga dizajni deri te
          marketingu, ne kemi zgjidhjen e duhur për ju.
        </p>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-white text-xl font-bold mb-2">
          Gati për të filluar projektin tuaj?
        </h3>
        <p className="text-dimWhite text-sm mb-4 max-w-md mx-auto">
          Bashkojuni bizneseve që kanë zgjedhur shërbimet tona.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 text-white font-bold rounded-lg hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Konsultim Falas
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">50+</div>
          <div className="text-dimWhite">Projekte të Realizuara</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">30+</div>
          <div className="text-dimWhite">Klientë të Kënaqur</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">24/7</div>
          <div className="text-dimWhite">Mbështetje</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">100%</div>
          <div className="text-dimWhite">Kënaqësi</div>
        </div>
      </div>
    </div>
  </section>
);

export default Business;
