import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  logoIllyrian,
  logoOrlan,
  logoFroler,
  illyrianIcon,
  frolerIcon,
  orlanIcon,
} from "../assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "business", title: "Shërbimet" },
  { id: "services", title: "Paketat" },
  { id: "clients", title: "Klientët Tanë" },
  { id: "contact", title: "Kontakt" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-2",
    content:
      "Shërbim i shpejtë, kreativ dhe shumë bashkëpunues. I rekomandoj për çdo biznes që kërkon seriozitet!",
    name: "Olgert Rakipllari",
    title: "Owner, CEO Froler",
    img: logoFroler,
  },
  {
    id: "feedback-1",
    content:
      "Faleminderit AuraBrand për webin dhe identitetin vizual. Na ndihmoi të dukemi profesionalë që në ditën e parë!",
    name: "Arlind Drabo",
    title: "CEO Illyrian Trails",
    img: logoIllyrian,
  },
  {
    id: "feedback-3",
    content:
      "Faleminderit ekipit të AuraBrand! Logoja dhe dizajnet për rrjetet sociale janë fiks ajo që kishim ëndërruar. Webi ynë duket elegant dhe profesional – klientët tanë e kanë vënë re menjëherë ndryshimin!",
    name: "Luan Drabo",
    title: "Owner Orlan Shopping",
    img: logoOrlan,
  },
];

export const footerLinks = [
  {
    title: "Lidhje të Dobishme",
    links: [
      {
        name: "Përmbajtja",
        link: "https://www.aurabrand.al/content/",
      },
      {
        name: "Si Funksionon",
        link: "https://www.aurabrand.al/how-it-works/",
      },
      {
        name: "Krijo",
        link: "https://www.aurabrand.al/create/",
      },
      {
        name: "Eksploro",
        link: "https://www.aurabrand.al/explore/",
      },
      {
        name: "Termat & Shërbimet",
        link: "https://www.aurabrand.al/terms-and-services/",
      },
    ],
  },
  {
    title: "Komuniteti",
    links: [
      {
        name: "Qendra e Ndihmës",
        link: "https://www.aurabrand.al/help-center/",
      },
      {
        name: "Partnerët",
        link: "https://www.aurabrand.al/partners/",
      },
      {
        name: "Sugjerime",
        link: "https://www.aurabrand.al/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.aurabrand.al/blog/",
      },
      {
        name: "Newsletter",
        link: "https://www.aurabrand.al/newsletters/",
      },
    ],
  },
  {
    title: "Partneri",
    links: [
      {
        name: "Partnerët Tanë",
        link: "https://www.aurabrand.al/our-partner/",
      },
      {
        name: "Bëhu Partner",
        link: "https://www.aurabrand.al/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/aura.brand.studio/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: frolerIcon,
  },
  {
    id: "client-2",
    logo: illyrianIcon,
  },
  {
    id: "client-3",
    logo: orlanIcon,
  },
];
