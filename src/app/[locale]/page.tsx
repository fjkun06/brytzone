"use client";
import { useTranslations } from "next-intl";
import { brytzone } from "./home/header";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Community from "./home/community";
export default function Index() {
  const t = useTranslations("Index");
  const Header = dynamic(() => import("./home/header"), {
    loading: () => <p>Loading Header...</p>,
  });

  const Explore = dynamic(() => import("./home/explore"), {
    loading: () => <p>Loading Explore...</p>,
  });
  const Start = dynamic(() => import("./home/start"), {
    loading: () => <p>Loading Start...</p>,
  });
  const Know = dynamic(() => import("./home/know"), {
    loading: () => <p>Loading Know...</p>,
  });
  const How = dynamic(() => import("./home/how"), {
    loading: () => <p>Loading How...</p>,
  });
  const Meet = dynamic(() => import("./home/meet"), {
    loading: () => <p>Loading Meet...</p>,
  });
  const Saying = dynamic(() => import("./home/saying"), {
    loading: () => <p>Loading Saying...</p>,
  });
  const Faqs = dynamic(() => import("./home/faqs"), {
    loading: () => <p>Loading Faqs...</p>,
  });
  const NewsLetter = dynamic(() => import("./home/Newsletter"), {
    loading: () => <p>Loading Newsletter...</p>,
  });


  const headerRef = useRef<HTMLElement>(null);

  function scrollToCommunity() {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={`${brytzone}_home`}>
      <Header target={scrollToCommunity}/>
      <Community forwardedRef={headerRef}/>
      <Explore scrollToTop={handleScrollToTop}/>
      <Start />
      <Know />
      <How />
      <Meet />
      <Saying />
      <Faqs />
      <NewsLetter />
    </section>
  );
}

const SmoothScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={handleScrollToTop}>Scroll to Top</button>
  );
};
