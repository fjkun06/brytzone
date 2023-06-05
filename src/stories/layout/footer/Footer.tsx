import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/icon.png";
import FacebookIcon from "@/stories/components/FacebookIcon";
import TwitterIcon from "@/stories/components/TwitterIcon";
import LinkedInIcon from "@/stories/components/LinkedInIcon";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const footerT = useTranslations("footer");
  const routesT = useTranslations("routes");

  const externalUrls = [
    {
      icon: <FacebookIcon />,
      url: "https://facebook.com",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://lnkedin.com",
    },
  ];
  return (
    <footer className="brtyzone_footer">
      <section className="brtyzone_footer_links">
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="">Github</span>
            <span className="">Blog</span>
            <span className="">Polls</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="" onClick={() => router.push("mailto:cotsite@ubuea.com")}>
              {/* <Link href={"mailto:cotsite@ubuea.com"} passHref={true}>
                cotsite@ubuea.com
              </Link> */}
              cotsite@ubuea.com
            </span>
            <span className="" onClick={() => router.push("tel:+237650906666")}>
              +237 650906666
              {/* <Link href={"tel:+237650906666"} passHref={true}>
                tel:+237650906666
              </Link> */}
            </span>
            <span className="">Cameroon, Buea Molyko</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <h4>Useful Links</h4>
          <div>
            <span className="">{routesT('three')}</span>
            <span className="">Internships</span>
            <span className="">Contact</span>
            <span className="">About</span>
          </div>
        </div>
        <div className="brtyzone_footer_links-item">
          <span className="logo" onClick={() => router.push("/")}>
            <Image src={logo} alt="" />
          </span>
          <div>
            <span className="">{footerT('cto')}</span>
            <span className="">
              {externalUrls.map(({ url, icon }) => (
                <Link href={url} passHref={true} key={nanoid()}>
                  {icon}
                </Link>
              ))}
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
