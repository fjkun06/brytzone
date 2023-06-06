import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
import Image from "next/image";
import { Button } from "@/stories/components/Button";

const Explore = () => {
  return (
    <section className={`${brytzone}_home-explore`}>
      <Heading>Explore your learning area and be like a PRO</Heading>
      <div className="explore_images">
        <Image src="/home/community/man.webp" width={500} height={500} alt="mockup" />
        <Image src="/home/community/phone.webp" width={400} height={350} alt="phone" />
      </div>
      <div className="explore_text">
        <Heading>Explore your learning area and be like a PRO</Heading>
        <p>We offer variety of resources, that will enable you grow to a better version of yourself. Get started today and see what we offer you.........</p>
        <Button category="content">Learn More</Button>
      </div>
    </section>
  );
};

export default Explore;
