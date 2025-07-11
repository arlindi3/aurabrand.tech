import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 md:mb-0 mb-8">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-[266px] h-[172px] object-contain"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Zgjedhja e duhur për biznese që duan të dallohen. Tek AuraBrand
            bashkojmë kreativitetin, strategjinë dhe teknologjinë për të
            ndërtuar identitetin tënd dixhital nga logoja, te webi, rrjetet
            sociale e deri te prezantimi vizual i markës.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white flex items-center">
          <span className="mr-2 flex items-center">
            {/* Copyright C icon as SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline-block text-white"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="12"
                fill="currentColor"
                fontFamily="Arial"
                fontWeight="bold"
              >
                C
              </text>
            </svg>
          </span>
          2025 AuraBrand. Të gjitha të drejtat e rezervuara.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
