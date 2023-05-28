"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "Ensome | About Us",
  description: "Ensome about us page, describes company and its workers",
};

const About = () => {
  const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default About;
