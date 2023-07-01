import { backendPort } from "@/utils/config";

interface AreaOfInterest {
  id: number;
  label?: string;
  category: string;
  name: string;
  value?: string;
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
export interface Skill {
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
const sortedInterests = allInterests.sort((a, b) => a?.name.localeCompare(b?.name));
const sortedSkills = skillsList.sort((a, b) => a?.name.localeCompare(b?.name));
export const updatedInterests = sortedInterests.map((interest) => {
  return { label: interest.name, value: interest.name, category: interest.category };
});
export const updatedSkills = sortedSkills.map((interest) => {
  return { label: interest.name, value: interest.name, category: interest.category };
});

export type CustomDropdownItem = typeof updatedInterests;

export const resend = async () => {
  try {
    const res = await fetch(`http://localhost:${backendPort}/resend`, {
      credentials: "include",
    });

    const datum = await res.json();
    console.log(datum);
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyOTP = async (otp: string) => {
  const data = { otp: "" };
  data.otp = otp;

  //reset errors
  // setOTPError("");
  try {
    const res = await fetch(`http://localhost:${backendPort}/signup/verify`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ otp }),
      headers: { "Content-Type": "application/json" },
    });
    // const res = await fetch(`http://localhost:${backendPort}/login`, {
    //   credentials: "include",
    // });
    // const res = await fetch(`http://localhost:${backendPort}/signup/verify`, {
    //   credentials: "include",
    // });
    const datum = await res.json();
    console.log(datum);
    // if (datum.errors) {
    //   setEmailError(datum.errors.email);
    //   setPasswordError(datum.errors.password);
    // }
    if (datum.user) {
      // location.assign("/login");
      console.log(datum.user);
    }
  } catch (error: any) {
    console.log(error);
  }
};

/*********************************User interface******************************** */
interface Group {
  label: string;
  category: string;
  value?: string;
}

export interface DatabaseUserProps {
  otp?: string;
  active: boolean;
  resendAttempts: number;
  lastResendDate: Date;
  loginAttempts: number;
  lastLoginDate: Date;
}
export interface User extends DatabaseUserProps {
  matricule: string;
  name: string;
  username: string;
  password: string;
  level: number;
  email: string;
  skills: Group[];
  interests: Group[];
  picture: string;
  uname:string
}