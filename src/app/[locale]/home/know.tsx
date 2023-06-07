import React from "react";
import { brytzone } from "./header";
import Image from "next/image";
import Heading from "@/stories/components/heading";

const Know = () => {
  return (
    <section className={`${brytzone}_home-know`}>
      <Heading bordered>Get to know us by chosing a starting point</Heading>
      <section>
        <div className="know_card">
          <div className="know_card-image">
            <Image src="/home/know/img1.png" width={400} height={400} alt="card_img" />
          </div>
          <div className="know_card-text">
            <h3>Our Approach</h3>
            <p>We keep you updated with the most reliable information on Campus.</p>
          </div>
        </div>
        <div className="know_card">
          <div className="know_card-image"></div>
          <div className="know_card-text">
            <h3>Our Approach</h3>
            <p>We keep you updated with the most reliable information on Campus.</p>
          </div>
        </div>
        <div className="know_card">
          <div className="know_card-image">
            <Image src="/home/know/img1.png" width={400} height={400} alt="card_img" />
          </div>
          <div className="know_card-text">
            <h3>Our Approach</h3>
            <p>We keep you updated with the most reliable information on Campus.</p>
          </div>
        </div>
        <div className="know_card">
          <div className="know_card-image"></div>
          <div className="know_card-text">
            <h3>Our Approach</h3>
            <p>We keep you updated with the most reliable information on Campus.</p>
          </div>
        </div>
        <div className="know_card">
          <div className="know_card-image">
            <Image src="/home/know/img1.png" width={400} height={400} alt="card_img" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Know;
