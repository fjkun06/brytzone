import React, { ReactNode } from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { motion } from "framer-motion";
import DoubleArrowIcon from "@/stories/components/DoubleArrowIcon";
import Image from "next/image";
import PollsIcon from "@/stories/components/PollsIcon";
import InternshipIcon from "@/stories/components/InternshipIcon";
import ProjectIcon from "@/stories/components/ProjectIcon";
interface StartCardProps {
  id: number | string;
  children?: string;
  icon: ReactNode;
  title?: string;
}
const StartCardItem = ({ id, icon, children, title }: StartCardProps) => {
  return (
    <div className="card_item">
      <svg>
        <defs>
          <linearGradient id={`paint_${id}`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
            <stop offset="0.0136853" stopColor="#fff" />
            <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <rect fill={`url(#paint_${id})`} className="paint" />
      </svg>
      <article>
        <span>
        {icon}
        </span>
        <span> {title ?? "Projects"} </span>
        <span>{children} </span>
        <span>
          <DoubleArrowIcon />
        </span>
      </article>
    </div>
  );
};

const Start = () => {
  return (
    <section className={`${brytzone}_home-start`}>
      <Heading bordered>Get to know us by chosing a starting point</Heading>
      <p>We offer a wide range of varieties such as internships, polls,chats, projects to to make you grow and so much more...</p>
      <motion.div className="card_parent" viewport={{ once: true, amount: "all" }} onViewportEnter={() => console.log("fully in veiw")}>
        <StartCardItem id='htag' title="Projects" icon={<ProjectIcon/>} >
          hello
        </StartCardItem>
        <div className="card_item">
          <svg>
            <defs>
              <linearGradient id={`paint2`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
                {/* <stop offset="0.0136853" stopColor="#3277AF" stopOpacity="0.65"/>
      <stop offset="0.871402" stopColor="#0A518B"  />  */}
                <stop offset="0.0136853" stopColor="#fff">
                  {/* <animate attributeName="stop-color" to="#0A518B" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} /> */}
                  {/* <animate attributeName="stop-color" from="#0A518B" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} /> */}
                </stop>
                <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65">
                  {/* <animate attributeName="stop-color" to="#3277AF" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} /> */}
                  {/* <animate attributeName="stop-color" from="#3277AF" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} /> */}
                </stop>
              </linearGradient>
            </defs>
            <rect fill="url(#paint2)" className="paint" />
          </svg>
          <article>
            <span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                <g id="acc1b77b-4430-418f-8b7c-ff986824eb7a" data-name="p5">
                  <path
                    d="M56.67,64.15H16.59a.47.47,0,0,1-.17,0c-1.61-.65-1.26-3.12.08-3.12H68.16c1.45,0,1.45,3.15,0,3.15H59.9"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M26.3,49.35V47.23a.6.6,0,0,0-.6-.6l-4.84,0a.6.6,0,0,0-.6.6L20.22,61l6,0,0-7.83" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M20.09,37.94h6a1,1,0,0,1,1,1v2.81A1.12,1.12,0,0,1,26,42.87H20.09A1.12,1.12,0,0,1,19,41.75V39.06A1.12,1.12,0,0,1,20.09,37.94Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <circle cx="23.05" cy="32.79" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <circle cx="61.77" cy="12.94" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M58.81,18.09h6a1,1,0,0,1,1,1V21.9A1.12,1.12,0,0,1,64.73,23H58.81a1.12,1.12,0,0,1-1.12-1.12V19.21A1.12,1.12,0,0,1,58.81,18.09Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M64.7,37.94V61h-6V27.17a.6.6,0,0,1,.6-.6h4.8a.6.6,0,0,1,.6.6v7.7" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M45.7,27.88h6a1,1,0,0,1,1,1v2.81a1.12,1.12,0,0,1-1.12,1.12H45.7a1.12,1.12,0,0,1-1.12-1.12V29A1.12,1.12,0,0,1,45.7,27.88Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <circle cx="48.67" cy="22.73" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path d="M45.59,61V37.51a1,1,0,0,1,1-1h4.13a1,1,0,0,1,1,1V61" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <circle cx="35.91" cy="37.81" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M33,43h6a1,1,0,0,1,1,1v2.81a1.12,1.12,0,0,1-1.12,1.12H33a1.12,1.12,0,0,1-1.12-1.12V44.08A1.12,1.12,0,0,1,33,43Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M32.59,61V52.72a1,1,0,0,1,1-1h4.56a1,1,0,0,1,1,1V61" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                </g>
              </svg> */}
              <InternshipIcon />
            </span>
            <span>Projects</span>
            <span>We help grow your skills by letting you create personal and team projects </span>
            <span>
              <DoubleArrowIcon />
            </span>
          </article>
        </div>
        <div className="card_item">
          <svg>
            <defs>
              <linearGradient id={`paint20`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
                {/* <stop offset="0.0136853" stopColor="#3277AF" stopOpacity="0.65"/>
      <stop offset="0.871402" stopColor="#0A518B"  />  */}
                <stop offset="0.0136853" stopColor="#fff">
                  {/* <animate attributeName="stop-color" to="#0A518B" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} /> */}
                  {/* <animate attributeName="stop-color" from="#0A518B" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} /> */}
                </stop>
                <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65">
                  {/* <animate attributeName="stop-color" to="#3277AF" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} /> */}
                  {/* <animate attributeName="stop-color" from="#3277AF" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} /> */}
                </stop>
              </linearGradient>
            </defs>
            <rect fill="url(#paint20)" className="paint" />
          </svg>
          <article>
            <span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                <g id="acc1b77b-4430-418f-8b7c-ff986824eb7a" data-name="p5">
                  <path
                    d="M56.67,64.15H16.59a.47.47,0,0,1-.17,0c-1.61-.65-1.26-3.12.08-3.12H68.16c1.45,0,1.45,3.15,0,3.15H59.9"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M26.3,49.35V47.23a.6.6,0,0,0-.6-.6l-4.84,0a.6.6,0,0,0-.6.6L20.22,61l6,0,0-7.83" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M20.09,37.94h6a1,1,0,0,1,1,1v2.81A1.12,1.12,0,0,1,26,42.87H20.09A1.12,1.12,0,0,1,19,41.75V39.06A1.12,1.12,0,0,1,20.09,37.94Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <circle cx="23.05" cy="32.79" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <circle cx="61.77" cy="12.94" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M58.81,18.09h6a1,1,0,0,1,1,1V21.9A1.12,1.12,0,0,1,64.73,23H58.81a1.12,1.12,0,0,1-1.12-1.12V19.21A1.12,1.12,0,0,1,58.81,18.09Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M64.7,37.94V61h-6V27.17a.6.6,0,0,1,.6-.6h4.8a.6.6,0,0,1,.6.6v7.7" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M45.7,27.88h6a1,1,0,0,1,1,1v2.81a1.12,1.12,0,0,1-1.12,1.12H45.7a1.12,1.12,0,0,1-1.12-1.12V29A1.12,1.12,0,0,1,45.7,27.88Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <circle cx="48.67" cy="22.73" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path d="M45.59,61V37.51a1,1,0,0,1,1-1h4.13a1,1,0,0,1,1,1V61" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <circle cx="35.91" cy="37.81" r="2.51" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                  <path
                    d="M33,43h6a1,1,0,0,1,1,1v2.81a1.12,1.12,0,0,1-1.12,1.12H33a1.12,1.12,0,0,1-1.12-1.12V44.08A1.12,1.12,0,0,1,33,43Z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                  />
                  <path d="M32.59,61V52.72a1,1,0,0,1,1-1h4.56a1,1,0,0,1,1,1V61" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" />
                </g>
              </svg> */}
              <InternshipIcon />
            </span>
            <span>Projects</span>
            <span>We help grow your skills by letting you create personal and team projects </span>
            <span>
              <DoubleArrowIcon />
            </span>
          </article>
        </div>
      </motion.div>
    </section>
  );
};

export default Start;
