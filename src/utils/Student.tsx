import React from "react";
interface StudentProps {
  student: Student;
  onDelete: (id: number) => void;
  onTogglePresence: (id: number) => void;
}

interface Student {
  name: string;
  id: number;
  present: boolean;
  matriculation?: string;
  status: number;
}
const Student = ({ student, onDelete, onTogglePresence }: StudentProps) => {
  const { name, matriculation, id, status, present } = student;
  return (
    // <div className="task">
    //   <p style={{color:'green'}}>status: {status}</p>
    // </div>
    <span className="list">
      <span className="top">
        <h3>
          {name}
        </h3>
        <span onClick={() => onDelete(id)}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </span>
      </span>
      <span className="top">
        Available: <input placeholder="'" type="checkbox" checked={present} onChange={() => onTogglePresence(id)} />
      </span>

      <p style={{ color: "green" }}>Quantity: {status}</p>
    </span>
    // <span className="list">
    //   <span className="top">
    //     <h3>
    //       {matriculation} : {name}
    //     </h3>
    //     <span onClick={() => onDelete(id)}>
    //       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
    //       </svg>
    //     </span>
    //   </span>
    //   <span className="top">
    //     Available: <input placeholder="'" type="checkbox" checked={present} onChange={() => onTogglePresence(id)} />
    //   </span>

    //   <p style={{ color: "green" }}>Quantity: {status}</p>
    // </span>
  );
};

export default Student;
