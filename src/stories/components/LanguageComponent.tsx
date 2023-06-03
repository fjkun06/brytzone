import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnglandIcon from "../layout/navbar/EnglandIcon";
import ExpandIcon from "../layout/navbar/ExpandIcon";

const LanguageComponent = () => {
  return (
    <motion.span className="brytzone_language">
      <span className="brytzone_language_container">
        <span className="icon ic_one">
          <EnglandIcon />
        </span>
        <span className="">English</span>
        <span className="icon ic_two">
          <ExpandIcon />
        </span>
      </span>
    </motion.span>
  );
};

export default LanguageComponent;
