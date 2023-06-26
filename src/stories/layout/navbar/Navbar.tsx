"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/icon.png";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { NavLink } from "@/stories/layout/navbar/NavLink";
import { nanoid } from "nanoid";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { switchTheme } from "@/utils/themeSwitcher";
import { Button } from "@/stories/components/Button";
import UserAddIcon from "./UserAddIcon";
import IconForward from "@/stories/components/IconForward";
import LanguageComponent from "@/stories/components/LanguageComponent";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useTranslations } from "next-intl";
import LoginButton from "@/stories/components/LoginButton";

interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {boolean} [desktop=false] - Used to check if the min width is 960pxt.
   * @param {void} handleClick - Toggle menu state.
   * @param {void} storeCookie - Update theme cookie value.
   * @param {string} cookieVal - Toggle menu state.
   *
   * */
  isOpen: boolean;
  desktop: boolean;
  cookieVal: string;
  handleClick: () => void;
  storeCookie: (x: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick, desktop, storeCookie, cookieVal }) => {
  const navbarT = useTranslations("routes");
  const globalTransition = { stiffness: 100, duration: 0.5, ease: "easeInOut" };
  const routes: string[] = ["one", "two", "three", "four", "five", "six", "seven"];
  // const routesPath: string[] = ["one", "two", "three", "four", "five", "six", "seven"];
  const routesPath: string[] = ["home", "internships", "projects", "polls", "about", "contact", "blog"];

  const start = {
    x: 0,
    transition: {
      ...globalTransition,
      delay: 0.25,
    },
  };
  const end = {
    x: "-200%",
    transition: {
      ...globalTransition,
    },
  };

  const slideIn = {
    open: start,
    closed: end,
  };
  const slideInn = {
    open: {
      ...start,
      transition: {
        ...globalTransition,
        delay: 2.25,
      },
    },
    closed: end,
  };

  const themeTransition = {
    open: {
      opacity: 1,
      transition: globalTransition,
    },
    close: { opacity: 0, transition: globalTransition },
  };

  const path = useSelectedLayoutSegment();
  // console.log(path);
  const router = useRouter();
  // console.log(path.slice(3 - path.length) + "dashboard");
// const p2 = path1.slice(3 - path1.length)
  return (
    <motion.nav layout animate={{ height: isOpen ? (desktop ? "9.6rem" : "70rem") : "9.6rem", paddingTop: isOpen ? (desktop ? "0rem" : "3rem") : "2.25rem" }} transition={globalTransition}>
      <motion.div>
        <span className="logo" onClick={() => router.push("/")}>
          <Image src={logo} alt="" />
        </span>
        {!desktop && <Menu isOpen={isOpen} toggleNavbarState={handleClick} />}
      </motion.div>
      <>
        <AnimatePresence>
          {isOpen && !desktop && (
            <>
              <motion.div className="navbar_mobile" layout variants={slideIn} initial="closed" animate="open" exit="closed">
                {routes.map((route, index) => (
                  <NavLink i={index} href={`/${routesPath[index] === "home" ? "" : routesPath[index].toLowerCase()}`} text={navbarT(route)} type={desktop ? "desktop" : "mobile"} key={nanoid()} />
                ))}
              </motion.div>
              <motion.div className="navbar_mobile" transition={{ delay: 2.25 }} layout key={nanoid()} variants={slideInn} initial="closed" animate="open" exit="closed">
                <AnimatePresence>
                  {cookieVal === "dark" ? (
                    <motion.span
                      variants={themeTransition}
                      animate="open"
                      exit="close"
                      initial={false}
                      className="navbar_theme"
                      onClick={() => {
                        switchTheme("light");
                        storeCookie("light");
                      }}
                    >
                      <SunIcon />
                    </motion.span>
                  ) : (
                    <motion.span
                      variants={themeTransition}
                      animate="open"
                      exit="close"
                      initial={false}
                      className="navbar_theme"
                      onClick={() => {
                        switchTheme("dark");
                        storeCookie("dark");
                      }}
                    >
                      <MoonIcon />
                    </motion.span>
                  )}
                </AnimatePresence>

                <Button category="action" icon={<UserAddIcon />}>
                  Log In
                </Button>
                <LanguageComponent />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {isOpen && desktop && (
          <>
            <motion.div className="navbar_desktop" initial={false}>
              {routes.map((route, index) => (
                  <NavLink i={index} href={`/${routesPath[index] === "home" ? "" : routesPath[index].toLowerCase()}`} text={navbarT(route)} type={desktop ? "desktop" : "mobile"} key={nanoid()} />
                  ))}
            </motion.div>
            <motion.div layout className="navbar_desktop" initial={false} data-name="name" key={nanoid()}>
              <AnimatePresence>
                {cookieVal === "dark" ? (
                  <motion.span
                    variants={themeTransition}
                    animate="open"
                    exit="close"
                    initial={false}
                    className="navbar_theme"
                    onClick={() => {
                      switchTheme("light");
                      storeCookie("light");
                    }}
                  >
                    <SunIcon />
                  </motion.span>
                ) : (
                  <motion.span
                    variants={themeTransition}
                    animate="open"
                    exit="close"
                    initial={false}
                    className="navbar_theme"
                    onClick={() => {
                      switchTheme("dark");
                      storeCookie("dark");
                    }}
                  >
                    <MoonIcon />
                  </motion.span>
                )}
              </AnimatePresence>
             <LoginButton/>
              {/* <Button category="content" icon={<IconForward/>} >Get Started</Button> */}
              <Button>Donate</Button>
              <LanguageComponent  />
            </motion.div>
          </>
        )}
      </>
    </motion.nav>
  );
};

export default Navbar;
