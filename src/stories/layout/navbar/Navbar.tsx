"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/icon.png";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import CloseIcon from "./CloseIcon";
import { NavLink } from "@/stories/NavLink";
import { nanoid } from "nanoid";
import useWindowSize from "@/hooks/useWindowSize";

interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {boolean} [desktop=false] - Used to check if the min width is 960pxt.
   * @param {void} handleClick - Toggle menu state.
   * @param {void} set - Toggle menu state.
   *
   * */
  isOpen: boolean;
  desktop: boolean;
  handleClick: () => void;
  set?: (x: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick, desktop }) => {
  const globalTransition = { stiffness: 100, duration: 0.5, ease: "easeInOut" };
  const routes: string[] = ["home", "internships", "projects", "polls", "about", "contact", "blog"];
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

  // console.log(useWindowSize().width);
  
  // if (slideInn.open.transition) slideInn.open.transition.delay = 2.25;
  // slideInn.open &&  slideInn.open.transition.delay = 2.25;
  //verifying if element is in viewport
  return (
    <motion.nav layout animate={{ height: isOpen ? (desktop ? "9.6rem" : "70rem") : "9.6rem", paddingTop: isOpen ? "3rem" : "2.25rem" }} transition={globalTransition}>
      <motion.div>
        <span className="logo">
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
                  <NavLink i={index} href={`/${route === "home" ? "/" : route}`} text={route} type={desktop ? "desktop" : "mobile"} key={nanoid()} />
                ))}
              </motion.div>
              <motion.div className="navbar_mobile" transition={{ delay: 2.25 }} layout key={nanoid()} variants={slideInn} initial="closed" animate="open" exit="closed">
                <span>hell-o</span>
                <span>hell-o</span>
                <span>hell-o</span>
                <span>hell-o</span>
                <span>theme</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {isOpen && desktop && (
          <>
            <motion.div className="navbar_desktop" initial={false}>
              {routes.map((route, index) => (
                <NavLink i={index} href={`/${route === "home" ? "/" : route}`} text={route} type={"desktop"} key={nanoid()} />
              ))}
            </motion.div>
            <motion.div className="navbar_desktop" initial={false} data-name="name" key={nanoid()}>
              <span>hell-o</span>
              <span>hell-o</span>
              <span>hell-o</span>
              <span>hell-o</span>
              <span>theme</span>
            </motion.div>
          </>
        )}
      </>
    </motion.nav>
  );
};

export default Navbar;
