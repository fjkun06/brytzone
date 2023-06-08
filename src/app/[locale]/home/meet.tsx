"use client";
import Heading from "@/stories/components/heading";
import React from "react";
import { brytzone } from "./header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import SW, { Autoplay, Pagination, Navigation } from "swiper";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nanoid } from "nanoid";
import FacebookIcon from "@/stories/components/FacebookIcon";
import TwitterIcon from "@/stories/components/TwitterIcon";
import LinkedInIcon from "@/stories/components/LinkedInIcon";
import Image from "next/image";

const Meet = () => {
  const [swiperRef, setSwiperRef] = React.useState(null);
  const max800 = useMediaQuery("(width > 800px)");
  const slidesToShow = max800 ? 3 : 1;
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s: SW, time: number, progress: number) => {
    if (progressCircle.current) {
      const prog: any = progressCircle.current;
      prog.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      const prog: any = progressContent.current;
      prog.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className={`${brytzone}_home-meet`}>
      <Heading bordered>Meet people who can help you</Heading>
      <p>Meet professionals who can be of great help to you through their works. Just part of our collections who are able to make you grow your skills</p>

      <Swiper
        // onSwiper={setSwiperRef as any}
        slidesPerView={slidesToShow}
        centeredSlides={true}
        spaceBetween={0}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {[1, 2, 3, 1, 2, 3, 3].map((el, i) => (
          <SwiperSlide key={nanoid()}>
            <article>
              <span>
                <Image src={`/home/meet/meet${el}.png`} width={240} height={167} alt="boy" />
              </span>
              <span> {el === 1 ? "Peter Rogers" : el === 2 ? "Danielle Banks" : "David Blaque"} </span>
              <span> {el === 1 ? "Software Engineer" : el === 2 ? "Network Engineer" : "Data Scientist"} </span>
              <span>
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Meet;
