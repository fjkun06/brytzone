"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { backendPort, genId } from "@/utils/config";
import axios from "axios";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};

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
          {/* {filters.filter1 && <span>| {filters?.filter2}</span>} */}
          {/* {filters.filter1 && <span>| {filters?.filter3}</span>} */}
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
interface PollFilterprops {
  title: "Department" | "Choose Level" | "Select Semester";
  isOpen: boolean;
  toggler: () => void;
  update: (filter: string, value: string) => void;
  filter: "department" | "semester" | "level";
  data: string[];
}
export const PollFilter: React.FC<PollFilterprops> = ({ title, isOpen, toggler, update, filter, data }) => {
  const test = (e: React.MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    console.log(element.textContent);
    if (element?.textContent?.includes("Department")) {
      console.log(element.textContent.split(" ")[0].toLowerCase());
      update(filter, element.textContent.split(" ")[0].toLowerCase());
    } else {
      update(filter, element?.textContent as string);
    }
  };

  return (
    <motion.div className="filter" onClick={toggler}>
      {title ?? "Title Here"} {isOpen ? <ChevronArrowUpIcon /> : <ChevronArrowDownIcon />}
      <AnimatePresence>
        {isOpen && (
          <motion.ul onMouseLeave={toggler} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.25 }} className="filter-dropdown">
            {data.map((d) => (
              <li onClick={test} key={genId()}>
                {d}
              </li>
            ))}
            {/* <li onClick={test}>Embedded Systems 1</li>
            <li onClick={test}>Software Architecture</li>
            <li onClick={test}>5 Questions Available</li> */}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

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

export const PollCard = ({ fill }: { fill: string }) => {
  const router = useRouter()

  return (
    <article className="poll-card">
      <span className="level">
        <svg width="100%" height="100%" viewBox="0 0 235 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0903 0H202.004V0.013046H224.456V0H234.32V0.013046V0.970393H228.507C228.404 0.988642 228.24 0.996941 228.005 0.992481C226.043 0.955317 221.872 1.54965 220.759 1.93966L220.746 1.92318C211.395 5.15861 209.517 11.8006 208.503 16.2732C208.387 16.7879 208.273 17.3286 208.155 17.8882C206.74 24.603 204.753 34.0399 190.52 34.0399H186.727C186.487 34.0505 186.246 34.0559 186.004 34.0559H113.67H75.6335H50.934C50.7014 34.0559 50.4697 34.0506 50.239 34.0399H44.411C30.1779 34.0399 28.1901 24.603 26.7757 17.8883C26.6579 17.3287 26.544 16.788 26.4273 16.2732C25.4103 11.7862 23.5237 5.11574 14.0934 1.89197C11.0358 1.07102 6.93241 0.999107 5.72014 0.999107L5.70658 0.970393H1.80935V0.0238908C1.41641 0.0167014 1.01696 0.0130584 0.610901 0.0130584H1.80935V0H11.6725V0.0130584H23.0965L23.0903 0Z"
            fill={fill}
          />
        </svg>
        <span className="">Level 300</span>
      </span>
      <div className="body">
        <div className="heading">
          <span className="code">CEC 320:</span>
          <span className="title">Embedded Systems 1</span>
        </div>
        <span className="questions">8 Questions Available</span>
        <span className="semester">Second Semester</span>
        <span className="lecturer">
          <span>Lecturer: </span>
          <span className="name">Kometa Denis</span>
        </span>
      </div>

      <div className="participated">
        <span className="text">
          <svg width="100%" height="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.2611 0.542847H6.05974C4.85958 0.542847 3.87761 1.5093 3.87761 2.69051V3.42129H12.201C13.4011 3.42129 14.3831 4.38774 14.3831 5.56895V10.9232H15.2611C16.4612 10.9232 17.4432 9.95678 17.4432 8.77558V2.69051C17.4432 1.50927 16.4612 0.542847 15.2611 0.542847Z"
              fill="#6C7ED6"
            />
            <path
              d="M13.7139 3.32312H4.5126C4.29195 3.32312 4.07876 3.35603 3.87761 3.41671V3.42131H12.201C13.4011 3.42131 14.3831 4.38777 14.3831 5.56898V10.9233H15.261C15.4817 10.9233 15.6949 10.8904 15.896 10.8297V5.47078C15.896 4.28958 14.9141 3.32312 13.7139 3.32312Z"
              fill="#4F67D2"
            />
            <path
              d="M12.3007 3.32312H3.09943C1.89927 3.32312 0.917305 4.28958 0.917305 5.47078V11.5558C0.917305 12.737 1.89927 13.7035 3.09943 13.7035H8.62193C8.85868 13.7035 9.03543 13.9203 8.98127 14.1471C8.83483 14.7608 8.61073 15.4097 8.27943 16.075C8.13067 16.3737 8.4691 16.6775 8.75656 16.5024C9.58772 15.9961 10.7703 15.1488 11.7662 13.9509C11.8971 13.7934 12.094 13.7034 12.3007 13.7034C13.5009 13.7034 14.4829 12.737 14.4829 11.5558V5.47075C14.4829 4.28958 13.5009 3.32312 12.3007 3.32312Z"
              fill="#60B8FE"
            />
            <path
              d="M10.3944 14.1472C10.4486 13.9203 10.2718 13.7035 10.0351 13.7035H8.6219C8.85866 13.7035 9.03538 13.9203 8.98125 14.1472C8.8348 14.7608 8.6107 15.4097 8.27941 16.075C8.13065 16.3738 8.46907 16.6775 8.75653 16.5024C9.07543 16.3081 9.44613 16.0635 9.83811 15.7683C10.0909 15.2104 10.2706 14.6661 10.3944 14.1472Z"
              fill="#23A8FE"
            />
            <path
              d="M2.3305 11.5558V5.47078C2.3305 4.28958 3.31246 3.32312 4.51263 3.32312H3.09943C1.89927 3.32312 0.917305 4.28958 0.917305 5.47078V11.5558C0.917305 12.737 1.89927 13.7035 3.09943 13.7035H4.51263C3.31243 13.7035 2.3305 12.7371 2.3305 11.5558Z"
              fill="#23A8FE"
            />
            <path
              d="M3.94213 9.40068C4.34204 9.40068 4.66624 9.08161 4.66624 8.68801C4.66624 8.29441 4.34204 7.97534 3.94213 7.97534C3.54222 7.97534 3.21803 8.29441 3.21803 8.68801C3.21803 9.08161 3.54222 9.40068 3.94213 9.40068Z"
              fill="#DFEBFA"
            />
            <path
              d="M6.28082 9.40068C6.68074 9.40068 7.00493 9.08161 7.00493 8.68801C7.00493 8.29441 6.68074 7.97534 6.28082 7.97534C5.88091 7.97534 5.55672 8.29441 5.55672 8.68801C5.55672 9.08161 5.88091 9.40068 6.28082 9.40068Z"
              fill="#DFEBFA"
            />
            <path
              d="M8.61959 9.40068C9.0195 9.40068 9.3437 9.08161 9.3437 8.68801C9.3437 8.29441 9.0195 7.97534 8.61959 7.97534C8.21968 7.97534 7.89548 8.29441 7.89548 8.68801C7.89548 9.08161 8.21968 9.40068 8.61959 9.40068Z"
              fill="#DFEBFA"
            />
            <path
              d="M10.9584 9.40068C11.3583 9.40068 11.6825 9.08161 11.6825 8.68801C11.6825 8.29441 11.3583 7.97534 10.9584 7.97534C10.5585 7.97534 10.2343 8.29441 10.2343 8.68801C10.2343 9.08161 10.5585 9.40068 10.9584 9.40068Z"
              fill="#DFEBFA"
            />
            <path
              d="M3.94213 8.68801C3.94213 8.42428 4.08783 8.19416 4.30418 8.07093C4.19764 8.01025 4.07408 7.97534 3.94213 7.97534C3.54222 7.97534 3.21803 8.29441 3.21803 8.68801C3.21803 9.08161 3.54222 9.40068 3.94213 9.40068C4.07408 9.40068 4.19767 9.36577 4.30418 9.30509C4.0878 9.18187 3.94213 8.95174 3.94213 8.68801Z"
              fill="#B1DBFC"
            />
            <path
              d="M6.28094 8.68801C6.28094 8.42428 6.42664 8.19416 6.64299 8.07093C6.53644 8.01025 6.41289 7.97534 6.28094 7.97534C5.88102 7.97534 5.55683 8.29441 5.55683 8.68801C5.55683 9.08161 5.88102 9.40068 6.28094 9.40068C6.41289 9.40068 6.53644 9.36577 6.64299 9.30509C6.4266 9.18187 6.28094 8.95174 6.28094 8.68801Z"
              fill="#B1DBFC"
            />
            <path
              d="M8.6197 8.68801C8.6197 8.42428 8.7654 8.19416 8.98176 8.07093C8.87521 8.01025 8.75162 7.97534 8.6197 7.97534C8.21979 7.97534 7.8956 8.29441 7.8956 8.68801C7.8956 9.08161 8.21979 9.40068 8.6197 9.40068C8.75165 9.40068 8.87524 9.36577 8.98176 9.30509C8.7654 9.18187 8.6197 8.95174 8.6197 8.68801Z"
              fill="#B1DBFC"
            />
            <path
              d="M10.9585 8.68801C10.9585 8.42428 11.1042 8.19416 11.3206 8.07093C11.214 8.01025 11.0904 7.97534 10.9585 7.97534C10.5586 7.97534 10.2344 8.29441 10.2344 8.68801C10.2344 9.08161 10.5586 9.40068 10.9585 9.40068C11.0905 9.40068 11.2141 9.36577 11.3206 9.30509C11.1042 9.18187 10.9585 8.95174 10.9585 8.68801Z"
              fill="#B1DBFC"
            />
          </svg>
          <span>60+ Participated</span>
        </span>
        <span className="action" onClick={ () =>router.push('/polls/1')}>See Poll</span>
      </div>
    </article>
  );
};
