"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brytzone } from "../home/header";
import GridImage from "./grid";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};

const Polls = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");

  return (
    <section className={`${brytzone}_polls`}>
      <div>
        {/* <h1>{t("title")}</h1> */}
        <h1>polls bitch</h1>
        <GridImage/>
      </div>
    </section>
  );
};

export default Polls;
