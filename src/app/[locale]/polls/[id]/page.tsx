"use client";
import { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
export default function Page({ params }: { params: { username: string } }) {
  const router = useRouter();
  useEffect(() => {
    // router.push(params.username + "/profile");
  });

  return <div>Poll Id</div>;
}
