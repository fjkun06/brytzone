"use client";
import Navbar from "@/stories/layout/navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nanoid } from "nanoid";
import React from "react";
interface SubLayoutProps {
  children?: React.ReactNode;
}
const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const min980 = useMediaQuery("(width > 960px)");

  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <main id="layout">
      <Navbar handleClick={handleIsOpen} isOpen={isOpen} desktop={min980} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={nanoid()}
            onClick={() => setIsOpen(false)}
            id="modal"
            layout
            animate={{ height: min980 ? "0rem" : "100vh" }}
            transition={{
              delay: 0.35,
            }}
            exit={{
              height: 0,
              transition: {
                delay: 0.35, ease: "easeInOut"
              },
            }}
          />
        )}
      </AnimatePresence>
      <section id="layoutwwww">{children}</section>
      <footer>hell-o</footer>
    </main>
  );
};

export default SubLayout;
