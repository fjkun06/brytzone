import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/icon.png";
import FacebookIcon from "@/stories/components/FacebookIcon";
import TwitterIcon from "@/stories/components/TwitterIcon";
import LinkedInIcon from "@/stories/components/LinkedInIcon";

const Footer = () => {
  return (
    <footer className="brtyzone_footer">
      <section className="brtyzone_footer_links">
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="">Projects</span>
            <span className="">Internships</span>
            <span className="">Chat</span>
            <span className="">About</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="">cotsite@ubuea.com</span>
            <span className="">+237 90067890</span>
            <span className="">Cameroon, Buea Molyko</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="">Projects</span>
            <span className="">Internships</span>
            <span className="">Chat</span>
            <span className="">About</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <span className="logo">
            <Image src={logo} alt="" />
          </span>
          <div>
            <span className="">Follow us on all our social media platforms top get more updates</span>
            <span className="">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </span>
          </div>
        </div>
      </section>
      <hr />
      <section className="brtyzone_footer_rights">
        <div>
          <span className="">©</span>
          <span className="">2023, Brytzone All rights reserved</span>
        </div>
        <div>
          <span className="">Terms</span>
          <span className="">Privacy</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
