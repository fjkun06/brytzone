"use client";

import AddStudent from "@/utils/AddStudent";
import Header from "@/utils/Header";
import List, { StudentA } from "@/utils/List";
import { nanoid } from "nanoid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// export const metadata = {
//   title: "Ensome | Home",
//   description: "our proposed solutions to common digital problems",
// };

const Resources = () => {
  const t = useTranslations("dash");
  const path1 = usePathname();
  const title = "Class List";
  const [students, setStudents] = React.useState([
    { id: 1, name: "Clodia Delegue", present: true, matriculation: "CT22A184", status: 9 / 10 },
    { id: 2, name: "Romaric Delegue", present: true, matriculation: "CT22A023", status: 4 / 10 },
    { id: 3, name: "Ida Nen", present: false, matriculation: "CT22A257", status: 6 / 10 },
  ]);

  React.useEffect(() => {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setStudents(studentsFromServer);
    };

    getStudents();
  }, []);

  // get data from virtual server
  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchStudent = async (id: number) => {
    const res = await fetch(`http://localhost:5000/students/${id}`);
    const data = await res.json();

    return data;
  };

  // Delete Task
  const deleteStudent = async (id: number) => {
    await fetch(`http://localhost:5000/student/${id}`, { method: "DELETE" });
    setStudents(students.filter((student) => student.id !== id));
  };

  // Add Students
  const AddOneStudent = async (student: { name: string; present: boolean; matriculation: string }) => {
    const newStudent = { status: 1 / 10, ...student };
    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const data = await res.json();
    console.log(data);
    setStudents([...students, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  };
  // const deleteStudent = (key: number) => setStudents(students.filter(({ id }) => id !== key));
  const togglePresence = (ID: number) => {
    console.log("Check fired: ", ID);
    const newStudentList = [...students];
    console.log(newStudentList);

    const studentId = newStudentList.find(({ id }) => id === ID) as StudentA;
    studentId.present = !studentId.present;
    setStudents(newStudentList);
  };
  // const AddOneStudent = (student: { name: string; present: boolean; matriculation: string }) => {
  //   console.log("Student Added: ", student);
  //   const id = Math.random();
  //   // const id = Number(nanoid());
  //   console.log(id);
  //   const newStudent: StudentA = {
  //     id,
  //     status: 1 / 10,
  //     ...student,
  //   };

  //   setStudents([...students, newStudent]);
  // };
  return (
    <div className="container">
      <Header title={title} />
      <AddStudent onAdd={AddOneStudent} />
      {students.length > 0 ? <List students={students} onDelete={deleteStudent} onTogglePresence={togglePresence} /> : "No Student"}
    </div>
  );
};

export default Resources;
