import { nanoid } from "nanoid";
import React from "react";
import Student from "./Student";
interface ListProps {
  products: StudentA[];
  onDelete: (id: number) => void;
  onTogglePresence: (id: number) => void;
}

export interface StudentA {
  name: string;
  id: number;
  availabilty: boolean;
  matriculation: string;
  quantity: number;
}
// export interface StudentA {
//   name: string;
//   id: number;
//   present: boolean;
//   matriculation: string;
//   status: number;
// }
const List = ({ products, onDelete,onTogglePresence }: ListProps) => {
  return (
    <>
      {products.map((product) => (
        <Student key={nanoid()} product={product} onDelete={onDelete} onTogglePresence={onTogglePresence} />
      ))}
    </>
  );
};
// const List = ({ students, onDelete,onTogglePresence }: ListProps) => {
//   return (
//     <>
//       {students.map((student) => (
//         <Student key={nanoid()} student={student} onDelete={onDelete} onTogglePresence={onTogglePresence} />
//       ))}
//     </>
//   );
// };

export default List;
