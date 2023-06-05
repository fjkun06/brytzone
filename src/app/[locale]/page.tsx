"use client";
import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import UserAddIcon from "@/stories/layout/navbar/UserAddIcon";
import { useTranslations } from "next-intl";
import Header, { brytzone } from "./home/header";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <section className={`${brytzone}_home`}>
      <Header />
    </section>
  );
}
