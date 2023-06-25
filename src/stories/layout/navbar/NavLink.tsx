"use client";
import Link from "next-intl/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import LanLink from "next-intl/link";

interface NavlinkProps {
  /**
   * @param {string} href - page route
   * @param {string} text - link text
   * @param {string} type - navlink for mobile or desktop
   * @param {void} i - framer-motion counter.
   * @param {void} toggle - Toggle menu state.
   *
   */
  href: string;
  text: string;
  toggle?: () => void;
  type: "mobile" | "desktop";
  i?: number;
}
interface LangaugeLinkProps {
  /**
   * @param {string} to - destination page route
   * @param {string} text - link text
   */
  to: string;
  text: string;
  path: string;
}

export const NavLink: React.FC<NavlinkProps> = ({ href, text, toggle, type, i }) => {
  //getting current route
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  const lg = useMediaQuery("(width > 840px)");
  const itemVariants = {
    open: (i: number) => ({
      x: 0,
      transition: {
        delay: i * 0.3,
        ease: "easeInOut",
      },
    }),
    closed: { x: "-170%" },
  };

  return type === "mobile" ? (
    <motion.span custom={i} className="" variants={itemVariants} animate="open" initial="closed">
      <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href}>
        {text}
      </Link>
    </motion.span>
  ) : (
    <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href}>
      {text}
    </Link>
  );
};

export const LanguageLink: React.FC<LangaugeLinkProps> = ({ to, text,path }) => {
  // You can override the `locale` to switch to another language
  return (
    <LanLink href={path} locale={to} className="nav_link">
      {text}
    </LanLink>
  );
};
