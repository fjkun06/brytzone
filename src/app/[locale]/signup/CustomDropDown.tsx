'use client';
import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { CustomDropdownItem } from "./config";
import { AnimatePresence, motion } from "framer-motion";
import { genId } from "@/utils/config";

const MAX_SELECTIONS = 5;
const colourStyles: StylesConfig<any, true> = {};
interface CustomSelectDropdownProps{
  setter: (value: string[]) => void
  data: CustomDropdownItem
  heading:string
}
const CustomSelectDropdown:React.FC<CustomSelectDropdownProps> = ({ setter,data,heading }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOptionChange = (selectedOptions: any) => {
    if (selectedOptions.length <= MAX_SELECTIONS) {
      setSelectedOptions(selectedOptions);
      setErrorMessage("");
      setter(selectedOptions);
    } else {
      setErrorMessage(`Maximum ${MAX_SELECTIONS} selections allowed.`);
    }
  };

  return (
    <div className="signup_dropdown">
      <span>{heading}</span>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        closeMenuOnSelect={true}
        isMulti
        options={data}
        value={selectedOptions}
        styles={colourStyles}
        onChange={handleOptionChange}
        onBlur={() => setErrorMessage("")}
        id={genId()}
      />
      <AnimatePresence>
        {errorMessage && (
          <motion.p exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "red" }}>
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelectDropdown;
