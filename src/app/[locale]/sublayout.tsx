"use client";
import Navbar from "@/stories/layout/navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nanoid } from "nanoid";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { CircleLoader } from "react-spinners";
import Cookies from "universal-cookie";
import { switchTheme } from "@/utils/themeSwitcher";
import Footer from "@/stories/layout/footer/Footer";
import axios from "axios";
import { backendPort } from "@/utils/config";
interface SubLayoutProps {
  children?: React.ReactNode;
}
const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const min980 = useWindowSize().width > 1200;
  // console.log(min980, useWindowSize().width);

   //check logged in user
   const [userName, setUser] = React.useState(undefined);
   const [isLoggenIn, setIsLoggenIn] = React.useState(false);
   React.useEffect(() => {
       //relaod page
      //  router.refresh();
     const welcome = async () => {
       try {
         setIsLoggenIn(false);
         const res = await axios.get(`http://localhost:${backendPort}/user`, {
           withCredentials: true,
         });
         // const res = await axios.post(`http://localhost:${backendPort}/signup`, data, {
         //   headers: { "Content-Type": "multipart/form-data" },
         //   withCredentials: true,
         // });
         console.log('responsssssssssssssssssssssssssssse: ',res.data);
         
         if (res.data.user.name) {
           setUser(res.data.user);
           // console.log(res.data.user, isLoggenIn);
         }
         if(res.data.loggedIn){
           setIsLoggenIn(true);
           console.log(isLoggenIn);
           
         }
 
         // const datum = res;
       } catch (error: any) {
         console.log(error);
       }
     };
 
     welcome();
   }, []);
  //scroll useEffect
  React.useEffect(() => {
    if (min980) {
      setIsOpen(true);
    }
  });
  React.useEffect(() => {
    const handleScroll = () => {
      if (!min980) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //handling theme
  const cookies = React.useMemo(() => new Cookies(), []);
  const [cookie, setCookie] = React.useState("");
  React.useEffect(() => {
    //watching usertheme
    if (typeof window !== "undefined") {
      let theme = window.matchMedia("(prefers-color-scheme: dark)").matches;

      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        theme = e.matches;
      });
      //checking if cookie exists and or creating a new one
      if (!cookies.get("theme")) {
        cookies.set("theme", theme ? "dark" : "light", { path: "/" });
      }
    }

    setCookie(cookies.get("theme"));
    switchTheme(cookies.get("theme"));

    //setting default color scheme
    document.documentElement.className = cookie;
  }, [cookie, cookies]);

  //cookie handler
  const setThemeCookie = (val: string) => {
    cookies.set("theme", val, { path: "/" });
    setCookie(val);
  };

  //removing loadscreen
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    let start: number;

    function step(timestamp: number) {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed < 3200) {
        // If less than 3 seconds have elapsed, request the next animation frame
        requestAnimationFrame(step);
      } else {
        // If 3 seconds have elapsed, call the delayed function
        setLoading(false);
      }
    }

    requestAnimationFrame(step);

    // Clean up the effect if necessary
    return () => cancelAnimationFrame(requestAnimationFrame(step));
  }, []);

  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <main id="layout">
      <Navbar handleClick={handleIsOpen} isOpen={isOpen} desktop={min980} storeCookie={setThemeCookie} cookieVal={cookie} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={nanoid()}
            onClick={() => setIsOpen(false)}
            id="modal"
            layout
            animate={{ height: min980 ? "0rem" : "100vh" }}
            transition={{
              delay: 0.35,
            }}
            exit={{
              height: 0,
              transition: {
                delay: 0.35,
                ease: "easeInOut",
              },
            }}
          />
        )}
      </AnimatePresence>
      {loading && (
        <section id="loader">
          <CircleLoader cssOverride={{ color: "var(--test)" }} color="" loading={loading} aria-label="Loading Spinner" data-testid="loader" className="wave" />
          {/* <CircleLoader cssOverride={{color:"var(--test)"}} color="red" loading aria-label="Loading Spinner" data-testid="loader" /> */}
        </section>
      )}
      {children}
      <Footer />
    </main>
  );
};

export default SubLayout;
