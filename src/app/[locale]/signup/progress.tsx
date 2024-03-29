import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { genId } from "@/utils/config";
interface Progressprops {
  step: number;
  completed: boolean;
}
const Progress: React.FC<Progressprops> = ({ step, completed }) => {
  //configs for animationd
  const check = {
    animate: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
    },
  };
  const line = {
    animate: {
      pathLength: 1,
      transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
    },
  };
  const circle = {
    animate: {
      pathLength: 1,
      transition: { delay: 1.05, duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const init = { pathLength: 0 };
  const mainAnim = {
    pathLength: 1,
  };

  //momoizing steps
  const [stepOne, setOne] = React.useState(step >= 2);
  const [stepTwo, setTwo] = React.useState(step >= 3);
  const s1 = React.useMemo(() => {
    return stepOne;
  }, [stepOne]);
  const s2 = React.useMemo(() => {
    return stepTwo;
  }, [stepTwo]);

  React.useEffect(() => {
    if (step >= 2) {
      setOne(true);
    }
    if (step < 2) {
      setOne(false);
    }
    if (step < 3) {
      setTwo(false);
    }
    if (step >= 3) {
      setTwo(true);
    }
  }, [step]);

  return (
    <span className="signup_progress">
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
        <defs>
          {/* <!-- Define a linear gradient for the night sky effect --> */}
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000022" />
            <stop offset="50%" stopColor="#001E3C" />
            <stop offset="100%" stopColor="#000022" />
          </linearGradient>
        </defs>
        <motion.g id="g1">
          <motion.circle className="placeholder" cx="100" cy="100" r="90" fill="none" stroke="#FBB606" strokeWidth="12" transform="scale(-1,-1) translate(-200,-200)" />
          <motion.circle initial={init} animate={mainAnim} cx="100" cy="100" r="90" fill="none" stroke="#FBB606" strokeWidth="12" transform="scale(-1,-1) translate(-200,-200)" />
          <AnimatePresence>{s1 && <motion.path initial={init} exit={check.exit} animate={check.animate} d="M50,100 L85,135 L150,70" stroke="#FBB606" strokeWidth="18" fill="none" />}</AnimatePresence>
        </motion.g>
        <motion.line className="placeholder" id="l1" x1="190" y1="100" x2="910" y2="100" stroke="url(#skyGradient)" strokeWidth="12" />

        <AnimatePresence>
          {s1 && <motion.line id="l1" initial={init} exit={line.exit} animate={line.animate} x1="190" y1="100" x2="910" y2="100" stroke="url(#skyGradient)" strokeWidth="12" />}
        </AnimatePresence>
        <motion.g id="g2">
          <motion.circle cx="490" cy="100" r="90" fill="none" stroke="#FBB606" className="placeholder" strokeWidth="12" transform="scale(-1,-1) translate(-985,-200)" />
          <AnimatePresence>
            {s2 && (
              <motion.circle
                initial={init}
                // exit={circle.exit}
                // animate={circle.animate}
                exit={{ pathLength: 0, transition: { delay: 1.5,duration: 0.5, ease: "easeInOut" } }}
                animate={{ pathLength: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
                cx="490"
                cy="100"
                r="90"
                fill="none"
                stroke="#FBB606"
                strokeWidth="12"
                transform="scale(-1,-1) translate(-985,-200)"
                key={genId()}
              />
            )}
            {s2 && (
              <motion.path
                key={genId()}
                d="M450,100 L485,135 L550,70"
                stroke="#FBB606"
                initial={init}
                // exit={check.exit} animate={check.animate}
                exit={{ pathLength: 0, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } }}
                animate={{ pathLength: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } }}
                strokeWidth="18"
                fill="none"
              />
            )}
          </AnimatePresence>
        </motion.g>
        <motion.line className="placeholder" id="l2" x1="590" y1="100" x2="1310" y2="100" stroke="#FBB606" strokeWidth="12" />

        <AnimatePresence>
          {s2 && (
            <motion.line
              id="l2"
              x1="590"
              y1="100"
              x2="1310"
              initial={init}
              // exit={line.exit} animate={line.animate}
              exit={{ pathLength: 0, transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } }}
              animate={{ pathLength: 1, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } }}
              y2="100"
              stroke="#FBB606"
              strokeWidth="12"
            />
          )}
        </AnimatePresence>
        <motion.g id="g3">
          <motion.circle
            cx="890"
            cy="100"
            r="90"
            fill="none"
            stroke="#FBB606"
            className="placeholder"
            // initial={init}
            // exit={circle.exit}
            // animate={circle.animate}
            strokeWidth="12"
            transform="scale(-1,-1) translate(-1790, -200)"
            key={genId()}
          />
          <AnimatePresence>
            {s2 && (
              <motion.circle
                cx="890"
                cy="100"
                r="90"
                fill="none"
                stroke="#FBB606"
                initial={init}
                // exit={circle.exit}
                // animate={circle.animate}
                exit={{ pathLength: 0, transition: {  duration: 0.5, ease: "easeInOut" } }}
                animate={{ pathLength: 1, transition: {delay: 1.5, duration: 0.5, ease: "easeInOut" } }}

                strokeWidth="12"
                transform="scale(-1,-1) translate(-1790, -200)"
                key={genId()}
              />
            )}
            {completed && (
              <motion.path
                initial={init}
                exit={{ pathLength: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                animate={{ pathLength: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
                d="M850,100 L885,135 L950,70"
                stroke="#FBB606"
                strokeWidth="18"
                fill="none"
                key={genId()}
              />
            )}
          </AnimatePresence>
        </motion.g>
      </motion.svg>
    </span>
  );
};

export default Progress;
