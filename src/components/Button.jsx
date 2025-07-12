import React from "react";

const Button = ({ styles }) => {
  const whatsappNumber = "3550673869970"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] inline-block`}
    >
      Get Started
    </a>
  );
};

export default Button;
