"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashbaord = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
    </div>
  );
};

export default Dashbaord;
