import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface NavigatorProps {
  step: number;
  stepCallback: Dispatch<SetStateAction<number>>;
  completeCallback: Dispatch<SetStateAction<boolean>>;
}
const Navigator: React.FC<NavigatorProps> = ({ step, stepCallback, completeCallback }) => {
  //handle steps
  const increment = () => {
    if (step === 3) {
      completeCallback(true);
    }
    if (!(step >= 1 && step < 3)) {
      return;
    }

    stepCallback((s) => s + 1);
  };
  const decrement = () => {
    if (!(step > 1 && step <= 3)) {
      return;
    }
    completeCallback(false);

    stepCallback((s) => s - 1);
  };
  return (
    <motion.div  className="btns">
      <motion.button type="button" animate={{ opacity: step > 1 ? 1 : 0 }} onClick={decrement}>
        Back
      </motion.button>
      <motion.button type="button" onClick={increment}>
        Next
      </motion.button>
    </motion.div>
  );
};

export default Navigator;
