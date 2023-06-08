import React from "react";
import { brytzone } from "./header";
import { Button } from "@/stories/components/Button";
import Heading from "@/stories/components/heading";
import Image from "next/image";

const Community = () => {
  return (
    <section className={`${brytzone}_home-community`}>
      <div className="">
        <Image src='/home/community/mockup.webp' width={800} height={800} alt="mockup"/>
      </div>
      <div className="">
        <Heading>Be a part  of  our community</Heading>
        <p>Sign up today and get the most out of our site ranging from Internships, Polls, getting access to projects and so much more.....</p>
        <Button category="content">Join Us</Button>
      </div>
    </section>
  );
};

export default Community;
