"use client";
import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import UserAddIcon from "@/stories/layout/navbar/UserAddIcon";
import { useTranslations } from "next-intl";
import { brytzone } from "./home/header";
import dynamic from "next/dynamic";

export default function Index() {
  const t = useTranslations("Index");
  const Header = dynamic(() => import("./home/header"), {
    loading: () => <p>Loading Header...</p>,
  });
  const Community = dynamic(() => import("./home/community"), {
    loading: () => <p>Loading Community...</p>,
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
  return (
    <section className={`${brytzone}_home`}>
      <Header />
      <Community />
      <Explore />
      <Start />
      <Know />
      <How />
      <Meet />
      <Saying />
      <Faqs />
    </section>
  );
}
