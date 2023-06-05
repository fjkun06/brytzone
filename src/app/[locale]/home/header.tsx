import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import SearchIcon from "@/stories/components/SearchIcon";
import React from "react";
export const brytzone = "brytzone";
const Header = () => {
  const [value, setValue] = React.useState(undefined);
  return (
    <header className={`${brytzone}_home-header`}>
      <div className="left">
        <div className="">
          <h1>
            <span className="header_bold">Join</span> Today and Build a <span className="header_bold">Solid </span>Future with <span className="header_bold">Brytzone</span>
            <span className="header_bold dots">...</span>
          </h1>
          <p>Did you know you can get real school experience with Brytzone? Not just that, but building a better you....</p>
        </div>

        <div className="header_action">
          <Button icon={<IconForward />} category="content">
            Get Started
          </Button>
          <div className="header_search">
            <span className="">
              <SearchIcon />
              <input type="text" placeholder="What are you looking for?...." value={value} />
            </span>

            <Button category="search">Search</Button>
          </div>
        </div>
      </div>
      <div className="center">center</div>
      <div className="right"> right</div>
    </header>
  );
};

export default Header;
