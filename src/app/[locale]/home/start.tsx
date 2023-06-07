import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { motion } from "framer-motion";
import DoubleArrowIcon from "@/stories/components/DoubleArrowIcon";
import Image from "next/image";
import PollsIcon from "@/stories/components/PollsIcon";
import InternshipIcon from "@/stories/components/InternshipIcon";
import ProjectIcon from "@/stories/components/ProjectIcon";
import { nanoid } from "nanoid";
interface StartCardProps {
  id: number | string;
  children?: string;
  icon: ReactNode;
  title?: string;
}
const StartCardItem = ({ id, icon, children, title }: StartCardProps) => {
  return (
    <motion.div className="card_item">
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
  const data = [
    {
      title: "Projects",
      icon: <ProjectIcon />,
      text: "We help grow your skills by letting you create personal and team projects",
    },
    {
      title: "Polls",
      icon: <PollsIcon />,
      text: "Creating polls that helps teachers adjust their courses",
    },
    {
      title: "Internships",
      icon: <InternshipIcon />,
      text: "Giving you access to all available internship programs in your area",
    },
  ];
  return (
    <section className={`${brytzone}_home-start`}>
      <Heading bordered>Get to know us by chosing a starting point</Heading>
      <p>We offer a wide range of varieties such as internships, polls,chats, projects to to make you grow and so much more...</p>
      <motion.div className="card_parent" viewport={{ once: true, amount: "all" }} onViewportEnter={() => console.log("fully in veiw")}>
        {data.map(({ title, icon, text }, i) => (
          <StartCardItem id={`htag${i}`} title={title} icon={icon} key={nanoid()}>
            {text}
          </StartCardItem>
        ))}
      </motion.div>
    </section>
  );
};

export default Start;
