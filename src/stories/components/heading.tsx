import { brytzone } from "@/app/[locale]/home/header";
import React, { ReactNode } from "react";
interface Headingprops {
  children?: ReactNode;
  bordered?: boolean;
}
const Heading = ({ children, bordered }: Headingprops) => {
  return (
    <h3 className={`${brytzone}_heading`}>
      <span>{children}</span>
    </h3>
  );
};

export default Heading;
