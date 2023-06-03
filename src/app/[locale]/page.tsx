"use client";
import { Button } from "@/stories/components/Button";
import IconForward from "@/stories/components/IconForward";
import UserAddIcon from "@/stories/layout/navbar/UserAddIcon";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <Button category="action" icon={<UserAddIcon />}>
        Log In
      </Button>
      <Button category="content" icon={<IconForward />}>
        Get Started
      </Button>
      <Button category="search">Search</Button>
      <Button category="contact">Subscribe</Button>
      <Button>Donate</Button>
      <span>theme</span>
    </>
  );
}
