import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Çfarë thonë <br className="sm:block hidden" />
          njerëzit për ne?
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            më poshtë janë disa komente
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-nowrap md:overflow-x-auto gap-6 w-full feedback-contrainer relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
