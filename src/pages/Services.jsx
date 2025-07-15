import React from "react";
import { Business, Navbar, Footer } from "../components";
import styles from "../style";

const Services = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
