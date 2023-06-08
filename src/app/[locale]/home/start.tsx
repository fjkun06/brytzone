import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { AnimatePresence, Variants, motion, useInView } from "framer-motion";
import DoubleArrowIcon from "@/stories/components/DoubleArrowIcon";
import Image from "next/image";
import PollsIcon from "@/stories/components/PollsIcon";
import InternshipIcon from "@/stories/components/InternshipIcon";
import ProjectIcon from "@/stories/components/ProjectIcon";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
interface StartCardProps {
  id: number | string;
  children?: string;
  icon: ReactNode;
  title: string;
}

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
      // Adjust the stagger delay for desired effect
    },
  },
};

const childVariants: Variants = {
  hidden: { y: 400 },
  visible: { y: 0 },
  close: { y: 400, opacity: 0.5 },
};

interface ParentProps {
  children?: React.ReactNode[];
}

const StartCardItem = ({ id, icon, children, title }: StartCardProps) => {
  const router = useRouter();
  return (
    <motion.div layout className="card_item" onClick={() => router.push(`/${title.toLowerCase()}`)} variants={childVariants} transition={{ duration: 0.5, ease: "easeInOut" }}>
      <svg>
        <defs>
          <linearGradient id={`paint_${id}`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
            <stop offset="0.0136853" stopColor="#fff" />
            <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <rect fill={`url(#paint_${id})`} className="paint" />
      </svg>
      <article>
        <span>{icon}</span>
        <span> {title ?? "Projects"} </span>
        <span>{children} </span>
        <span>
          <DoubleArrowIcon />
        </span>
      </article>
    </motion.div>
  );
};
const Start = () => {
   const startT = useTranslations("start");
  const data = [
    {
      title: "cards.one.title",
      icon: <ProjectIcon />,
      text: "cards.one.text",
    },
    {
      title: "cards.two.title",
      icon: <PollsIcon />,
      text: "cards.two.text",
    },
    {
      title: "cards.three.title",
      icon: <InternshipIcon />,
      text: "cards.three.text",
    },
  ];

  const [visible, setVisible] = React.useState(false);
  const tablet = useMediaQuery("(width > 900px)");
  const ref = React.useRef(null);
  const container = React.useRef(null);

  const Parent: React.FC<ParentProps> = ({ children }) => {
    return (
      <motion.div
        layout
        initial="hidden"
        animate="visible"
        exit="close"
        variants={parentVariants}
        className="card_parent"
        ref={ref}
        viewport={{ amount: 0.35,once:true }}
        onViewportLeave={() => setVisible(false)}
        onViewportEnter={() => setVisible(true)}
      >
        <AnimatePresence>
          {visible && (
            <>
              {data.map(({ title, icon, text }, i) => (
                <StartCardItem id={`htag${i}`} title={startT(title)} icon={icon} key={nanoid()}>
                  {startT(text)}
                </StartCardItem>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };
  return (
    <section className={`${brytzone}_home-start`} ref={container}>
      <Heading bordered>{startT("gett")}</Heading>
      <p>{startT("weoffer")}</p>

      <Parent />
    </section>
  );
};

export default Start;
