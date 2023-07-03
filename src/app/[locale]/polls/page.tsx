"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brytzone } from "../home/header";
import GridImage from "./grid";
import { Button } from "@/stories/components/Button";
import React from "react";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};

const Polls = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");
  const [visible, setVisible] = React.useState(false);

  return (
    <section className={`${brytzone}_polls`}>
      <header>
        <h1>Polls</h1>

        <section className="header-content">
          <article className="greetings">
            <h2>
              Cure Your <span>Curiosity</span>
            </h2>
            <p>
              Have most of your <span>worries answered</span> through our online <span>Polls.</span> all you need do is to select your Level, semester,Course and then answer the questions that
              follows.
            </p>
            <Button>Be Part Now</Button>
          </article>
          <motion.div viewport={{ amount: 0.5, once: false }} onViewportLeave={() => setVisible(false)} onViewportEnter={() => setVisible(true)}>
            <AnimatePresence>{visible && <GridImage />}</AnimatePresence>
          </motion.div>
        </section>
      </header>
    </section>
  );
};

export default Polls;
