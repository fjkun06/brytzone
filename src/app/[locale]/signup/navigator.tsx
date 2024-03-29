import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { brytzone } from "../home/header";

interface NavigatorProps {
  step: number;
  stepCallback: Dispatch<SetStateAction<number>>;
  completeCallback: Dispatch<SetStateAction<boolean>>;
}
const Navigator: React.FC<NavigatorProps> = ({ step, stepCallback, completeCallback }) => {
  //handle steps
  React.useEffect(() => {
    if (step === 4) {
      completeCallback(true);
    } else {
      completeCallback(false);
    }
  }, [step,completeCallback]);

  const increment = () => {
    if (step >= 1 && step <= 3) {
      stepCallback((s) => s + 1);
    }
    console.log(step, " :ggggggggggggggggggggggggggggggggggggggg");
  };
  const decrement = () => {
    if (!(step > 1 && step <= 4)) {
      return;
    }

    stepCallback((s) => s - 1);
    console.log(step, " :ggggggggggggggggggggggggggggggggggggggg");
  };
  return (
    <motion.div className="btns">
      <motion.button type="button" animate={{ opacity: step > 1 ? 1 : 0 }} onClick={decrement}>
        <svg id="back" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" transform="scale(-1,1)">
          <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.51.51 0 0 1 .042-.028.147.147 0 0 0 0-.252.51.51 0 0 1-.042-.028L9.502 5.513zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3v-.503z" />
        </svg>
        <span className={`${brytzone}_sublink`}>Back</span>
      </motion.button>
      <motion.button type="button" onClick={increment}>
        <span className={`${brytzone}_sublink`}>Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.51.51 0 0 1 .042-.028.147.147 0 0 0 0-.252.51.51 0 0 1-.042-.028L9.502 5.513zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3v-.503z" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Navigator;
