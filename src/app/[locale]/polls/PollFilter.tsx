import ChevronArrowDownIcon from "@/stories/components/ChevronArrowDownIcon";
import ChevronArrowUpIcon from "@/stories/components/ChevronArrowUpIcon";
import { AnimatePresence, motion } from "framer-motion";
import { genId } from "@/utils/config";

interface PollFilterprops {
  title: "Department" | "Choose Level" | "Select Semester";
  isOpen: boolean;
  toggler: () => void;
  update: (filter: string, value: string) => void;
  filter: "department" | "semester" | "level";
  data: string[];
}
export const PollFilter: React.FC<PollFilterprops> = ({ title, isOpen, toggler, update, filter, data }) => {
  const test = (e: React.MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    console.log(element.textContent);
    if (element?.textContent?.includes("Department")) {
      console.log(element.textContent.split(" ")[0].toLowerCase());
      update(filter, element.textContent.split(" ")[0].toLowerCase());
    } else {
      update(filter, element?.textContent as string);
    }
  };

  return (
    <motion.div className="filter" onClick={toggler}>
      {title ?? "Title Here"} {isOpen ? <ChevronArrowUpIcon /> : <ChevronArrowDownIcon />}
      <AnimatePresence>
        {isOpen && (
          <motion.ul onMouseLeave={toggler} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.25 }} className="filter-dropdown">
            {data.map((d) => (
              <li onClick={test} key={genId()}>
                {d}
              </li>
            ))}
   
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PollFilter