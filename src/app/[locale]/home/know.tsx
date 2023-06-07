import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Image from "next/image";
import Heading from "@/stories/components/heading";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
    const knowT = useTranslations("know")
    return (
      <motion.section
        layout
        initial="hidden"
        animate="visible"
        exit="close"
        variants={parentVariants}
        viewport={{ amount: 0.35, once: true }}
        onViewportLeave={() => setVisible(false)}
        onViewportEnter={() => setVisible(true)}
      >
        <AnimatePresence>
          {visible && (
            <>
              <motion.div
                className="know_card"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={childVariants}
              >
                <div className="know_card-image">
                  <Image
                    src="/home/know/img1.jpg"
                    width={400}
                    height={400}
                    alt="card_img"
                  />
                </div>
                <div className="know_card-text">
                  <h3>{knowT("our")}</h3>
                  <p>{knowT("wemake")}</p>
                </div>
              </motion.div>
              <motion.div
                className="know_card"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={childVariants}
              >
                <div className="know_card-image"></div>
                <div className="know_card-text">
                  <h3>{knowT("announcement")}</h3>
                  <p>{knowT("wekeep")}</p>
                </div>
              </motion.div>
              <motion.div
                className="know_card"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={childVariants}
              >
                <div className="know_card-image">
                  <Image
                    src={`/home/know/img${tablet ? "2a" : "2"}.jpg`}
                    width={350}
                    height={250}
                    alt="card_img"
                  />
                </div>
                <div className="know_card-text">
                  <h3>{knowT("proj")}</h3>
                  <p>{knowT("getinvolved")}</p>
                </div>
              </motion.div>
              <motion.div
                className="know_card"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={childVariants}
              >
                <div className="know_card-image"></div>
                <div className="know_card-text">
                  <h3>{knowT("communication")}</h3>
                  <p>{knowT("an")}</p>
                </div>
              </motion.div>
              <motion.div
                className="know_card"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={childVariants}
              >
                <div className="know_card-image">
                  <Image
                    src="/home/know/img5.jpg"
                    width={350}
                    height={450}
                    alt="card_img"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.section>
    );
  };
const homeT = useTranslations("home")
  return (
    <section className={`${brytzone}_home-know`}>
      <Heading bordered>{homeT('getto')}</Heading>
      <Parent />
    </section>
  );
};

export default Know;
