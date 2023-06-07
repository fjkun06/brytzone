import React from "react";
import Heading from "@/stories/components/heading";
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
const Saying = () => {
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
      <Heading bordered>What students are saying about us</Heading>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <article>
            <span>pic</span>
            <span>name</span>
            <span>title</span>
            <span>links</span>
          </article>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Saying;
