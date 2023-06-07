import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
import Image from "next/image";
import { Button } from "@/stories/components/Button";
import { useTranslations } from "next-intl";

const Explore = () => {
  const exploreT = useTranslations("explore")
  return (
    <section className={`${brytzone}_home-explore`}>
      <Heading>{exploreT("explore1")}</Heading>
      <div className="explore_images">
        <Image
          src="/home/community/man.webp"
          width={500}
          height={500}
          alt="mockup"
        />
        <Image
          src="/home/community/phone.webp"
          width={400}
          height={350}
          alt="phone"
        />
      </div>
      <div className="explore_text">
        <Heading>{exploreT("explore1")}</Heading>
        <p>
          {exploreT('we')}
        </p>
        <Button category="content">{exploreT('learn')}</Button>
      </div>
    </section>
  );
};

export default Explore;
