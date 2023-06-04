import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnglandIcon from "../layout/navbar/EnglandIcon";
import ExpandIcon from "../layout/navbar/ExpandIcon";
import CollapseIcon from "../layout/navbar/CollapseIcon";
import { nanoid } from "nanoid";
import FranceIcon from "../layout/navbar/FranceIcon";
import GermanyIcon from "../layout/navbar/GermanyIcon";
import { LanguageLink } from "../layout/navbar/NavLink";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface LanguageProps {
  lang: string;
}

const LanguageComponent: React.FC<LanguageProps> = ({ lang }) => {
  const [hover, setHover] = React.useState(false);
  const languages = [
    {
      icon: <EnglandIcon />,
      abbrev: "/",
    },
    {
      icon: <FranceIcon />,
      abbrev: "/fr",
    },
    {
      icon: <GermanyIcon />,
      abbrev: "/de",
    },
  ];
  const t = useTranslations("navbar");
  const path = usePathname();

  return (
    <motion.span layout className="brytzone_language" animate={{ height: hover ? "100px" : "", y: hover ? "30px" : "0px" }} onHoverEnd={() => setHover(false)} onClick={() => setHover(!hover)}>
      <motion.span layout className="brytzone_language_container" style={{ justifyContent: hover ? "flex-start !important" : "center" }}>
        <motion.span layout className="row">
          <>
            {languages.map(({ icon, abbrev }) => {
              if (path === abbrev) {
                return (
                  <>
                    <span className="icon ic_one">{icon}</span>
                    <span className="">
                      <LanguageLink to={abbrev === "/" ? "/en" : abbrev} text={t(abbrev === "/" ? "en" : abbrev.slice(-2))} />
                    </span>
                  </>
                );
              }
            })}
          </>

          <span className="icon ic_two">{hover ? <CollapseIcon /> : <ExpandIcon />}</span>
        </motion.span>

        <AnimatePresence>
          {hover && (
            <>
              {languages.map(({ icon, abbrev }) => {
                if (path !== abbrev) {
                  const temp = abbrev === "/" ? "en" : abbrev.slice(-2);
                  return (
                    <motion.span transition={{ delay: 0, duration: 0.15, ease: "easeInOut" }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="row" key={nanoid()}>
                      <span className="icon ic_one">{icon}</span>
                      <span className="">
                        <LanguageLink to={temp} text={t(temp)} />
                      </span>
                    </motion.span>
                  );
                }
              })}
            </>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.span>
  );
};

export default LanguageComponent;
