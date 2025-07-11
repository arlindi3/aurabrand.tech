import React, { useState } from "react";
import styles from "../style";

const ContactInfo = ({ icon, title, content, link }) => (
  <div className="flex items-start space-x-4 p-6 bg-discount-gradient rounded-lg hover:scale-105 transition-transform duration-300">
    <div className="text-secondary text-2xl">{icon}</div>
    <div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-dimWhite hover:text-secondary transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-dimWhite">{content}</p>
      )}
    </div>
  </div>
);

const CardDeal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Faleminderit për mesazhin! Do të ju kontaktojmë së shpejti.");
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "info@aurabrand.al",
      link: "mailto:info@aurabrand.al",
    },
    {
      icon: "📱",
      title: "Telefon",
      content: "+355 69 XXX XXXX",
      link: "tel:+35569XXXXXXX",
    },
    {
      icon: "📍",
      title: "Adresa",
      content: "Tiranë, Shqipëri",
      link: null,
    },
    {
      icon: "🕒",
      title: "Orari i Punës",
      content: "Hën - Pre: 9:00 - 18:00",
      link: null,
    },
  ];

  const services = [
    "Web Design",
    "Logo & Branding",
    "Social Media",
    "SEO & Marketing",
    "Fotografi & Video",
    "E-commerce",
    "Tjetër",
  ];

  return (
    <section id="contact" className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`${styles.heading2} mb-4`}>
            Na{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Kontaktoni
            </span>
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
            Jeni gati të filloni projektin tuaj? Na shkruani dhe do t'ju
            përgjigjemi brenda 24 orëve. Konsultimi është falas!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black-gradient rounded-2xl p-8 shadow-lg">
            <h3 className="text-white text-2xl font-bold mb-6">
              Dërgoni një Mesazh
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dimWhite text-sm font-medium mb-2">
                    Emri *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discount-gradient border border-gray-700 rounded-lg text-white placeholder-dimWhite focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                    placeholder="Emri juaj"
                  />
                </div>
                <div>
                  <label className="block text-dimWhite text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discount-gradient border border-gray-700 rounded-lg text-white placeholder-dimWhite focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dimWhite text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-discount-gradient border border-gray-700 rounded-lg text-white placeholder-dimWhite focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                    placeholder="+355 69 XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-dimWhite text-sm font-medium mb-2">
                    Shërbimi
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-discount-gradient border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                  >
                    <option value="">Zgjidhni shërbimin</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-primary"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-dimWhite text-sm font-medium mb-2">
                  Mesazhi *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-discount-gradient border border-gray-700 rounded-lg text-white placeholder-dimWhite focus:outline-none focus:ring-2 focus:ring-secondary transition-colors resize-none"
                  placeholder="Përshkruani projektin tuaj ose çfarë keni nevojë..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 text-white font-bold rounded-lg hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Dërgo Mesazhin
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-6">
                Informacione Kontakti
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <ContactInfo key={index} {...info} />
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-black-gradient rounded-2xl p-8">
              <h4 className="text-white text-xl font-bold mb-4">Na Ndiqni</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-discount-gradient rounded-full flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-discount-gradient rounded-full flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-discount-gradient rounded-full flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-discount-gradient rounded-full flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  🐦
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-gradient to-pink-gradient rounded-2xl p-8 text-center">
              <h4 className="text-white text-xl font-bold mb-2">
                Konsultim Falas
              </h4>
              <p className="text-white/90 mb-4">
                30 minuta konsultim pa pagesë për projektin tuaj
              </p>
              <button className="bg-white text-primary font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Rezervo Takimin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
