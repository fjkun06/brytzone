import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
interface MenuProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} toggleNavbarState - Toggle menu state1.
  //  * @param {void} handler2 - Toggle menu state2.
   *
   *
   * */
  isOpen: boolean;
  toggleNavbarState: () => void;
  // handler1: () => void;
}
const Menu: React.FC<MenuProps> = ({ isOpen, toggleNavbarState }) => {
  const tester = useMediaQuery("(width > 1200px)");

  return (
    <>
      {!tester && (
        <span className="menu"
          onClick={() => {
            toggleNavbarState();
          }}
        >
          <svg width="230" height="180" viewBox="0 0 23 18">
            <Path
              d="M 2 2.5 L 20 2.5"
              vars={{
                open: {
                  d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
                  // d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
                },
                closed: {
                  d: "M 2 2.5 L 20 2.5",
                },
              }}
            />

            <Path
              d="M 2 9.423 L 20 9.423"
              vars={{
                open: {
                  scale: isOpen ? 0 : 1,
                },
                closed: {
                  scale: 0,
                },
              }}
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              vars={{
                open: {
                  d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
                },
                closed: {
                  d: "M 2 16.346 L 20 16.346",
                },
              }}
            />
          </svg>
        </span>
      )}
    </>
  );
};

export default Menu;

interface PathProps {
  /**
   * @param {string} d - Used to draw SVG path.
   * @param {any | undefined} vars - Set this to control animations.
   *
   *
   * */
  d: string;
  vars: any | undefined;
}

const Path: React.FC<PathProps> = ({ d, vars }) => {
  const variant: any = {};
  variant.open = Object.assign(vars.open, {
    transition: {
      duration: 0.35,
      // delay: 1,
    },
  });
  variant.closed = Object.assign(vars.closed, {
    transition: {
      duration: 0.35,
      // delay: 1,
    },
  });
  return <motion.path d={d} initial="closed" animate="open" stroke="#1968B7" variants={variant} />;
};
