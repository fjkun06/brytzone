"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
// export const metadata = {
//   title: "Ensome | Home",
//   description: "our proposed solutions to common digital problems",
// };

const Projects = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
    </div>
  );
};

export default Projects;
