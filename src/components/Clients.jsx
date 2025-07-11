import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[150px] min-w-[100px] p-2`}
            style={{ maxWidth: "100%" }}
          >
            <img
              src={client.logo}
              alt="client"
              className="w-full max-w-[120px] sm:max-w-[200px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
