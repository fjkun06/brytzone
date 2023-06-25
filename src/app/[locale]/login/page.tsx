"use client";

import { useTranslations } from "next-intl";
// import Link from "next/link";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};
import Link from "next-intl/link";

const Polls = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");
const p2 = path1.slice(3 - path1.length)
  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      <h1>Login</h1>
      {/* // When the user is on `/en`, the link will point to `/en/about` */}
      <Link href="/about">About</Link>
      {/* // You can override the `locale` to switch to another language */}
      <Link href={p2} locale="de">
        Switch to German
      </Link>
    </div>
  );
};

export default Polls;
