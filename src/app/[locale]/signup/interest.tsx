import React, { useState } from "react";

interface Interest {
  id: number;
  name: string;
  category: string;
}
interface AreaOfInterest {
  id: number;
  name: string;
  category: string;
}

interface SelectedAreaOfInterest {
  id: number;
  name: string;
  category: string;
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

const initialInterestsToShow = 10;

const AreaOfInterestSelector: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<SelectedAreaOfInterest[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchQuery(searchQuery);
  };

  const handleInterestClick = (interest: AreaOfInterest) => {
    setSearchQuery("");
    const alreadySelected = selectedInterests.find((selected) => selected.id === interest.id);
    if (!alreadySelected) {
      setSelectedInterests((prevSelected) => [...prevSelected, interest]);
    }
  };

  const handleRemoveInterest = (interest: SelectedAreaOfInterest) => {
    setSelectedInterests((prevSelected) => prevSelected.filter((selected) => selected.id !== interest.id));
  };

  const filteredInterests = allInterests.filter((interest) => interest.name.toLowerCase().includes(searchQuery));

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search Interests" />
      <div>
        {searchQuery.length > 0 &&
          filteredInterests.map((interest) => (
            <div key={interest.id}>
              <button type="button" onClick={() => handleInterestClick(interest)}>
                {interest.name}
              </button>
            </div>
          ))}
      </div>
      {selectedInterests.length > 0 && (
        <div>
          <h3>Areas of Interest:</h3>
          <ul>
            {selectedInterests.map((selected) => (
              <li key={selected.id}>
                <span>{selected.name}</span>
                <button type="button" onClick={() => handleRemoveInterest(selected)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AreaOfInterestSelector;
