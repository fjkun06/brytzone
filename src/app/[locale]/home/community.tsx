import React from "react";
import { brytzone } from "./header";
import { Button } from "@/stories/components/Button";
import Heading from "@/stories/components/heading";

const Community = () => {
  return (
    <section className={`${brytzone}_home-community`}>
      <div className="">left</div>
      <div className="">
        {/* <h3 className={`${brytzone}_heading}`}></h3> */}
        <Heading>Get to know us by chosing a starting point</Heading>
        <p>Sign up today and get the most out of our site ranging from Internships, Polls, getting access to projects and so much more.....</p>
        <Button category="content">Join Us</Button>
      </div>
    </section>
  );
};

export default Community;
