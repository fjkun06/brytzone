import React from "react";
import { brytzone } from "./header";
import Image from "next/image";

const Know = () => {
  return (
    <section className={`${brytzone}_home-know`}>
      <div className="know_card">
        <div className="know_card-image">
          <Image src="/home/know/img1.png" width={400} height={400} alt="card_img" />
        </div>
        <div className="know_card-text">text</div>
      </div>
    </section>
  );
};

export default Know;
