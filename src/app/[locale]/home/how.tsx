import Heading from "@/stories/components/heading";
import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Image from "next/image";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Mask from "./mask";
import { useTranslations } from "next-intl";


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

const How = () => {
  const [visible, setVisible] = React.useState(false);
  const howT = useTranslations("how");

  const span = {};
  return (
    <section className={`${brytzone}_home-how`}>
      <Heading bordered>{howT("howto")}</Heading>
      <div className="hleft">
        <h2>{howT("getstarted")}</h2>

        <div>
          <Mask />
          <Image
            src="/home/how/lady.png"
            width={300}
            height={280}
            alt="lady_img"
          />
        </div>
      </div>
      <div className="hright">
        <h2>{howT("getstarted")}</h2>

        <motion.ul
          className=""
          variants={parentVariants}
          viewport={{ amount: 1, once: true }}
          onViewportLeave={() => setVisible(false)}
          onViewportEnter={() => setVisible(true)}
        >
          {visible && (
            <>
              <ListItem delay={0}> {howT("createa")}</ListItem>
              <ListItem delay={0.75}>{howT("getto")} </ListItem>
              <ListItem delay={1.5}>{howT("be")}</ListItem>
              <ListItem delay={2.25}>{howT('createp')}</ListItem>
              <ListItem delay={3}>So much more....</ListItem>

              {/* <ListItem /> */}
            </>
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default How;

const ListItem = ({ delay, children }: { delay: number; children?: ReactNode }) => {
  const [visible, setVisible] = React.useState(false);
  const li = {
    hidden: { x:  500 },
    visible: (i: number) => {
      return {
        x: 0,
        transition: {
          x: { type: "spring", duration: 0.5, bounce: 0, delay: i },
        },
      };
    },
  };

  return (
    <motion.li
      viewport={{ amount: 1, once: true }}
      onViewportLeave={() => setVisible(false)}
      onViewportEnter={() => setVisible(true)}
      className=""
      variants={liCheckVariants2}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" variants={liCheckVariants} initial="hidden" animate="visible" exit="close">
        {visible && (
          <>
            <motion.path
              d="M10.0243 19.0746C5.00371 19.0746 0.922852 14.9937 0.922852 9.97308C0.922852 4.95244 5.00371 0.871582 10.0243 0.871582C15.045 0.871582 19.1258 4.95244 19.1258 9.97308C19.1258 14.9937 15.045 19.0746 10.0243 19.0746ZM10.0243 2.14156C5.70643 2.14156 2.19283 5.65516 2.19283 9.97308C2.19283 14.291 5.70643 17.8046 10.0243 17.8046C14.3423 17.8046 17.8559 14.291 17.8559 9.97308C17.8559 5.65516 14.3423 2.14156 10.0243 2.14156Z"
              stroke={"red"}
              variants={draw}
              custom={delay}
            />
            <motion.path
              d="M8.82166 13.004C8.65233 13.004 8.49147 12.9363 8.37294 12.8178L5.97687 10.4218C5.73134 10.1762 5.73134 9.76983 5.97687 9.5243C6.2224 9.27878 6.62879 9.27878 6.87432 9.5243L8.82166 11.4716L13.1734 7.11982C13.419 6.87429 13.8254 6.87429 14.0709 7.11982C14.3164 7.36534 14.3164 7.77174 14.0709 8.01727L9.27039 12.8178C9.15185 12.9363 8.99099 13.004 8.82166 13.004Z"
              stroke={"red"}
              variants={draw}
              custom={delay}
            />
          </>
        )}
      </motion.svg>
      <motion.span variants={li} initial="hidden" animate="visible" custom={delay + 0.5}>
        {children}
      </motion.span>
    </motion.li>
  );
};

// export default ListItem
