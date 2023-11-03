"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageLink } from "@stories/layout/navbar/NavLink";
import LanguageSwitcher from "@/stories/components/LanguageSwitcher";

const Internships = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();

  return (
    <div>
                   <LanguageSwitcher locale="en"/>
                   <LanguageSwitcher locale="fr"/>
                   <LanguageSwitcher locale="de"/>
    </div>
  );
};

export default Internships;
