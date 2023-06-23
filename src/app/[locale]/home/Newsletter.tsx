import React from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { Button } from "@/stories/components/Button";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <section className={`${brytzone}_home-newsletter`}>
      <Heading bordered>{"Subscribe to our newsletter"}</Heading>
      <div className="newsletter_content">
        <div className="newsletter_content_text">
          <h2>Never miss our updates</h2>
          <p>Always get updates on our new achievements and get new features for improvements...</p>
        </div>
        <div className="newsletter_content_form">
          <form action="">
            <h3>Get new updates</h3>
            <span>Be the first to be notified on our updates</span>
            <input type="text" placeholder="Email address" />
            <Button category="contact">Subscribe</Button>
          </form>
          <span className='mask'>
            <Image src="/home/newsletter/newsletter.png" width={291} height={274} alt="dark-girl" quality={100}/>

          </span>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
