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
import { nanoid } from "nanoid";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Saying = () => {
  const sayingT = useTranslations("saying")
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
    <section className={`${brytzone}_home-saying`}>
      <Heading bordered>{sayingT('whats')}</Heading>

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
        loop={true}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        speed={1200}
      >
        {...new Array(4).fill(4).map((el) => (
          <SwiperSlide key={nanoid()}>
            <article>
              <div>
                <span>
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.17675 12.6581C4.40341 12.6581 3.69675 12.4581 3.05675 12.0581C2.41675 11.6315 1.91008 11.0581 1.53675 10.3381C1.16341 9.59147 0.976748 8.7248 0.976748 7.73813C0.976748 6.9648 1.13675 6.2048 1.45675 5.45813C1.77675 4.6848 2.21675 3.9648 2.77675 3.29813C3.36341 2.6048 4.04341 2.0048 4.81675 1.49813C5.59008 0.991468 6.43008 0.6048 7.33675 0.338132L9.05675 2.49813C7.96341 2.97813 7.07008 3.55147 6.37675 4.21813C5.71008 4.8848 5.37675 5.45813 5.37675 5.93813C5.37675 6.25813 5.49675 6.55147 5.73675 6.81813C5.97675 7.0848 6.24342 7.35147 6.53675 7.61813C7.17675 8.07147 7.60342 8.49813 7.81675 8.89813C8.05675 9.27147 8.17675 9.6848 8.17675 10.1381C8.17675 10.9115 7.89675 11.5248 7.33675 11.9781C6.77675 12.4315 6.05675 12.6581 5.17675 12.6581ZM14.1367 12.6581C13.3634 12.6581 12.6567 12.4581 12.0167 12.0581C11.3767 11.6315 10.8701 11.0581 10.4967 10.3381C10.1234 9.59147 9.93675 8.7248 9.93675 7.73813C9.93675 6.9648 10.0967 6.2048 10.4167 5.45813C10.7367 4.6848 11.1767 3.9648 11.7367 3.29813C12.3234 2.6048 13.0034 2.0048 13.7767 1.49813C14.5501 0.991468 15.3901 0.6048 16.2967 0.338132L18.0167 2.49813C16.9234 2.97813 16.0301 3.55147 15.3367 4.21813C14.6701 4.8848 14.3367 5.45813 14.3367 5.93813C14.3367 6.25813 14.4567 6.55147 14.6967 6.81813C14.9367 7.0848 15.2034 7.35147 15.4967 7.61813C16.1367 8.07147 16.5634 8.49813 16.7767 8.89813C17.0167 9.27147 17.1367 9.6848 17.1367 10.1381C17.1367 10.9115 16.8567 11.5248 16.2967 11.9781C15.7367 12.4315 15.0167 12.6581 14.1367 12.6581Z"
                      fill="#FBB606"
                    />
                  </svg>
                </span>
                <p>
                  {sayingT("what")} <b> {sayingT("considering")}</b>,{" "}
                  {sayingT("what")}
                </p>
                <span className="last">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6567 0.719798C14.4301 0.719798 15.1367 0.919797 15.7767 1.3198C16.4167 1.74646 16.9234 2.3198 17.2967 3.0398C17.6701 3.78646 17.8567 4.65313 17.8567 5.6398C17.8567 6.41313 17.6967 7.17313 17.3767 7.9198C17.0567 8.69313 16.6167 9.41313 16.0567 10.0798C15.4701 10.7731 14.7901 11.3731 14.0167 11.8798C13.2434 12.3865 12.4034 12.7731 11.4967 13.0398L9.77675 10.8798C10.8701 10.3998 11.7634 9.82646 12.4567 9.1598C13.1234 8.49313 13.4567 7.9198 13.4567 7.4398C13.4567 7.1198 13.3367 6.82646 13.0967 6.5598C12.8567 6.29313 12.5901 6.02646 12.2967 5.7598C11.6567 5.30646 11.2301 4.8798 11.0167 4.4798C10.7767 4.10646 10.6567 3.69313 10.6567 3.2398C10.6567 2.46646 10.9367 1.85313 11.4967 1.3998C12.0567 0.946464 12.7767 0.719798 13.6567 0.719798ZM4.69675 0.719798C5.47008 0.719798 6.17675 0.919797 6.81675 1.3198C7.45675 1.74646 7.96342 2.3198 8.33675 3.0398C8.71008 3.78646 8.89675 4.65313 8.89675 5.6398C8.89675 6.41313 8.73675 7.17313 8.41675 7.9198C8.09675 8.69313 7.65675 9.41313 7.09675 10.0798C6.51008 10.7731 5.83008 11.3731 5.05675 11.8798C4.28341 12.3865 3.44342 12.7731 2.53675 13.0398L0.816748 10.8798C1.91008 10.3998 2.80341 9.82646 3.49675 9.1598C4.16341 8.49313 4.49675 7.9198 4.49675 7.4398C4.49675 7.1198 4.37675 6.82646 4.13675 6.5598C3.89675 6.29313 3.63008 6.02646 3.33675 5.7598C2.69675 5.30646 2.27008 4.8798 2.05675 4.4798C1.81675 4.10646 1.69675 3.69313 1.69675 3.2398C1.69675 2.46646 1.97675 1.85313 2.53675 1.3998C3.09675 0.946464 3.81675 0.719798 4.69675 0.719798Z"
                      fill="#FBB606"
                    />
                  </svg>
                </span>
                <Image
                  src="/home/saying/girlmini.png"
                  width={390}
                  height={480}
                  alt="girl_image"
                />
              </div>

              <div>
                <h3>{sayingT("lilian")}</h3>
                <span>{sayingT('computer')}</span>
              </div>
            </article>
            <Image
              src="/home/saying/girl.png"
              width={390}
              height={480}
              alt="girl_image"
            />
          </SwiperSlide>
        ))}

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
