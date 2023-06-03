import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnglandIcon from "../layout/navbar/EnglandIcon";
import ExpandIcon from "../layout/navbar/ExpandIcon";
import { nanoid } from "nanoid";

const LanguageComponent = () => {
  const [hover, setHover] = React.useState(true);
  console.log(hover);

  return (
    <motion.span layout className="brytzone_language" animate={{ height: hover ? "100px" : "", y: hover ? "30px" : "0px" }} onHoverEnd={() => setHover(false)} onClick={() => setHover(!hover)}>
      <motion.span layout className="brytzone_language_container" style={{justifyContent: hover? "flex-start !important" : "center"}}>
        <motion.span layout className="row">
          <span className="icon ic_one">
            <EnglandIcon />
          </span>
          <span className="">English</span>
          <span className="icon ic_two">
            <ExpandIcon />
          </span>
        </motion.span>
        {/* <span className="row" key={nanoid()}>
                <span className="icon ic_one">
                  <EnglandIcon />
                </span>
                <span className="">English</span>
              </span>
              <span className="row" key={nanoid()}>
                <span className="icon ic_one">
                  <EnglandIcon />
                </span>
                <span className="">English</span>
              </span> */}
        <AnimatePresence>
          {hover && (
            <>
              <motion.span transition={{ delay: 0, duration: 0.15, ease: "easeInOut" }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="row" key={nanoid()}>
                <span className="icon ic_one">
                  <EnglandIcon />
                </span>
                <span className="">English</span>
              </motion.span>
              <motion.span initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0, duration: 0.15, ease: "easeInOut" }} className="row" key={nanoid()}>
                <span className="icon ic_one">
                  <EnglandIcon />
                </span>
                <span className="">English</span>
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.span>
  );
};

export default LanguageComponent;
