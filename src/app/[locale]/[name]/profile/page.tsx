"use client";
import { useEffect, useState } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "../../signup/config";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};

async function getData() {
  const res = await axios.get(`http://localhost:${backendPort}/user`, {
    withCredentials: true,
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (res.statusText !== "OK") {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data.user;
}

const Polls = async () => {
  // const t = useTranslations("dash");
  const path1 = usePathname();
  // console.log("path: ", path1);
  // console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");

  const [user, setUser] = useState<User | null>(null);
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => {
    const loader = async () => {
      const data = await getData();
      console.log(data);
      setUser(data);
    };
    loader();
  }, []);
  return user?.active ? <div><h1>{`${user.name}'s Profile`}</h1></div> : null;
  // return <div><h1>{`${data.name}'s Profile`}</h1></div>;
};

export default Polls;
