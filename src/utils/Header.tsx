import React from "react";
import Button from "./Button";
import { nanoid } from "nanoid";
interface HeaderProps {
  title: string;
}
const Header = ({ title = "Students Follow Up" }: HeaderProps) => {
  const headerStyle = {
    color: "red",
    backgroundColor: "lightblue",
  };
  const onClickAdd = () => console.log("clicked Add");
  const onClickDelete = () => console.log("clicked Delete");
  const onClickCancel = () => console.log("clicked Cancel");
  const onClickFlush = () => console.log("clicked Flush");

  const args = [
    {
      color: "green",
      text: "add",
      onClick: onClickAdd,
    },
    {
      color: "red",
      text: "flush",
      onClick: onClickFlush,
    },
    // {
    //   color: "gray",
    //   text: "cancel",
    //   onClick: onClickCancel,
    // },
  ];

  return (
    <header className="header">
      <h1 >{title}</h1>
      {/* <h1 style={headerStyle}>{title}</h1> */}
  {
    args.map((props) => <Button key={nanoid()} {...props}/>)
  }
    </header>
  );
};

export default Header;
