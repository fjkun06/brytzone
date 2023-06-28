import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";

const colorOptions = [
  { category: "Technology", color: "red" },
  { category: "Design", color: "blue" },
  { category: "Business", color: "green" },
  { category: "Arts", color: "yellow" },
  { category: "Health", color: "orange" },
  { category: "Culinary", color: "purple" },
  { category: "Lifestyle", color: "teal" },
  { category: "Creative", color: "pink" },
];

interface AreaOfInterest {
  id: number;
  label?: string;
  category: string;
  name?: string;
}

const allInterests: AreaOfInterest[] = [
  { id: 1, name: "Web Development", category: "Technology" },
  { id: 2, name: "Mobile App Development", category: "Technology" },
  { id: 3, name: "Data Science", category: "Technology" },
  { id: 4, name: "Artificial Intelligence", category: "Technology" },
  { id: 5, name: "Machine Learning", category: "Technology" },
  { id: 6, name: "UI/UX Design", category: "Design" },
  { id: 7, name: "Graphic Design", category: "Design" },
  { id: 8, name: "Illustration", category: "Design" },
  { id: 9, name: "Product Management", category: "Business" },
  { id: 10, name: "Digital Marketing", category: "Business" },
  { id: 11, name: "Content Writing", category: "Business" },
  { id: 12, name: "Photography", category: "Arts" },
  { id: 13, name: "Videography", category: "Arts" },
  { id: 14, name: "Animation", category: "Arts" },
  { id: 15, name: "Game Development", category: "Arts" },
  { id: 16, name: "Fitness Training", category: "Health" },
  { id: 17, name: "Yoga Instruction", category: "Health" },
  { id: 18, name: "Nutrition Consulting", category: "Health" },
  { id: 19, name: "Cooking Classes", category: "Culinary" },
  { id: 20, name: "Baking and Pastry", category: "Culinary" },
  { id: 21, name: "Travel Blogging", category: "Lifestyle" },
  { id: 22, name: "Fashion Styling", category: "Lifestyle" },
  { id: 23, name: "Interior Design", category: "Lifestyle" },
  { id: 24, name: "Event Planning", category: "Lifestyle" },
  { id: 25, name: "Writing", category: "Creative" },
  { id: 26, name: "Painting", category: "Creative" },
  { id: 27, name: "Singing", category: "Creative" },
  { id: 28, name: "Acting", category: "Creative" },
  { id: 29, name: "Film Production", category: "Creative" },
  { id: 30, name: "Social Media Management", category: "Business" },
  { id: 31, name: "Financial Planning", category: "Business" },
  { id: 32, name: "Human Resources", category: "Business" },
  { id: 33, name: "Event Management", category: "Business" },
  { id: 34, name: "Copywriting", category: "Business" },
  { id: 35, name: "User Research", category: "Technology" },
  { id: 36, name: "Project Management", category: "Business" },
  { id: 37, name: "Leadership Development", category: "Business" },
  { id: 38, name: "Public Speaking", category: "Business" },
  { id: 39, name: "Blockchain Development", category: "Technology" },
  { id: 40, name: "Ethical Hacking", category: "Technology" },
  { id: 41, name: "Cybersecurity", category: "Technology" },
  { id: 42, name: "Robotics", category: "Technology" },
  { id: 43, name: "Fashion Design", category: "Design" },
  { id: 44, name: "Industrial Design", category: "Design" },
  { id: 45, name: "Textile Design", category: "Design" },
  { id: 46, name: "Creative Writing", category: "Creative" },
  { id: 47, name: "Poetry", category: "Creative" },
  { id: 48, name: "Storytelling", category: "Creative" },
  { id: 49, name: "Film-making", category: "Creative" },
  { id: 50, name: "Music Production", category: "Creative" },
];

const updatedInterests = allInterests.map((interest) => {
  const matchingColor = colorOptions.find((color) => color.category === interest.category);
  const color = matchingColor ? matchingColor.color : "";

  return { ...interest, label: interest.name, value: interest.name, color };
});

console.log(updatedInterests);

const MAX_SELECTIONS = 5;
const colourStyles: StylesConfig<any, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      background: `rgba(${data.color},0.5)`, // Use the category as the background color
      "&:before": {
        content: '""',
        display: "inline-block",
        width: "12px",
        height: "12px",
        marginRight: "8px",
        borderRadius: "50%",
        background: `rgba(${data.category},0.2)`, // Use the category as the background color
      },
    };
  },
};

const CustomSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOptionChange = (selectedOptions: any) => {
    if (selectedOptions.length <= MAX_SELECTIONS) {
      setSelectedOptions(selectedOptions);
      setErrorMessage("");
    } else {
      setErrorMessage(`Maximum ${MAX_SELECTIONS} selections allowed.`);
    }
  };

  return (
    <div className="signup_interest">
      <Select classNamePrefix="react-select" closeMenuOnSelect={true} isMulti options={updatedInterests} value={selectedOptions} styles={colourStyles} onChange={handleOptionChange} />;
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default CustomSelect;
