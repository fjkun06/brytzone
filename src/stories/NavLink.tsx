"use client";
import Link from "next-intl/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import React from "react";

interface NavlinkProps {
  /**
   * @param {string} href - page route
   * @param {string} text - link text
   * @param {void} toggle - Toggle menu state.
   *
   */
  href: string;
  text: string;
  toggle: () => void;
}
interface LangaugeLinkProps {
  /**
   * @param {string} to - destination page route
   * @param {string} text - link text
   */
  to: string;
  text: string;
}

export const NavLink: React.FC<NavlinkProps> = ({ href, text, toggle }) => {
  //getting current route
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const lg = useMediaQuery("(width > 840px)");

  return (
    <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href}>
      {text}
    </Link>
  );

  // return lg ? (
  //   <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href}>
  //     {text}
  //   </Link>
  // ) : (
  //   <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href} onClick={toggle}>
  //     {text}
  //   </Link>
  // );
};

export const LanguageLink: React.FC<LangaugeLinkProps> = ({ to, text }) => {
  // You can override the `locale` to switch to another language
  return (
    <Link href="/" locale={to}>
      {text}
    </Link>
  );
};
