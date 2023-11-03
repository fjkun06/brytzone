"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from "axios";
import { backendPort } from "@/utils/config";

const Logout = () => {
  const handleLogOut = async () => {
    const authorize = async () => {
      return await axios.get(`http://localhost:${backendPort}/logout`, {
        withCredentials: true,
      });
    };

    const test = async () => {
      try {
        const res = await authorize();
        // console.log(res);
        // if (res.redirected) {
        //   router.push("/login");
        //   // Handle error response
        // } else {
        //   const result = await res.json();
        //   console.log(result);
        //   console.log('logout failed');
        // }
      } catch (error: any) {
        // console.log(error);
        // console.log("Logged Out!");
        if (error.response.status === 301 && error.response.data.message === "redirected") {
          router.push("/login");
        }
      }
    };

    test();
  };
  const router = useRouter();

  useEffect(() => {}, []);

  return <span onClick={handleLogOut}>Log Out</span>;
};

export default Logout;
