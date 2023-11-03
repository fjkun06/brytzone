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
import { PulseLoader } from "react-spinners";
import { backendPort, genId } from "@/utils/config";
import axios from "axios";
import PollFilter from "./PollFilter";
import PollCard from "./PollCard";


const Polls = () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  // console.log(path.slice(3 - path.length) + "dashboard");
  const [visible, setVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // console.log(e.target.value);
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

  const [filters, setFilters] = React.useState({
    department: "",
    level: "",
    semester: "",
  });

  React.useEffect(() => {
    console.dir(filters);
    const handleFilterSubmit = async () => {
      try {
        const res = await axios.post(`http://localhost:${backendPort}/api/courses/filter`, JSON.stringify({ ...filters }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(res); // Handle the response as needed
      } catch (error: any) {
        console.error("Error submitting form:", error);
      }
    };
    if (filters.level.length > 0 || filters.department.length > 0 || filters.semester.length > 0) {
      handleFilterSubmit();
    }
  }, [filters]);

  // /load courses
  React.useEffect(() => {
    const handleFilterSubmit = async () => {
      try {
        const res = await axios.get(`http://localhost:${backendPort}/api/courses`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(res); // Handle the response as needed
      } catch (error: any) {
        console.error("Error submitting form:", error);
      }
    };
    handleFilterSubmit();
  }, []);

  // Update the state
  const updateFilters = (filter: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
      // filter2: "",
      // filter3: ""
    }));

    //call backend
    // handleFilterSubmit();
  };
  // Update the state
  const clearFilters = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      department: "",
      level: "",
      semester: "",
    }));
  };

  const filterArray = Object.values(filters).filter((el) => el.length > 0);

  //config data for options
  const departments = ["Computer Department", "Electrical Department", "Mechanical Department"];
  const levels = ["Level 200", "Level 300", "Level 400"];
  const semesters = ["First Semester", "Second Semester"];

  //collect filter for backend
  const handleFilterSubmit = async () => {
    // console.dir(filterArray);
    try {
      const res = await axios.post(`http://localhost:${backendPort}/api/courses/filter`, JSON.stringify({ data: filterArray }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(res); // Handle the response as needed
    } catch (error: any) {
      console.error("Error submitting form:", error);
    }
  };

  //scrolling to polls
  const headerRef = React.useRef<HTMLElement>(null);

  function scrollToPolls() {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
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
            <Button onClick={scrollToPolls}>Be Part Now</Button>
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
      <section className="polls-container" onMouseLeave={closeAll} ref={headerRef}>
        <div className="filters">
          <div className="available">Available Courses</div>
          <PollFilter toggler={handleDepartment} isOpen={departmentOpen} data={departments} title="Department" update={updateFilters} filter="department" />
          <PollFilter toggler={handleLevel} isOpen={levelOpen} data={levels} title="Choose Level" update={updateFilters} filter="level" />
          <PollFilter toggler={handleSemester} isOpen={semesterOpen} data={semesters} title="Select Semester" update={updateFilters} filter="semester" />
        </div>
        <div className="criteria" onMouseEnter={closeAll}>
          <span>Filter(s): </span>
          {true && <span>{filterArray.join(" | ")}</span>}
          {filterArray.length > 0 && (
            <span className="clear" onClick={clearFilters}>
              clear
            </span>
          )}
          <span></span>
          <span></span>
        </div>
        <div className="cards-container" onMouseEnter={closeAll}>
          <div className="content">
            {["#40B740", "#9747FF", "#3C3232CC", "#40B740", "#9747FF", "#3C3232CC"].map((c) => (
              <PollCard key={genId()} fill={c} />
            ))}
          </div>
          <div className="pagination"></div>
        </div>
      </section>
    </section>
  );
};

export default Polls;


interface PollCardData {
  level: number | string;
  color: "string";
  course: Course;
}

interface Course {
  code: number | string;
  title: string;
  questions: number | string;
  semester: string;
  lecturer: string;
  participants: number | string;
  department: string;
}

