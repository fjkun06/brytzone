import { brytzone } from "@/app/[locale]/home/header";
import React, { ReactNode } from "react";
interface Headingprops {
  children?: ReactNode;
  bordered?: boolean;
}
const Heading = ({ children, bordered }: Headingprops) => {
  const cName = bordered ? `${brytzone}_heading--bordered` : `${brytzone}_heading`;
  return (
    <h3 className={cName}>
      <span>{children}</span>
    </h3>
  );
};

export default Heading;
