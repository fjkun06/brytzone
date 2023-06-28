import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const options = Array.from({ length: 10 }, (_, index) => (index + 1) * 100);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef}>
      <div>
        <div>Selected Option: {selectedOption}</div>
        <button type="button" onClick={handleDropdownToggle} className="dropdown-toggle">
            Select an option
            <svg
              className={`dropdown-icon ${isOpen ? "open" : "closed"}`}
              viewBox="0 0 24 24"
              onClick={handleDropdownToggle}
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="dropdown"
        >
         
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="dropdown-list"
            >
              {options.map((option) => (
                <motion.li
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`dropdown-item ${selectedOption === option ? "active" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export default Dropdown;
