import React, { useState } from "react";

interface Skill {
  id: number;
  name: string;
  category: string;
}

const skillsList: Skill[] = [
  // Frontend
  { id: 1, name: "JavaScript", category: "Frontend" },
  { id: 2, name: "TypeScript", category: "Frontend" },
  { id: 3, name: "React", category: "Frontend" },
  { id: 4, name: "Angular", category: "Frontend" },
  { id: 5, name: "Vue.js", category: "Frontend" },
  { id: 6, name: "HTML5", category: "Frontend" },
  { id: 7, name: "CSS3", category: "Frontend" },
  { id: 8, name: "Sass/SCSS", category: "Frontend" },
  { id: 9, name: "Bootstrap", category: "Frontend" },
  { id: 10, name: "Tailwind CSS", category: "Frontend" },
  { id: 11, name: "Material-UI", category: "Frontend" },
  { id: 12, name: "Responsive Web Design", category: "Frontend" },
  { id: 13, name: "Accessibility", category: "Frontend" },
  { id: 14, name: "UX/UI Design", category: "Frontend" },

  // Backend
  { id: 15, name: "Node.js", category: "Backend" },
  { id: 16, name: "Express.js", category: "Backend" },
  { id: 17, name: "Next.js", category: "Backend" },
  { id: 18, name: "Django", category: "Backend" },
  { id: 19, name: "Ruby on Rails", category: "Backend" },
  { id: 20, name: "ASP.NET", category: "Backend" },
  { id: 21, name: "PHP", category: "Backend" },
  { id: 22, name: "Go", category: "Backend" },
  { id: 23, name: "Serverless Architecture", category: "Backend" },

  // Databases
  { id: 24, name: "SQL", category: "Databases" },
  { id: 25, name: "NoSQL", category: "Databases" },
  { id: 26, name: "PostgreSQL", category: "Databases" },
  { id: 27, name: "MySQL", category: "Databases" },
  { id: 28, name: "MongoDB", category: "Databases" },
  { id: 29, name: "Firebase", category: "Databases" },

  // DevOps
  { id: 30, name: "Docker", category: "DevOps" },
  { id: 31, name: "Kubernetes", category: "DevOps" },
  { id: 32, name: "AWS (Amazon Web Services)", category: "DevOps" },
  { id: 33, name: "Azure", category: "DevOps" },
  { id: 34, name: "Google Cloud Platform (GCP)", category: "DevOps" },
  { id: 35, name: "Git", category: "DevOps" },
  { id: 36, name: "Jenkins", category: "DevOps" },
  { id: 37, name: "Travis CI", category: "DevOps" },
  { id: 38, name: "CircleCI", category: "DevOps" },

  // Mobile
  { id: 39, name: "React Native", category: "Mobile" },
  { id: 40, name: "Flutter", category: "Mobile" },
  { id: 41, name: "Xamarin", category: "Mobile" },

  // Data Science
  { id: 42, name: "Machine Learning", category: "Data Science" },
  { id: 43, name: "Artificial Intelligence", category: "Data Science" },
  { id: 44, name: "Data Science", category: "Data Science" },
  { id: 45, name: "Big Data", category: "Data Science" },

  // Other Skills
  { id: 46, name: "Java", category: "Other Skills" },
  { id: 47, name: "Python", category: "Other Skills" },
  { id: 48, name: "C#", category: "Other Skills" },
  // Add more skills here...
];

const SkillsComponent: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSkillClick = (skill: Skill) => {
    setSearchQuery('')

    if (selectedSkills.find((selected) => selected.id === skill.id)) {
      // Skill already selected, remove it
      setSelectedSkills((prevSkills) => prevSkills.filter((selected) => selected.id !== skill.id));
    } else {
      // Skill not selected, add it
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter skills based on the search query
  // const filteredSkills = skillsList.filter((skill) =>
  //  skill.name.toLowerCase().includes(searchQuery.toLowerCase()) && selectedSkills?.some((sk) => sk.name !== skill.name)
  //  );

  const filteredSkills = skillsList.filter((skill) =>
  skill.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  !selectedSkills?.some((selectedSkill) => selectedSkill.name === skill.name)
);

  return (
    <div>
      <h2>Skills</h2>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search skill..." />
      <div>
        {searchQuery.length > 0 &&
          filteredSkills.map((skill) => (
            <button type="button" key={skill.id} onClick={() => handleSkillClick(skill)} className={selectedSkills.find((selected) => selected.id === skill.id) ? "selected" : ""}>
              {skill.name}
            </button>
          ))}
      </div>
      {selectedSkills.length > 0 && (
        <>
          <h3>Selected Skills:</h3>
          <ul>
            {selectedSkills.map((selectedSkill) => (
              <li key={selectedSkill.id}>
                {selectedSkill.name}
                <button type="button" onClick={() => setSelectedSkills((prevSkills) => prevSkills.filter((selected) => selected.id !== selectedSkill.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SkillsComponent;
