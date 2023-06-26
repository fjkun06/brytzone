import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
import Image from "next/image";
import { Button } from "@/stories/components/Button";
import { useTranslations } from "next-intl";

const Explore = () => {
  const exploreT = useTranslations("explore");
  return (
    <section className={`${brytzone}_home-explore`}>
      <Heading>{exploreT("explore1")}</Heading>
      <div className="explore_images">
        <Image src="/home/community/man.webp" width={500} height={500} alt="mockup" />
        <Image src="/home/community/phone.webp" width={400} height={350} alt="phone" />
      </div>
      <div className="explore_text">
        <Heading>{exploreT("explore1")}</Heading>
        <p>{exploreT("we")}</p>
        <Button category="content">{exploreT("learn")}</Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            fill='#0a518b'
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Explore;
