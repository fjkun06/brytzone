import React from "react";
import { brytzone } from "./header";
import { Button } from "@/stories/components/Button";
import Heading from "@/stories/components/heading";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Community = () => {
  const communityT = useTranslations("community");
  return (
    <section className={`${brytzone}_home-community`}>
      <div className="">
        <Image
          src="/home/community/mockup.webp"
          width={800}
          height={800}
          alt="mockup"
        />
      </div>
      <div className="">
        <Heading>{communityT("heading")}</Heading>
        <p>
          {communityT('sign')}
        </p>
        <Button category="content">{communityT('joinus')}</Button>
      </div>
    </section>
  );
};

export default Community;
