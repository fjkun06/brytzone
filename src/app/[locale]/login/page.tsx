"use client";

import { useTranslations } from "next-intl";
// import Link from "next/link";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};
import Link from "next-intl/link";
import { brytzone } from "../home/header";

const Polls = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");
  const p2 = path1.slice(3 - path1.length);
  return (
    <section className={`${brytzone}_login`}>
      <nav className={`${brytzone}_special_nav`}>
        navbar
      </nav>
      <div>
        <h1>Login</h1>
        <Link href="/about">About</Link>
        <Link href={"login"} locale="de">
          Switch to German
        </Link>
      </div>
    </section>
  );
};

export default Polls;
