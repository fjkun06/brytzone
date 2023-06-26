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
import Link from "next-intl/link";

const LanguageComponent = () => {
  const [hover, setHover] = React.useState(false);
  const mainRegex = /^\/(?!(?:fr|de)$)(?!fr\/|de\/)[a-zA-Z]*$/;
  const languages = [
    {
      icon: <EnglandIcon />,
      abbrev: "en",
      regex: mainRegex,
    },
    {
      icon: <FranceIcon />,
      abbrev: "fr",
      regex: /^\/fr(\/.*)?$/,
    },
    {
      icon: <GermanyIcon />,
      abbrev: "de",
      regex: /^\/de(\/.*)?$/,
    },
  ];
  const t = useTranslations("navbar");
  const path = usePathname();
  const href = path.length > 3 ? mainRegex.test(path) ? path.slice(0 - path.length) : path.slice(3 - path.length): "/"

  return (
    <motion.span
      layout
      className="brytzone_language"
      animate={{ height: hover ? "100px" : "", y: hover ? "30px" : "0px" }}
      onHoverEnd={() => setHover(false)}
      onClick={() => setHover(!hover)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.span layout className="brytzone_language_container" style={{ justifyContent: hover ? "flex-start !important" : "center" }}>
        <>
          {languages.map(({ icon, abbrev, regex }) => {
            if (regex.test(path)) {
              return (
                <motion.span layout className="row" key={nanoid()}>
                  <span className="icon ic_one">{icon}</span>
                  <span className="">
                    <LanguageLink to={abbrev} text={t(abbrev)} path={href} />
                  </span>
                  <span className="icon ic_two">{hover ? <CollapseIcon /> : <ExpandIcon />}</span>
                </motion.span>
              );
            }
          })}
        </>

        <AnimatePresence>
          {hover && (
            <>
              {languages.map(({ icon, abbrev, regex }) => {
                if (regex.test(path)) {
                  return;
                }
                return (
                  <motion.span transition={{ delay: 0, duration: 0.15, ease: "easeInOut" }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="row" key={nanoid()}>
                    <span className="icon ic_one">{icon}</span>
                    <span className="">
                      <LanguageLink path={href} to={abbrev} text={t(abbrev)} />
                    </span>
                  </motion.span>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.span>
  );
};

export default LanguageComponent;
