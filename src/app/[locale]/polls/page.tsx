"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brytzone } from "../home/header";
import GridImage from "./grid";
import { Button } from "@/stories/components/Button";
import React from "react";
import Heading from "@/stories/components/heading";
import SearchIcon from "@/stories/components/SearchIcon";
import { CircleLoader, PulseLoader } from "react-spinners";
import DoubleArrowIcon from "@/stories/components/DoubleArrowIcon";
import ChevronArrowUpIcon from "@/stories/components/ChevronArrowUpIcon";
import ChevronArrowDownIcon from "@/stories/components/ChevronArrowDownIcon";
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };
  const [semesterOpen, setSemesterOpen] = React.useState(false);
  const [levelOpen, setLevelOpen] = React.useState(false);
  const [departmentOpen, setDepartmentOpen] = React.useState(false);
  const handleSemester = () => {
    setSemesterOpen(!semesterOpen);
    setDepartmentOpen(false);
    setLevelOpen(false);
  };
  const handleLevel = () => {
    setSemesterOpen(false);
    setDepartmentOpen(false);
    setLevelOpen(!levelOpen);
  };
  const handleDepartment = () => {
    setSemesterOpen(false);
    setDepartmentOpen(!departmentOpen);
    setLevelOpen(false);
  };

  const closeAll = (e: React.MouseEvent<HTMLElement>) => {
    setSemesterOpen(false);
    setDepartmentOpen(false);
    setLevelOpen(false);
  };

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
              Have most of your <span>worries answered</span> through our online <span>Polls.</span> all you need do is to select your Level, semester, course and answer the questions that follow.
            </p>
            <Button>Be Part Now</Button>
          </article>
          <motion.div viewport={{ amount: 0.5, once: false }} onViewportLeave={() => setVisible(false)} onViewportEnter={() => setVisible(true)}>
            <AnimatePresence>{visible && <GridImage />}</AnimatePresence>
          </motion.div>
        </section>
      </header>
      <section className="search">
        <Heading bordered>Check Out Available Polls</Heading>

        <p>Hurray!!!..........Polls on various courses are now available based on your current department, semester and level</p>
        <div className="search-bar">
          {isLoading ? <PulseLoader size={10} speedMultiplier={0.5} loading={isLoading} color="grey" aria-label="Loading Spinner" data-testid="loader" className="wave" /> : <SearchIcon />}
          <input onChange={handleSearch} value={query} type="search" placeholder="Search a poll" />
        </div>
      </section>
      <section className="polls-container"  onMouseLeave={closeAll}>
        <div className="filters">
          <div className="available">Available Courses for: Second Semester</div>
          <PollFilter toggler={handleDepartment} isOpen={departmentOpen} title="Department" />
          <PollFilter toggler={handleLevel} isOpen={levelOpen} title="Choose Level" />
          <PollFilter toggler={handleSemester} isOpen={semesterOpen} title="Select Semester" />
        </div>
        <div className="criteria" onMouseEnter={closeAll}>Criteria:</div>
        <div className="cards-container" onMouseEnter={closeAll}>
          <div className="content"></div>
          <div className="pagination"></div>
        </div>
      </section>
    </section>
  );
};

export default Polls;
interface PollFilterprops {
  title: "Department" | "Choose Level" | "Select Semester";
  isOpen: boolean;
  toggler: () => void
}
export const PollFilter: React.FC<PollFilterprops> = ({ title,isOpen,toggler }) => {

  return (
    <motion.div className="filter" onClick={toggler}  >
      {title ?? "Title Here"} {isOpen ? <ChevronArrowUpIcon /> : <ChevronArrowDownIcon />}
      <AnimatePresence>
        {isOpen && (
          <motion.ul onMouseLeave={toggler} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.25 }} className="filter-dropdown">
            <li>Embedded Systems 1</li>
            <li>Software Architecture</li>
            <li>5 Questions Available</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
