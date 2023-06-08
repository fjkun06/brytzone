import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import SearchIcon from "@/stories/components/SearchIcon";
import { nanoid } from "nanoid";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
export const brytzone = "brytzone";
const Header = () => {
  const [value, setValue] = React.useState(undefined);
  const Counter = dynamic(() => import("@/utils/Counter"), {
    loading: () => <p>{headerT('counter')}</p>,
  });
  const headerT = useTranslations("header")
  return (
    <header className={`${brytzone}_home-header`}>
      <div className="left">
        <div className="">
          <h1>
            <span className="header_bold">{headerT("join")}</span>{" "}
            {headerT("today")}{" "}
            <span className="header_bold">{headerT("solid")}</span>{" "}
            {headerT("future")} <span className="header_bold">Brytzone</span>
            <span className="header_bold dots">...</span>
          </h1>
          <p>{headerT("did")}</p>
        </div>

        <div className="header_action">
          <Button icon={<IconForward />} category="content">
            {headerT("get")}
          </Button>
          <div className="header_search">
            <span className="">
              <SearchIcon />
              <input
                type="text"
                placeholder={headerT('what')}
                value={value}
              />
            </span>

            <Button category="search">{headerT('search')}</Button>
          </div>
        </div>
        <div className="header_blob">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(238, 205, 163)" />
                <stop offset="100%" stopColor="rgb(239, 98, 159)" />
              </linearGradient>
            </defs>
            <path id="blob" fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
              />
            </path>
          </svg>
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
            <Image
              style={{ objectFit: "cover" }}
              src={`/home/sharp/${++i}.webp`}
              alt="gallery_image"
              width={400}
              height={400}
              quality={100}
            />
          </span>
        ))}
        {...new Array(11).fill(11).map((_, i) => (
          <span className="" key={nanoid()}>
            {i === 1 && (
              <>
                {/* <span>60+</span> */}
                <Counter countEnd={60} text="+" duration={2} />
                <span>{headerT('projects')}</span>
              </>
            )}
            {i === 2 && (
              <>
                <Counter countEnd={40} text="+" duration={2} />
                <span>{headerT('tutors')}</span>
              </>
            )}
            {i === 0 && (
              <>
                <Counter countEnd={200} text="+" />
                <span>{headerT('users')}</span>
              </>
            )}
          </span>
        ))}
        <span className="play">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
