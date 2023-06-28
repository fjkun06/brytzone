import React, { useState } from "react";
import Select from "react-select";

const LevelComponent = ({ setLevel }: { setLevel: (value: number) => void }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const options = [200, 300, 400, 450, 500, 600, 650, 700, 750, 800].map((value) => ({
    value: value,
    label: `${value}`,
  }));
  const handleOptionSelect = (selected: any) => {
    setSelectedOption(selected?.value || null);
    if (selected) {
      setLevel(selected.value);
      // console.log("updated level: " + selected.value);
    }
  };

  return (
    <div className="signup_level">
      <span>Level</span>
      <Select
        options={options}
        value={options.find((option) => option.value === selectedOption)}
        onChange={handleOptionSelect}
        placeholder="Select an option"
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default LevelComponent;
