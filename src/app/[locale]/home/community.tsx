import React from "react";
import { brytzone } from "./header";
import { Button } from "@/stories/components/Button";
import Heading from "@/stories/components/heading";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Element } from "react-scroll";
const Community = ({forwardedRef}:{forwardedRef:any}) => {
  const communityT = useTranslations("community");
  return (
    <section className={`${brytzone}_home-community`} ref={forwardedRef}>
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

