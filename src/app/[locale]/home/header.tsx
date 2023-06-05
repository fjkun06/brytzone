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
      <div className="center">
        {/* <svg id="b5647e2d-1b7d-4220-adbb-0abefa477ceb" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.38 30.5">
          <path d="M3,5l17,7L37,5" transform="translate(-2.81 -4.54)" fill="none" stroke="#000" stroke-miterlimit="10" />
          <path d="M3,12.5l17,7,17-7" transform="translate(-2.81 -4.54)" fill="none" stroke="#000" stroke-miterlimit="10" />
          <path d="M3,20l17,7,17-7" transform="translate(-2.81 -4.54)" fill="none" stroke="#000" stroke-miterlimit="10" />
          <path d="M3,27.5l17,7,17-7" transform="translate(-2.81 -4.54)" fill="none" stroke="#000" stroke-miterlimit="10" />
        </svg> */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="right"> right</div>
    </header>
  );
};

export default Header;
