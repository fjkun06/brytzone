import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Image from "next/image";
import Heading from "@/stories/components/heading";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, Variants, motion } from "framer-motion";

const Know = () => {
  const tablet = useMediaQuery("(width > 1024px)");
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  const parentVariants: Variants = {
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
  const childVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    close: { opacity: 0 },
  };
  const Parent = ({ children }: { children?: ReactNode }) => {
    return (
      <motion.section
        layout
        initial="hidden"
        animate="visible"
        exit="close"
        variants={parentVariants}
        className="card_parent"
        viewport={{ amount: 0.35 }}
        onViewportLeave={() => setVisible(false)}
        onViewportEnter={() => setVisible(true)}
      >
        <AnimatePresence>
          {visible && (
            <>
              <motion.div className="know_card" transition={{ duration: 0.5, ease: "easeInOut" }} variants={childVariants}>
                <div className="know_card-image">
                  <Image src="/home/know/img1.jpg" width={400} height={400} alt="card_img" />
                </div>
                <div className="know_card-text">
                  <h3>Our Approach</h3>
                  <p>We keep you updated with the most reliable information on Campus.</p>
                </div>
              </motion.div>
              <motion.div className="know_card" transition={{ duration: 0.5, ease: "easeInOut" }} variants={childVariants}>
                <div className="know_card-image"></div>
                <div className="know_card-text">
                  <h3>Our Approach</h3>
                  <p>We keep you updated with the most reliable information on Campus.</p>
                </div>
              </motion.div>
              <motion.div className="know_card" transition={{ duration: 0.5, ease: "easeInOut" }} variants={childVariants}>
                <div className="know_card-image">
                  <Image src={`/home/know/img${tablet ? "2a" : "2"}.jpg`} width={350} height={250} alt="card_img" />
                </div>
                <div className="know_card-text">
                  <h3>Our Approach</h3>
                  <p>We keep you updated with the most reliable information on Campus.</p>
                </div>
              </motion.div>
              <motion.div className="know_card" transition={{ duration: 0.5, ease: "easeInOut" }} variants={childVariants}>
                <div className="know_card-image"></div>
                <div className="know_card-text">
                  <h3>Our Approach</h3>
                  <p>We keep you updated with the most reliable information on Campus.</p>
                </div>
              </motion.div>
              <motion.div className="know_card" transition={{ duration: 0.5, ease: "easeInOut" }} variants={childVariants}>
                <div className="know_card-image">
                  <Image src="/home/know/img5.jpg" width={350} height={450} alt="card_img" />
                </div>
              </motion.div>
           
            </>
          )}
        </AnimatePresence>
      </motion.section>
    );
  };

  return (
    <section className={`${brytzone}_home-know`}>
      <Heading bordered>Get to know us by chosing a starting point</Heading>
        <Parent />
    </section>
  );
};

export default Know;
