import React from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { motion } from "framer-motion";

const Start = () => {
  return (
    <section className={`${brytzone}_home-start`}>
      <Heading bordered>Get to know us by chosing a starting point</Heading>
      <p>We offer a wide range of varieties such as internships, polls,chats, projects to to make you grow and so much more...</p>
      <motion.div className="card_parent" viewport={{ once: true, amount: "all" }} onViewportEnter={() => console.log("fully in veiw")}>
        <div className="card_item" id="one">
          <svg>
            <defs>
              <linearGradient id={`paint0`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
                {/* <stop offset="0.0136853" stopColor="#3277AF" stopOpacity="0.65"/>
      <stop offset="0.871402" stopColor="#0A518B"  />  */}
                <stop offset="0.0136853" stopColor="#fff">
                  <animate attributeName="stop-color" to="#0A518B" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} />
                  <animate attributeName="stop-color" from="#0A518B" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} />
                </stop>
                <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65">
                  <animate attributeName="stop-color" to="#3277AF" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseenter`} end={`one.mouseleave`} />
                  <animate attributeName="stop-color" from="#3277AF" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`one.mouseleave`} />
                </stop>
              </linearGradient>
            </defs>
            <rect fill="url(#paint0)"/>
          </svg>
          <article>
            <span>icon</span>
            <span>title</span>
            <span>Text</span>
            <span>icon</span>
          </article>
        </div>
        <div className="card_item" id="two">
          <svg>
            <defs>
              <linearGradient id={`paint1`} x1="205" y1="46.9018" x2="236" y2="449.902" gradientUnits="userSpaceOnUse">
                {/* <stop offset="0.0136853" stopColor="#3277AF" stopOpacity="0.65"/>
      <stop offset="0.871402" stopColor="#0A518B"  />  */}
                <stop offset="0.0136853" stopColor="#fff">
                  <animate attributeName="stop-color" to="#0A518B" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`two.mouseenter`} end={`one.mouseleave`} />
                  <animate attributeName="stop-color" from="#0A518B" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`two.mouseleave`} />
                </stop>
                <stop offset="0.871402" stopColor="#fff" stopOpacity="0.65">
                  <animate attributeName="stop-color" to="#3277AF" from="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`two.mouseenter`} end={`one.mouseleave`} />
                  <animate attributeName="stop-color" from="#3277AF" to="#fff" dur="0.5s" repeatCount="1" fill="freeze" begin={`two.mouseleave`} />
                </stop>
              </linearGradient>
            </defs>
            <rect fill="url(#paint1)"/>
          </svg>
          <article>
            <span>icon</span>
            <span>title</span>
            <span>Text</span>
            <span>icon</span>
          </article>
        </div>
      </motion.div>
    </section>
  );
};

export default Start;
