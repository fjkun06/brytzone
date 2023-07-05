import React, { useState } from "react";
import Select from "react-select";

const LevelComponent = ({
  setLevel,
  data,
  title
}: {
  data: {
    value: string|number;
    label: string;
  }[];
  setLevel: (value: number|string) => void;
  title: string;

}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const handleOptionSelect = (selected: any) => {
    setSelectedOption(selected?.value || null);
    if (selected) {
      setLevel(selected.value);
      // console.log("updated level: " + selected.value);
    }
  };

  return (
    <div className="signup_level">
      <span>{title}</span>
      <Select
        options={data}
        value={data.find((option) => option.value === selectedOption)}
        onChange={handleOptionSelect}
        placeholder="Select an option"
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default LevelComponent;
