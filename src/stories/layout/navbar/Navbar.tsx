"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/icon.png";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import CloseIcon from "./CloseIcon";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NavLink } from "@/stories/NavLink";
import { nanoid } from "nanoid";

interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} handleClick - Toggle menu state.
   * @param {void} set - Toggle menu state.
   *
   * */
  isOpen: boolean;
  handleClick: () => void;
  set?: (x: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick }) => {
  const min980 = useMediaQuery("(width > 960px)");
  const globalTransition = { stiffness: 100, duration: 0.5 };
  const routes: string[] = ["home", "internships", "projects", "polls", "about", "contact", "blog"];

  console.log(isOpen);

  //verifying if element is in viewport
  return (
    <motion.nav layout animate={{ height: isOpen ? (min980 ? "8rem" : "60rem") : "6.6rem" }} transition={globalTransition}>
      <motion.div>
        <span className="logo">
          <Image src={logo} alt="" />
        </span>
        {/* <OpenIcon /> */}
        <Menu isOpen={isOpen} toggleNavbarState={handleClick} />
      </motion.div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
          layout
            variants={{
              open: {
                x: 0,
                transition: {
                  ...globalTransition,
                  // delayChildren: 10.5,
                  // staggerChildren: 0.5,
                  delay: 0.25,
                },
              },
              closed: {
                x: "-200%",
                transition: {
                  ...globalTransition,
                },
              },
            }}
            initial="closed"
            animate="open"
            // transition={{ ...globalTransition, delay: 0.25 }}
            exit="closed"
            // <motion.div
            //   variants={{
            //     open: {
            //       x: 0,
            //       transition: {
            //         type: "spring",
            //         bounce: 0,
            //         duration: 0.7,
            //         delayChildren: 0.3,
            //         staggerChildren: 0.05,
            //         delay: 0.25,
            //       },
            //     },
            //     closed: {
            //       x: "-200%",
            //       transition: {
            //         type: "spring",
            //         bounce: 0,
            //         duration: 0.3,
            //       },
            //     },
            //   }}
            //   initial={{ x: "-200%" }}
            //   animate={{ x: 0 }}
            //   transition={{ ...globalTransition, delay: 0.25 }}
            //   exit={{ x: "-200%", transition: { duration: 0.5 } }}
          >
            {/* <NavLink href="/" text="home" />
            <NavLink href="/internships" text="internships" />
            <NavLink href="/projects" text="projects" />
            <NavLink href="/polls" text="polls" />
            <NavLink href="/about" text="about" />
            <NavLink href="/contact" text="contact" />
            <NavLink href="/blog" text="blog" /> */}
            {routes.map((route, index) => (
              <NavLink i={index} href={`/${route === "home" ? "/" : route}`} text={route} type="mobile" key={nanoid()} />
            ))}
          </motion.div>
          <motion.div
            key={nanoid()}
            variants={{
              open: {
                // x:  "-200%",
                x: 0,
                transition: {
                  ...globalTransition,
             
                  delay: 2.25,
                },
              },
              closed: {
                x: "-200%",
                transition: {
                  ...globalTransition,
                },
              },
            }}
            initial="closed"
            animate="open"
          >
            three
          </motion.div>
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Navbar;
