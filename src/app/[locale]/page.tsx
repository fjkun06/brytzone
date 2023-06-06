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
  return (
    <section className={`${brytzone}_home`}>
      <Header />
    </section>
  );
}
