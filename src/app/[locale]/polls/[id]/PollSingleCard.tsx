import CheckSquareIcon from '@/stories/components/CheckSquareIcon';
import React from 'react'

interface AnswerProps {
  value: boolean;
  module: "module1" | "module2" | "module3" | "module4" | "module5";
}
interface PollSingleCardItemProps extends AnswerProps {
  title?: "Department" | "Choose Level" | "Select Semester";
  index: number;
  update: (module: string, value: boolean) => void;
}
export const PollSingleCardItem: React.FC<PollSingleCardItemProps> = ({ value, module, update, index }:PollSingleCardItemProps) => {
// export const PollSingleCardItem: React.FC<PollSingleCardItemProps> = ({ value, module, update, index }) => {
  const handleUpdate = (val: boolean) => {
    update(module, val);
  };
  return (
    <div className="card">
      <span className="index">{index}</span>
      <article>
        <h2>Module {index}: Introduction To Embedded Systems</h2>
        <p>This module had a brief review of what embedded systems are really</p>
        <div className="choice">
          <span className="question">Do you have a problem with this Module?</span>
          <div className="options">
            <div className={value ? "active" : ""} onClick={() => handleUpdate(true)}>
              <CheckSquareIcon />
              Yes
            </div>
            <div className={value ? "" : "active"} onClick={() => handleUpdate(false)}>
              <CheckSquareIcon />
              No
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default PollSingleCardItem;
