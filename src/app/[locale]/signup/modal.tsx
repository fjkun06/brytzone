import React, { Dispatch, SetStateAction, useState } from "react";
import { brytzone } from "../home/header";
import { AnimatePresence, motion } from "framer-motion";
import { FormValues } from "./page";

interface SubmitModalProps {
  stepCallback: Dispatch<SetStateAction<number>>;
  formCallback: (data: any) => void;
  loadData: () => FormValues;
}
const SubmitModal: React.FC<SubmitModalProps> = ({ stepCallback, formCallback,loadData }) => {
  const decrementParent = () => {
    stepCallback((s) => s - 1);
  };
  const svg = {
    animate: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const init = { pathLength: 0 };
  const handler = () => {
 console.log(loadData());
 
  };
  //hovers
  const [close, setClose] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [step, setstep] = useState(0);
  
  return (
    <div className={`${brytzone}_submit_modal`}>
      <div className="submit">
        <h2 className="">Confirmation Notice</h2>
        <p>After completing this step, there will be no way to revert changes. Any further modifications can only be made in the user settings.</p>
        <div className="submit_actions">
          <motion.span layout onHoverStart={() => setClose(true)} onHoverEnd={() => setClose(false)} className={`${brytzone}_sublink return`} onClick={decrementParent}>
            <AnimatePresence>
              {close && (
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <motion.path
                    animate={svg.animate}
                    exit={svg.exit}
                    initial={init}
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
            Return
          </motion.span>
          <motion.span layout onHoverStart={() => setProceed(true)} onHoverEnd={() => setProceed(false)} onClick={handler} className={`${brytzone}_sublink proceed`}>
            <AnimatePresence>
              {proceed && (
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <motion.path
                    animate={svg.animate}
                    exit={svg.exit}
                    initial={init}
                    d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                  />
                  <motion.path animate={svg.animate} exit={svg.exit} initial={init} d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </motion.svg>
              )}
            </AnimatePresence>
            Proceed
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;

