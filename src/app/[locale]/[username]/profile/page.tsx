"use client";
import { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";
import { User } from "../../signup/config";
import { AuthContext } from "../../sublayout";
import { brytzone } from "../../home/header";
import Image from "next/image";
import { nanoid } from "nanoid";
import FacebookIcon from "@/stories/components/FacebookIcon";
import TwitterIcon from "@/stories/components/TwitterIcon";
import LinkedInIcon from "@/stories/components/LinkedInIcon";
import GithubIcon from "@/stories/components/GithubIcon";
import TechnologyCategory from "@/stories/components/TechnologyCatefory";
import DesignCategory from "@/stories/components/DesignCategory";
import BusinessCategory from "@/stories/components/BusinessCategory";
import ArtsCategory from "@/stories/components/ArtsCategory";
import HealthCategory from "@/stories/components/HealthCategory";
import CulinaryCategory from "@/stories/components/CulinaryCategory";
import LifestyleCategory from "@/stories/components/LifestyleCategory";
import CreativeCategory from "@/stories/components/CreativeCategory";
import FrontendCategoryIcon from "@/stories/components/FrontendCategoryIcon";
import BackendCategoryIcon from "@/stories/components/BackendCategoryIcon";
import DatabaseCategoryIcon from "@/stories/components/DatabaseCategoryIcon";
import DevOpsCategoryIcon from "@/stories/components/DevOpsCategoryIcon";
import MobileCategoryIcon from "@/stories/components/MobileCategoryIcon";
import DataScienceCategoryIcon from "@/stories/components/DataScienceCategoryIcon";
import OthersCategoryIcon from "@/stories/components/OthersCategoryIcon";
import SearchIcon from "@/stories/components/SearchIcon";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};

export const interestsCategoryIcons = {
  Technology: <TechnologyCategory />,
  Design: <DesignCategory />,
  Business: <BusinessCategory />,
  Arts: <ArtsCategory />,
  Health: <HealthCategory />,
  Culinary: <CulinaryCategory />,
  Lifestyle: <LifestyleCategory />,
  Creative: <CreativeCategory />,
};

export const skillCategories = {
  Frontend: <FrontendCategoryIcon />,
  Backend: <BackendCategoryIcon />,
  Databases: <DatabaseCategoryIcon />,
  DevOps: <DevOpsCategoryIcon />,
  Mobile: <MobileCategoryIcon />,
  "Data Science": <DataScienceCategoryIcon />,
  "Other Skills": <OthersCategoryIcon />,
};

const Polls = async () => {
  // const t = useTranslations("dash");
  const path = usePathname();
  const router = useRouter();
  // console.log("path: ", path1.split("/")[1]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ code: 0, message: "" });
  // console.log(path1.slice(3 - path1.length));
  // console.log(path.slice(3 - path.length) + "dashboard");

  const [user, setUser] = useState<User | null | undefined>(null);
  //setting user contxet
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => {
    const verifyUsername = async () => {
      //reset errors
      const strings = path.split("/");
      const username = strings[strings.length - 2];
      // console.log(username)

      try {
        const res = await axios.post(`http://localhost:${backendPort}/user/check`, JSON.stringify({ username }), {
          withCredentials: true,
          // body: JSON.stringify({ otp }),
          headers: { "Content-Type": "application/json" },
        });

        console.log(res);
        setUser(res.data.user);
        if (res.data.user.name && res.data.loggedIn) {
          setCurrentUser({ user: res.data.user, state: res.data.loggedIn });
          // console.log(res.data.user, isLoggenIn)
        }
        if (!res.data.loggedIn) {
          setCurrentUser({ user: res.data.user, state: false });
        }
      } catch (error: any) {
        console.log(error);
        console.log(error.response.data.message);
        console.log(error.response.status);
        setError(true);
        setErrorMessage({
          code: error.response.status,
          message: error.response.data.message,
        });
      }
    };

    // loader();
    verifyUsername();
  }, []);

  // return <p>Active segment: {segment}</p>
  const externalUrls = [
    {
      icon: <GithubIcon />,
      url: "https://github.com",
    },
    {
      icon: <FacebookIcon />,
      url: "https://facebook.com",
    },

    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com",
    },
  ];

  const data = new Array(10).fill(10);

  //handling logout
  const handleLogOut = async () => {
    // const authorize = async () => {
    //   return await axios.get(`http://localhost:${backendPort}/logout`, {
    //     withCredentials: true,
    //   });
    // };

    // const test = async () => {
    try {
      const res = await axios.get(`http://localhost:${backendPort}/logout`, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error: any) {
      if (error.response.data.message === "redirected") {
        location.assign("/login");
        // Handle error response
      }
      console.log(error);
      // console.log('Logged Out!');
    }
    // if (res.redirected) {
    //   router.push("/login");
    //   // Handle error response
    // } else {
    //   const result = await res.json();
    //   console.log(result);
    //   console.log('logout failed');
    // }
    // };
  };

  if (error) {
    return (
      <div>
        <h1>{errorMessage.code}</h1>
        <span>{errorMessage.message}</span>
      </div>
    );
  }
  return user?.active ? (
    <section className={`${brytzone}_profile`}>
      {/* <object data="./gradient.svg" type="image/svg+xml" /> */}
      <div className="greetings">
        <section className="layer1">
          <div className="body">
            <Image src="/defaults/av1.jpg" alt="user-picture" width={198} height={198} priority />
            <div className="content">
              <span className="name">Frank Jordan</span>
              <hr />
              <span className="others">Level 300(CT21A036) : delac1630@gmail.com</span>
            </div>
          </div>
        </section>
        <section className="layer2">
          <div className="body">
            <div className="actions">
              <span>Edit Profile</span>
              <span>Log Out</span>
            </div>
            <div className="content">
              <div className="left">
                <svg width="117" height="120" viewBox="0 0 117 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10.2949" cy="14.5641" r="9.95508" fill="#0A518B" />
                  <circle cx="10.2949" cy="58.5641" r="8.95508" stroke="#0A518B" strokeWidth="2" />
                  <circle cx="10.2949" cy="102.564" r="8.95508" stroke="#0A518B" strokeWidth="2" />
                  <line x1="10.25" y1="52.78" x2="10.25" y2="19.78" stroke="#0A518B" strokeWidth="2" />
                  <line x1="10.25" y1="93.6091" x2="10.25" y2="64.6091" stroke="#0A518B" strokeWidth="2" />
                  <path
                    d="M33.0925 8.1V22H30.8125V8.1H33.0925ZM41.6459 10.8C42.5126 10.8 43.2859 10.98 43.9659 11.34C44.6593 11.7 45.1993 12.2333 45.5859 12.94C45.9726 13.6467 46.1659 14.5 46.1659 15.5V22H43.9059V15.84C43.9059 14.8533 43.6593 14.1 43.1659 13.58C42.6726 13.0467 41.9993 12.78 41.1459 12.78C40.2926 12.78 39.6126 13.0467 39.1059 13.58C38.6126 14.1 38.3659 14.8533 38.3659 15.84V22H36.0859V10.98H38.3659V12.24C38.7393 11.7867 39.2126 11.4333 39.7859 11.18C40.3726 10.9267 40.9926 10.8 41.6459 10.8ZM51.7342 12.84V18.94C51.7342 19.3533 51.8276 19.6533 52.0142 19.84C52.2142 20.0133 52.5476 20.1 53.0142 20.1H54.4142V22H52.6142C51.5876 22 50.8009 21.76 50.2542 21.28C49.7076 20.8 49.4342 20.02 49.4342 18.94V12.84H48.1342V10.98H49.4342V8.24H51.7342V10.98H54.4142V12.84H51.7342ZM66.6156 16.22C66.6156 16.6333 66.589 17.0067 66.5356 17.34H58.1156C58.1823 18.22 58.509 18.9267 59.0956 19.46C59.6823 19.9933 60.4023 20.26 61.2556 20.26C62.4823 20.26 63.349 19.7467 63.8556 18.72H66.3156C65.9823 19.7333 65.3756 20.5667 64.4956 21.22C63.629 21.86 62.549 22.18 61.2556 22.18C60.2023 22.18 59.2556 21.9467 58.4156 21.48C57.589 21 56.9356 20.3333 56.4556 19.48C55.989 18.6133 55.7556 17.6133 55.7556 16.48C55.7556 15.3467 55.9823 14.3533 56.4356 13.5C56.9023 12.6333 57.549 11.9667 58.3756 11.5C59.2156 11.0333 60.1756 10.8 61.2556 10.8C62.2956 10.8 63.2223 11.0267 64.0356 11.48C64.849 11.9333 65.4823 12.5733 65.9356 13.4C66.389 14.2133 66.6156 15.1533 66.6156 16.22ZM64.2356 15.5C64.2223 14.66 63.9223 13.9867 63.3356 13.48C62.749 12.9733 62.0223 12.72 61.1556 12.72C60.369 12.72 59.6956 12.9733 59.1356 13.48C58.5756 13.9733 58.2423 14.6467 58.1356 15.5H64.2356ZM71.1394 12.58C71.4727 12.02 71.9127 11.5867 72.4594 11.28C73.0194 10.96 73.6794 10.8 74.4394 10.8V13.16H73.8594C72.966 13.16 72.286 13.3867 71.8194 13.84C71.366 14.2933 71.1394 15.08 71.1394 16.2V22H68.8594V10.98H71.1394V12.58ZM86.6352 16.22C86.6352 16.6333 86.6085 17.0067 86.5552 17.34H78.1352C78.2018 18.22 78.5285 18.9267 79.1152 19.46C79.7018 19.9933 80.4218 20.26 81.2752 20.26C82.5018 20.26 83.3685 19.7467 83.8752 18.72H86.3352C86.0018 19.7333 85.3952 20.5667 84.5152 21.22C83.6485 21.86 82.5685 22.18 81.2752 22.18C80.2218 22.18 79.2752 21.9467 78.4352 21.48C77.6085 21 76.9552 20.3333 76.4752 19.48C76.0085 18.6133 75.7752 17.6133 75.7752 16.48C75.7752 15.3467 76.0018 14.3533 76.4552 13.5C76.9218 12.6333 77.5685 11.9667 78.3952 11.5C79.2352 11.0333 80.1952 10.8 81.2752 10.8C82.3152 10.8 83.2418 11.0267 84.0552 11.48C84.8685 11.9333 85.5018 12.5733 85.9552 13.4C86.4085 14.2133 86.6352 15.1533 86.6352 16.22ZM84.2552 15.5C84.2418 14.66 83.9418 13.9867 83.3552 13.48C82.7685 12.9733 82.0418 12.72 81.1752 12.72C80.3885 12.72 79.7152 12.9733 79.1552 13.48C78.5952 13.9733 78.2618 14.6467 78.1552 15.5H84.2552ZM92.8789 22.18C92.0122 22.18 91.2322 22.0267 90.5389 21.72C89.8589 21.4 89.3189 20.9733 88.9189 20.44C88.5189 19.8933 88.3056 19.2867 88.2789 18.62H90.6389C90.6789 19.0867 90.8989 19.48 91.2989 19.8C91.7122 20.1067 92.2256 20.26 92.8389 20.26C93.4789 20.26 93.9722 20.14 94.3189 19.9C94.6789 19.6467 94.8589 19.3267 94.8589 18.94C94.8589 18.5267 94.6589 18.22 94.2589 18.02C93.8722 17.82 93.2522 17.6 92.3989 17.36C91.5722 17.1333 90.8989 16.9133 90.3789 16.7C89.8589 16.4867 89.4056 16.16 89.0189 15.72C88.6456 15.28 88.4589 14.7 88.4589 13.98C88.4589 13.3933 88.6322 12.86 88.9789 12.38C89.3256 11.8867 89.8189 11.5 90.4589 11.22C91.1122 10.94 91.8589 10.8 92.6989 10.8C93.9522 10.8 94.9589 11.12 95.7189 11.76C96.4922 12.3867 96.9056 13.2467 96.9589 14.34H94.6789C94.6389 13.8467 94.4389 13.4533 94.0789 13.16C93.7189 12.8667 93.2322 12.72 92.6189 12.72C92.0189 12.72 91.5589 12.8333 91.2389 13.06C90.9189 13.2867 90.7589 13.5867 90.7589 13.96C90.7589 14.2533 90.8656 14.5 91.0789 14.7C91.2922 14.9 91.5522 15.06 91.8589 15.18C92.1656 15.2867 92.6189 15.4267 93.2189 15.6C94.0189 15.8133 94.6722 16.0333 95.1789 16.26C95.6989 16.4733 96.1456 16.7933 96.5189 17.22C96.8922 17.6467 97.0856 18.2133 97.0989 18.92C97.0989 19.5467 96.9256 20.1067 96.5789 20.6C96.2322 21.0933 95.7389 21.48 95.0989 21.76C94.4722 22.04 93.7322 22.18 92.8789 22.18ZM102.223 12.84V18.94C102.223 19.3533 102.316 19.6533 102.503 19.84C102.703 20.0133 103.036 20.1 103.503 20.1H104.903V22H103.103C102.076 22 101.289 21.76 100.743 21.28C100.196 20.8 99.9225 20.02 99.9225 18.94V12.84H98.6225V10.98H99.9225V8.24H102.223V10.98H104.903V12.84H102.223ZM111.004 22.18C110.137 22.18 109.357 22.0267 108.664 21.72C107.984 21.4 107.444 20.9733 107.044 20.44C106.644 19.8933 106.431 19.2867 106.404 18.62H108.764C108.804 19.0867 109.024 19.48 109.424 19.8C109.837 20.1067 110.351 20.26 110.964 20.26C111.604 20.26 112.097 20.14 112.444 19.9C112.804 19.6467 112.984 19.3267 112.984 18.94C112.984 18.5267 112.784 18.22 112.384 18.02C111.997 17.82 111.377 17.6 110.524 17.36C109.697 17.1333 109.024 16.9133 108.504 16.7C107.984 16.4867 107.531 16.16 107.144 15.72C106.771 15.28 106.584 14.7 106.584 13.98C106.584 13.3933 106.757 12.86 107.104 12.38C107.451 11.8867 107.944 11.5 108.584 11.22C109.237 10.94 109.984 10.8 110.824 10.8C112.077 10.8 113.084 11.12 113.844 11.76C114.617 12.3867 115.031 13.2467 115.084 14.34H112.804C112.764 13.8467 112.564 13.4533 112.204 13.16C111.844 12.8667 111.357 12.72 110.744 12.72C110.144 12.72 109.684 12.8333 109.364 13.06C109.044 13.2867 108.884 13.5867 108.884 13.96C108.884 14.2533 108.991 14.5 109.204 14.7C109.417 14.9 109.677 15.06 109.984 15.18C110.291 15.2867 110.744 15.4267 111.344 15.6C112.144 15.8133 112.797 16.0333 113.304 16.26C113.824 16.4733 114.271 16.7933 114.644 17.22C115.017 17.6467 115.211 18.2133 115.224 18.92C115.224 19.5467 115.051 20.1067 114.704 20.6C114.357 21.0933 113.864 21.48 113.224 21.76C112.597 22.04 111.857 22.18 111.004 22.18Z"
                    fill="#0A518B"
                  />
                  <path
                    d="M37.5683 68.749C36.6349 68.749 35.7949 68.589 35.0483 68.269C34.3016 67.9357 33.7149 67.469 33.2883 66.869C32.8616 66.269 32.6483 65.569 32.6483 64.769H35.0883C35.1416 65.369 35.3749 65.8623 35.7883 66.249C36.2149 66.6357 36.8083 66.829 37.5683 66.829C38.3549 66.829 38.9683 66.6423 39.4083 66.269C39.8483 65.8823 40.0683 65.389 40.0683 64.789C40.0683 64.3223 39.9283 63.9423 39.6483 63.649C39.3816 63.3557 39.0416 63.129 38.6283 62.969C38.2283 62.809 37.6683 62.6357 36.9483 62.449C36.0416 62.209 35.3016 61.969 34.7283 61.729C34.1683 61.4757 33.6883 61.089 33.2883 60.569C32.8883 60.049 32.6883 59.3557 32.6883 58.489C32.6883 57.689 32.8883 56.989 33.2883 56.389C33.6883 55.789 34.2483 55.329 34.9683 55.009C35.6883 54.689 36.5216 54.529 37.4683 54.529C38.8149 54.529 39.9149 54.869 40.7683 55.549C41.6349 56.2157 42.1149 57.1357 42.2083 58.309H39.6883C39.6483 57.8023 39.4083 57.369 38.9683 57.009C38.5283 56.649 37.9483 56.469 37.2283 56.469C36.5749 56.469 36.0416 56.6357 35.6283 56.969C35.2149 57.3023 35.0083 57.7823 35.0083 58.409C35.0083 58.8357 35.1349 59.189 35.3883 59.469C35.6549 59.7357 35.9883 59.949 36.3883 60.109C36.7883 60.269 37.3349 60.4423 38.0283 60.629C38.9483 60.8823 39.6949 61.1357 40.2683 61.389C40.8549 61.6423 41.3483 62.0357 41.7483 62.569C42.1616 63.089 42.3683 63.789 42.3683 64.669C42.3683 65.3757 42.1749 66.0423 41.7883 66.669C41.4149 67.2957 40.8616 67.8023 40.1283 68.189C39.4083 68.5623 38.5549 68.749 37.5683 68.749ZM49.4186 63.109L54.4986 68.609H51.4186L47.3386 63.869V68.609H45.0586V53.809H47.3386V62.409L51.3386 57.589H54.4986L49.4186 63.109ZM57.2928 56.129C56.8795 56.129 56.5328 55.989 56.2528 55.709C55.9728 55.429 55.8328 55.0823 55.8328 54.669C55.8328 54.2557 55.9728 53.909 56.2528 53.629C56.5328 53.349 56.8795 53.209 57.2928 53.209C57.6928 53.209 58.0328 53.349 58.3128 53.629C58.5928 53.909 58.7328 54.2557 58.7328 54.669C58.7328 55.0823 58.5928 55.429 58.3128 55.709C58.0328 55.989 57.6928 56.129 57.2928 56.129ZM58.4128 57.589V68.609H56.1328V57.589H58.4128ZM63.6863 53.809V68.609H61.4063V53.809H63.6863ZM68.9597 53.809V68.609H66.6797V53.809H68.9597ZM75.9531 68.789C75.0865 68.789 74.3065 68.6357 73.6131 68.329C72.9331 68.009 72.3931 67.5823 71.9931 67.049C71.5931 66.5023 71.3798 65.8957 71.3531 65.229H73.7131C73.7531 65.6957 73.9731 66.089 74.3731 66.409C74.7865 66.7157 75.2998 66.869 75.9131 66.869C76.5531 66.869 77.0465 66.749 77.3931 66.509C77.7531 66.2557 77.9331 65.9357 77.9331 65.549C77.9331 65.1357 77.7331 64.829 77.3331 64.629C76.9465 64.429 76.3265 64.209 75.4731 63.969C74.6465 63.7423 73.9731 63.5223 73.4531 63.309C72.9331 63.0957 72.4798 62.769 72.0931 62.329C71.7198 61.889 71.5331 61.309 71.5331 60.589C71.5331 60.0023 71.7065 59.469 72.0531 58.989C72.3998 58.4957 72.8931 58.109 73.5331 57.829C74.1865 57.549 74.9331 57.409 75.7731 57.409C77.0265 57.409 78.0331 57.729 78.7931 58.369C79.5665 58.9957 79.9798 59.8557 80.0331 60.949H77.7531C77.7131 60.4557 77.5131 60.0623 77.1531 59.769C76.7931 59.4757 76.3065 59.329 75.6931 59.329C75.0931 59.329 74.6331 59.4423 74.3131 59.669C73.9931 59.8957 73.8331 60.1957 73.8331 60.569C73.8331 60.8623 73.9398 61.109 74.1531 61.309C74.3665 61.509 74.6265 61.669 74.9331 61.789C75.2398 61.8957 75.6931 62.0357 76.2931 62.209C77.0931 62.4223 77.7465 62.6423 78.2531 62.869C78.7731 63.0823 79.2198 63.4023 79.5931 63.829C79.9665 64.2557 80.1598 64.8223 80.1731 65.529C80.1731 66.1557 79.9998 66.7157 79.6531 67.209C79.3065 67.7023 78.8131 68.089 78.1731 68.369C77.5465 68.649 76.8065 68.789 75.9531 68.789Z"
                    fill="black"
                  />
                  <path
                    d="M43.0032 101.849C43.0032 102.556 42.8365 103.222 42.5032 103.849C42.1699 104.476 41.6365 104.989 40.9032 105.389C40.1699 105.776 39.2299 105.969 38.0832 105.969H35.5632V111.609H33.2832V97.7091H38.0832C39.1499 97.7091 40.0499 97.8958 40.7832 98.2691C41.5299 98.6291 42.0832 99.1225 42.4432 99.7491C42.8165 100.376 43.0032 101.076 43.0032 101.849ZM38.0832 104.109C38.9499 104.109 39.5965 103.916 40.0232 103.529C40.4499 103.129 40.6632 102.569 40.6632 101.849C40.6632 100.329 39.8032 99.5691 38.0832 99.5691H35.5632V104.109H38.0832ZM47.4577 102.189C47.7911 101.629 48.2311 101.196 48.7777 100.889C49.3377 100.569 49.9977 100.409 50.7577 100.409V102.769H50.1777C49.2844 102.769 48.6044 102.996 48.1377 103.449C47.6844 103.902 47.4577 104.689 47.4577 105.809V111.609H45.1777V100.589H47.4577V102.189ZM57.6335 111.789C56.5935 111.789 55.6535 111.556 54.8135 111.089C53.9735 110.609 53.3135 109.942 52.8335 109.089C52.3535 108.222 52.1135 107.222 52.1135 106.089C52.1135 104.969 52.3602 103.976 52.8535 103.109C53.3468 102.242 54.0202 101.576 54.8735 101.109C55.7268 100.642 56.6802 100.409 57.7335 100.409C58.7868 100.409 59.7402 100.642 60.5935 101.109C61.4468 101.576 62.1202 102.242 62.6135 103.109C63.1068 103.976 63.3535 104.969 63.3535 106.089C63.3535 107.209 63.1002 108.202 62.5935 109.069C62.0868 109.936 61.3935 110.609 60.5135 111.089C59.6468 111.556 58.6868 111.789 57.6335 111.789ZM57.6335 109.809C58.2202 109.809 58.7668 109.669 59.2735 109.389C59.7935 109.109 60.2135 108.689 60.5335 108.129C60.8535 107.569 61.0135 106.889 61.0135 106.089C61.0135 105.289 60.8602 104.616 60.5535 104.069C60.2468 103.509 59.8402 103.089 59.3335 102.809C58.8268 102.529 58.2802 102.389 57.6935 102.389C57.1068 102.389 56.5602 102.529 56.0535 102.809C55.5602 103.089 55.1668 103.509 54.8735 104.069C54.5802 104.616 54.4335 105.289 54.4335 106.089C54.4335 107.276 54.7335 108.196 55.3335 108.849C55.9468 109.489 56.7135 109.809 57.6335 109.809ZM66.7674 99.1291C66.3541 99.1291 66.0074 98.9891 65.7274 98.7091C65.4474 98.4291 65.3074 98.0825 65.3074 97.6691C65.3074 97.2558 65.4474 96.9091 65.7274 96.6291C66.0074 96.3491 66.3541 96.2091 66.7674 96.2091C67.1674 96.2091 67.5074 96.3491 67.7874 96.6291C68.0674 96.9091 68.2074 97.2558 68.2074 97.6691C68.2074 98.0825 68.0674 98.4291 67.7874 98.7091C67.5074 98.9891 67.1674 99.1291 66.7674 99.1291ZM67.8874 113.769C67.8874 114.849 67.6141 115.629 67.0674 116.109C66.5341 116.602 65.7541 116.849 64.7274 116.849H63.5474V114.929H64.3274C64.7941 114.929 65.1208 114.836 65.3074 114.649C65.5074 114.476 65.6074 114.182 65.6074 113.769V100.589H67.8874V113.769ZM80.9809 105.829C80.9809 106.242 80.9542 106.616 80.9009 106.949H72.4809C72.5475 107.829 72.8742 108.536 73.4609 109.069C74.0475 109.602 74.7675 109.869 75.6209 109.869C76.8475 109.869 77.7142 109.356 78.2209 108.329H80.6809C80.3475 109.342 79.7409 110.176 78.8609 110.829C77.9942 111.469 76.9142 111.789 75.6209 111.789C74.5675 111.789 73.6209 111.556 72.7809 111.089C71.9542 110.609 71.3009 109.942 70.8209 109.089C70.3542 108.222 70.1209 107.222 70.1209 106.089C70.1209 104.956 70.3475 103.962 70.8009 103.109C71.2675 102.242 71.9142 101.576 72.7409 101.109C73.5809 100.642 74.5409 100.409 75.6209 100.409C76.6609 100.409 77.5875 100.636 78.4009 101.089C79.2142 101.542 79.8475 102.182 80.3009 103.009C80.7542 103.822 80.9809 104.762 80.9809 105.829ZM78.6009 105.109C78.5875 104.269 78.2875 103.596 77.7009 103.089C77.1142 102.582 76.3875 102.329 75.5209 102.329C74.7342 102.329 74.0609 102.582 73.5009 103.089C72.9409 103.582 72.6075 104.256 72.5009 105.109H78.6009ZM82.4646 106.089C82.4646 104.956 82.6913 103.962 83.1446 103.109C83.6113 102.242 84.2513 101.576 85.0646 101.109C85.8779 100.642 86.8113 100.409 87.8646 100.409C89.1979 100.409 90.2979 100.729 91.1646 101.369C92.0446 101.996 92.6379 102.896 92.9446 104.069H90.4846C90.2846 103.522 89.9646 103.096 89.5246 102.789C89.0846 102.482 88.5313 102.329 87.8646 102.329C86.9313 102.329 86.1846 102.662 85.6246 103.329C85.0779 103.982 84.8046 104.902 84.8046 106.089C84.8046 107.276 85.0779 108.202 85.6246 108.869C86.1846 109.536 86.9313 109.869 87.8646 109.869C89.1846 109.869 90.0579 109.289 90.4846 108.129H92.9446C92.6246 109.249 92.0246 110.142 91.1446 110.809C90.2646 111.462 89.1713 111.789 87.8646 111.789C86.8113 111.789 85.8779 111.556 85.0646 111.089C84.2513 110.609 83.6113 109.942 83.1446 109.089C82.6913 108.222 82.4646 107.222 82.4646 106.089ZM97.8768 102.449V108.549C97.8768 108.962 97.9701 109.262 98.1568 109.449C98.3568 109.622 98.6901 109.709 99.1568 109.709H100.557V111.609H98.7568C97.7301 111.609 96.9435 111.369 96.3968 110.889C95.8501 110.409 95.5768 109.629 95.5768 108.549V102.449H94.2768V100.589H95.5768V97.8491H97.8768V100.589H100.557V102.449H97.8768ZM106.658 111.789C105.792 111.789 105.012 111.636 104.318 111.329C103.638 111.009 103.098 110.582 102.698 110.049C102.298 109.502 102.085 108.896 102.058 108.229H104.418C104.458 108.696 104.678 109.089 105.078 109.409C105.492 109.716 106.005 109.869 106.618 109.869C107.258 109.869 107.752 109.749 108.098 109.509C108.458 109.256 108.638 108.936 108.638 108.549C108.638 108.136 108.438 107.829 108.038 107.629C107.652 107.429 107.032 107.209 106.178 106.969C105.352 106.742 104.678 106.522 104.158 106.309C103.638 106.096 103.185 105.769 102.798 105.329C102.425 104.889 102.238 104.309 102.238 103.589C102.238 103.002 102.412 102.469 102.758 101.989C103.105 101.496 103.598 101.109 104.238 100.829C104.892 100.549 105.638 100.409 106.478 100.409C107.732 100.409 108.738 100.729 109.498 101.369C110.272 101.996 110.685 102.856 110.738 103.949H108.458C108.418 103.456 108.218 103.062 107.858 102.769C107.498 102.476 107.012 102.329 106.398 102.329C105.798 102.329 105.338 102.442 105.018 102.669C104.698 102.896 104.538 103.196 104.538 103.569C104.538 103.862 104.645 104.109 104.858 104.309C105.072 104.509 105.332 104.669 105.638 104.789C105.945 104.896 106.398 105.036 106.998 105.209C107.798 105.422 108.452 105.642 108.958 105.869C109.478 106.082 109.925 106.402 110.298 106.829C110.672 107.256 110.865 107.822 110.878 108.529C110.878 109.156 110.705 109.716 110.358 110.209C110.012 110.702 109.518 111.089 108.878 111.369C108.252 111.649 107.512 111.789 106.658 111.789Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="right">
                <h2>
                  Hello, <span> There</span>
                </h2>
                <div className="about">
                  <div className="text">I’m Lilian, a Computer Engineering student of College of Technology. I enjoy Front End Development as well as AI ......</div>
                  <div className="icon">
                    {externalUrls.map(({ url, icon }) => (
                      <Link href={""} onClick={() => (document.location.href = url)} key={nanoid()}>
                        {icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="skills">
        <div className="title">Skills</div>
        <div className="categories">
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{skillCategories["Frontend"]}</span>
            <span className="category">Design</span>
            <span className="list">HTML5,CSS3,Bootstrap5,XYZ</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{skillCategories["Backend"]}</span>
            <span className="category">Design</span>
            <span className="list">Figma,Canva...</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{skillCategories["Databases"]}</span>
            <span className="category">Design</span>
            <span className="list">HTML5,CSS3,Bootstrap5,XYZ</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{skillCategories["DevOps"]}</span>
            <span className="category">Design</span>
            <span className="list">ReactNative,Ionic...</span>
          </div>
        </div>
      </div>
      <div className="interest skills">
        <div className="title">Areas of Interest</div>
        <div className="categories">
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{interestsCategoryIcons["Technology"]}</span>
            <span className="category">Design</span>
            <span className="list">HTML5,CSS3,Bootstrap5,XYZ</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{interestsCategoryIcons["Business"]}</span>
            <span className="category">Design</span>
            <span className="list">Figma,Canva...</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{interestsCategoryIcons["Arts"]}</span>
            <span className="category">Design</span>
            <span className="list">HTML5,CSS3,Bootstrap5,XYZ</span>
          </div>
          <div className="skill">
            {/* <TechnologyCategory /> */}

            <span className="icon">{interestsCategoryIcons["Health"]}</span>
            <span className="category">Design</span>
            <span className="list">ReactNative,Ionic...</span>
          </div>
        </div>
      </div>
      <div className="projects">
        <h3 className="heading">Projects</h3>
        <span className="search">
          <SearchIcon />
        </span>
        <motion.div layout className="projects-container">
          <ProjectComponent type="personal" cardsNumber={data.length}>
            {data.map((el) => (
              <ProjectComponentItem key={nanoid()} />
            ))}
          </ProjectComponent>
          <ProjectComponent type="team" cardsNumber={data.length}>
            {data.map((el) => (
              <ProjectComponentItem key={nanoid()} />
            ))}
          </ProjectComponent>
        </motion.div>
      </div>

      {/* <h1>{`${user.username}'s Profile`}</h1>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button> */}
    </section>
  ) : null;
  // return <div><h1>{`${data.name}'s Profile`}</h1></div>;
};

export default Polls;

// import React from 'react'
interface ProjectComponentProps {
  type: "team" | "personal";
  children: React.ReactNode;
  cardsNumber: number;
}
const ProjectComponent: React.FC<ProjectComponentProps> = ({ type, children, cardsNumber }) => {
  const [viewAll, setViewAll] = useState(false);
  const toggleVisibility = () => setViewAll(!viewAll);
  return (
    <motion.section layout className="projects-group">
      <h3 className="project-title">{type} Projects</h3>
      <motion.div layout animate={{ height: viewAll ? `${(cardsNumber * 26) / 3}rem` : "26rem", overflowY: viewAll ? "scroll" : "hidden" }} className="project-cards">
        {children}
      </motion.div>
      <span className="see-all" onClick={toggleVisibility}>
        {viewAll ? "See Less" : "See All"}
      </span>
    </motion.section>
  );
};
interface ProjectComponentItemProps {
  url?: string;
  dateString?: string;
  projectTitle?: string;
  thumbnail?: string;
}
const ProjectComponentItem: React.FC<ProjectComponentItemProps> = ({ url, dateString, projectTitle, thumbnail }) => {
  const ref = url ?? "https://github.com";
  const path = usePathname();
  console.log();

  return (
    <article key={nanoid()} className="project-card">
      <span className="img">
        <Image src={thumbnail ?? "/defaults/profile_bg.png"} alt="project-picture" width={330} height={150} />
        {/* <Image src="/defaults/test.png" alt="project-picture" width={330} height={150} /> */}
      </span>
      <div className="text">
        <span className="card-heading">{projectTitle ?? "Farming Website"}</span>
        <span className="repo">
          <Link href={path.slice(3, path.length)} onClick={() => (document.location.href = ref)} key={nanoid()}>
            <GithubIcon />
          </Link>
        </span>
        <span className="date">{dateString ?? "17th Jan 2023"}</span>
      </div>
    </article>
  );
};
