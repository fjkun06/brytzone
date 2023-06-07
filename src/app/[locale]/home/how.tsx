import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
import Image from "next/image";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Mask from "./mask";
import { useTranslations } from "next-intl";

const How = () => {
const howT = useTranslations("how");
  const liCheckVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Adjust the stagger delay for desired effect
      },
    },
    close: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };
  const liChildVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 0,
      transition: {
        pathLength: { delay: 5, type: "spring", duration: 1.5, bounce: 0 },
      },
    },
    close: { opacity: 0 },
  };
  const [visible, setVisible] = React.useState(false);
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <section className={`${brytzone}_home-how`}>
      <Heading bordered>{howT("howto")}</Heading>
      <div className="hleft">
        <h3>{howT("getstarted")}</h3>
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
        <h3>{howT("getstarted")}</h3>

        <motion.ul className="">
          <motion.li className="">
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              // variants={liCheckVariants}
              // initial="hidden"
              // animate="visible"
              // exit="close"
              viewport={{ amount: 1, once: true }}
              onViewportLeave={() => setVisible(false)}
              onViewportEnter={() => setVisible(true)}
            >
              <path
                // initial={{ pathLength: 0 }}
                d="M10.0243 19.0746C5.00371 19.0746 0.922852 14.9937 0.922852 9.97308C0.922852 4.95244 5.00371 0.871582 10.0243 0.871582C15.045 0.871582 19.1258 4.95244 19.1258 9.97308C19.1258 14.9937 15.045 19.0746 10.0243 19.0746ZM10.0243 2.14156C5.70643 2.14156 2.19283 5.65516 2.19283 9.97308C2.19283 14.291 5.70643 17.8046 10.0243 17.8046C14.3423 17.8046 17.8559 14.291 17.8559 9.97308C17.8559 5.65516 14.3423 2.14156 10.0243 2.14156Z"
                fill="#0A518B"
                pathLength={100000}
              />
              <motion.path
                // variants={liChildVariants}
                initial={{ pathLength: 0 }}
                d="M8.82166 13.004C8.65233 13.004 8.49147 12.9363 8.37294 12.8178L5.97687 10.4218C5.73134 10.1762 5.73134 9.76983 5.97687 9.5243C6.2224 9.27878 6.62879 9.27878 6.87432 9.5243L8.82166 11.4716L13.1734 7.11982C13.419 6.87429 13.8254 6.87429 14.0709 7.11982C14.3164 7.36534 14.3164 7.77174 14.0709 8.01727L9.27039 12.8178C9.15185 12.9363 8.99099 13.004 8.82166 13.004Z"
                fill="#0A518B"
                pathLength={0}
              />
            </motion.svg>
            <span>{howT("create")}</span>
          </motion.li>
          <motion.li></motion.li>
        </motion.ul>
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            variants={draw}
            custom={5}
          />
          <motion.path
            // initial={{ pathLength: 0 }}
            d="M10.0243 19.0746C5.00371 19.0746 0.922852 14.9937 0.922852 9.97308C0.922852 4.95244 5.00371 0.871582 10.0243 0.871582C15.045 0.871582 19.1258 4.95244 19.1258 9.97308C19.1258 14.9937 15.045 19.0746 10.0243 19.0746ZM10.0243 2.14156C5.70643 2.14156 2.19283 5.65516 2.19283 9.97308C2.19283 14.291 5.70643 17.8046 10.0243 17.8046C14.3423 17.8046 17.8559 14.291 17.8559 9.97308C17.8559 5.65516 14.3423 2.14156 10.0243 2.14156Z"
            stroke="#ff0055"
            variants={draw}
            custom={5.5}
            transform="scale(3)"
          />
          <motion.path
            // variants={liChildVariants}
            d="M8.82166 13.004C8.65233 13.004 8.49147 12.9363 8.37294 12.8178L5.97687 10.4218C5.73134 10.1762 5.73134 9.76983 5.97687 9.5243C6.2224 9.27878 6.62879 9.27878 6.87432 9.5243L8.82166 11.4716L13.1734 7.11982C13.419 6.87429 13.8254 6.87429 14.0709 7.11982C14.3164 7.36534 14.3164 7.77174 14.0709 8.01727L9.27039 12.8178C9.15185 12.9363 8.99099 13.004 8.82166 13.004Z"
            stroke="#ff0055"
            variants={draw}
            custom={6}
            transform="scale(3)"
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default How;
