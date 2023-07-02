"use client";
import { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";
import { User } from "../../signup/config";
import { AuthContext } from "../../sublayout";
import { brytzone } from "../../home/header";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
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
      <div className="greetings">
        <section className="layer1">
          <div className="content">
            <span className="name">Frank Jordan</span>
            <hr />
            <span className="others">Level 300(CT21A036) : delac1630@gmail.com</span>
          </div>
        </section>
        <section className="layer2">layer2</section>
      </div>
      <div className="skills">
        <div className="skill">skill</div>
        <div className="skill">skill</div>
        <div className="skill">skill</div>
        <div className="skill">skill</div>
        <div className="skill">skill</div>
      </div>
      <div className="projects">
        <h3 className="heading">Projects</h3>
        <span className="serach">Q</span>
        <section className="projects">
          <h3 className="project-title"></h3>
          <article className="project-card"></article>
        </section>
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
