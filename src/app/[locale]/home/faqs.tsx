import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
import PlusIcon from "@/stories/components/PlusIcon";
import { AnimatePresence, Variants, motion } from "framer-motion";
const parentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 3,
      delayChildren: 0.5,
      // Adjust the stagger delay for desired effect
    },
  },
};
const liCheckVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
      // Adjust the stagger delay for desired effect
    },
  },
};
const liCheckVariants2: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => {
    const delay = i - 1 * 0.5;
    return {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
        delay,
        // Adjust the stagger delay for desired effect
      },
    };
  },
};
const draw = {
  hidden: { pathLength: 0 },
  visible: (i: number) => {
    const delay = i;
    return {
      pathLength: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.5, bounce: 0, delay },
        // pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
      },
    };
  },
};
const Faqs = () => {
  return (
    <section className={`${brytzone}_home-faqs`}>
      <Heading bordered>Frequently Asked Questions</Heading>
      <p>Get all your questions answered through our FAQs.</p>
      <section>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </section>
    </section>
  );
};

export default Faqs;

const ListItem = () => {
  const li = {
    hidden: { x: 500 },
    visible: (i: number) => {
      return {
        x: 0,
        transition: {
          x: { type: "spring", duration: 0.5, bounce: 0, delay: i },
        },
      };
    },
  };
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      layout
      transition={{
        ease: "easeInOut",
        duration: 0.25,
      }}
      animate={{ height: isOpen ? 140 : 51 }}
      // animate={{ height: isOpen ? 100 : 30 }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="list">
        <span className="list_text">Must I be a student of COT Buea before using Brightzone hjsjg sjgjsjgj jsgjgjg</span>
        <span className="list_icon" onClick={() => setIsOpen(!isOpen)}>
          <PlusIcon />
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="list_text text"
          >
            <b>Must I be a student of COT Buea before using Brightzone,Must I be a student of COT Buea before using Brightzone</b>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
