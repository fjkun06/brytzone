"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/icon.png";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import CloseIcon from "./CloseIcon";
import { NavLink } from "@/stories/NavLink";
import { nanoid } from "nanoid";

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
const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick,desktop }) => {
  const globalTransition = { stiffness: 100, duration: 0.5, ease: "easeInOut" };
  const routes: string[] = ["home", "internships", "projects", "polls", "about", "contact", "blog"];

  console.log(isOpen);

  //verifying if element is in viewport
  return (
    <motion.nav layout animate={{ height: isOpen ? (desktop ? "8rem" : "67rem") : "9.6rem",paddingTop: isOpen? "3rem":"2.25rem" }} transition={globalTransition}>
      <motion.div>
        <span className="logo">
          <Image src={logo} alt="" />
        </span>
        {/* <OpenIcon /> */}
        <Menu isOpen={isOpen} toggleNavbarState={handleClick} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              layout
              variants={{
                open: {
                  x: 0,
                  transition: {
                    ...globalTransition,
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
              exit="closed"
           
            >
    
              {routes.map((route, index) => (
                <NavLink i={index} href={`/${route === "home" ? "/" : route}`} text={route} type="mobile" key={nanoid()} />
              ))}
            </motion.div>
            <motion.div
              layout
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
              exit="closed"
            >
              <span>hell-o</span>
              <span>hell-o</span>
              <span>hell-o</span>
              <span>hell-o</span>
            </motion.div>
         
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
