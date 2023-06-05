import React from "react";

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
