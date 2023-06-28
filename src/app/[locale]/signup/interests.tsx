import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";

const colorOptions = [
  { value: "red", label: "Red", category: "red" },
  { value: "blue", label: "Blue", category: "blue" },
  { value: "green", label: "Green", category: "green" },
  { value: "yellow", label: "Yellow", category: "yellow" },
  { value: "orange", label: "Orange", category: "orange" },
];

const colourStyles: StylesConfig<any, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      background: data.category, // Use the category as the background color
      "&:before": {
        content: '""',
        display: "inline-block",
        width: "12px",
        height: "12px",
        marginRight: "8px",
        borderRadius: "50%",
        background: data.category, // Use the category as the background color
      },
    };
  },
};

const CustomSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };

  return <Select closeMenuOnSelect={false} isMulti options={colorOptions} value={selectedOptions} styles={colourStyles} onChange={handleOptionChange} />;
};

export default CustomSelect;
