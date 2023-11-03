"use client";
import React, { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { brytzone } from "../../home/header";
import Heading from "@/stories/components/heading";
import CheckSquareIcon from "@/stories/components/CheckSquareIcon";
import { useRouter } from "next/navigation";
import { CircleLoader } from "react-spinners";
import { SubContainer } from "../../signup/modal";
export default function Page({ params }: { params: { username: string } }) {
  const router = useRouter();
  useEffect(() => {
    // router.push(params.username + "/profile");
  });

  //answers state
  const [answers, setAnswers] = React.useState({
    module1: false,
    module2: false,
    module3: false,
    module4: false,
    module5: false,
  });

  // Update the state

  const updateAnswers = (module: string, value: boolean) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [module]: value,
      // filter2: "",
      // filter3: ""
    }));
  };
  // Update the state
  const clearFilters = () => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      module1: false,
      module2: false,
      module3: false,
      module4: false,
      module5: false,
    }));
  };

  const [answered, setAnswered] = useState(false);

  return (
    <section className={`${brytzone}_poll`}>
      <header>
        <h2>COURSE: CEC 320,EMBEDDED SYSTEMS</h2>
      </header>
      <section className="content">
        <div className="introduction">
          <Heading bordered>Answer The questions</Heading>
          <p>
            <span>This section contains all the modules of this course and requires you to answer a</span> <span className="tagged">Yes</span> or
            <span>
              <span className="tagged"> No</span> to every question that requires such answer
            </span>
          </p>
        </div>
        <div className="cards">
          <PollSingleCardItem module="module1" value={answers["module1"]} update={updateAnswers} index={1} />
          <PollSingleCardItem module="module2" value={answers["module2"]} update={updateAnswers} index={2} />
          <PollSingleCardItem module="module3" value={answers["module3"]} update={updateAnswers} index={3} />
          <PollSingleCardItem module="module4" value={answers["module4"]} update={updateAnswers} index={4} />
          <PollSingleCardItem module="module5" value={answers["module5"]} update={updateAnswers} index={5} />
        </div>
        <div className="actions">
          <span className="back" onClick={() => router.push("/polls")}>
            Back to Polls
          </span>
          <span className="submit" onClick={() => setAnswered(true)}>
            Submit Poll
          </span>
          {answered && <AnswerSubmit />}
        </div>
      </section>
    </section>
  );
}

export const AnswerSubmit = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 4000);
  }, []);

  return (
    <span>
      Submiting answer(s)...
      {/* <motion.p animate={{ scale: 2.5, y: -50 }}> */}
      <CircleLoader loading={loading} cssOverride={{ color: "var(--test)" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" />
      {/* </motion.p> */}
    </span>
  );
};

interface AnswerProps {
  value: boolean;
  module: "module1" | "module2" | "module3" | "module4" | "module5";
}
interface PollSingleCardItemProps extends AnswerProps {
  title?: "Department" | "Choose Level" | "Select Semester";
  index: number;
  update: (module: string, value: boolean) => void;
}
export const PollSingleCardItem: React.FC<PollSingleCardItemProps> = ({ value, module, update, index }) => {
  const handleUpdate = (val: boolean) => {
    update(module, val);
  };
  return (
    <div className="card">
      <span className="index">{index}</span>
      <article>
        <h2>Module {index}: Introduction To Embedded Systems</h2>
        <p>This module had a brief review of what embedded systems are really</p>
        <div className="choice">
          <span className="question">Do you have a problem with this Module?</span>
          <div className="options">
            <div className={value ? "active" : ""} onClick={() => handleUpdate(true)}>
              <CheckSquareIcon />
              Yes
            </div>
            <div className={value ? "" : "active"} onClick={() => handleUpdate(false)}>
              <CheckSquareIcon />
              No
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
