import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import SearchIcon from "@/stories/components/SearchIcon";
import { nanoid } from "nanoid";
import Image from "next/image";
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
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="right">
        {...new Array(4).fill(4).map((_, i) => (
          <span className="" key={nanoid()}>
            {/* <Image style={{objectFit: "cover"}} src={`/hd/img${++i}.png`} alt='gallery_image' width={98} height={103} quality={100}/> */}
            <Image style={{ objectFit: "cover" }} src={`/sharp/${++i}.png`} alt="gallery_image" width={400} height={400} quality={100} />
          </span>
        ))}
        {...new Array(8).fill(8).map((_, i) => (
          <span className="" key={nanoid()}>
            {i === 1 && (
              <>
                <span>60+</span>
                <span>Projects</span>
              </>
            )}
            {i === 2 && (
              <>
                <span>40+</span>
                <span>Tutors</span>
              </>
            )}
            {i === 0 && (
              <>
                <span>200+</span>
                <span>Users</span>
              </>
            )}
          </span>
        ))}
        <span className="play">
          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28.5803" cy="28.0175" r="28.0175" fill="#0A518B" />
            <path
              d="M39.0676 27.5116L24.0383 18.6264C22.8171 17.9048 20.947 18.605 20.947 20.3898V38.1559C20.947 39.757 22.6848 40.722 24.0383 39.9193L39.0676 31.0384C40.4082 30.2485 40.4125 28.3015 39.0676 27.5116Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
