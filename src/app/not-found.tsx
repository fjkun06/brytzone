"use client";

import Error from "next/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import "../styles/not-found.scss";

// This page renders when a route is requested that doesn't match the
// middleware and therefore doesn't have a locale associated with it.

export default function NotFound({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  // useEffect(() => {
  //   console.log("hello world 404");

  //   return () => {};
  // }, []);
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95vw",
    height: "95vh",
    backgroundColor: "#fff",
    fontFamily: "Verdana",
    overflow: "hidden",
  };

  const spanStyle = {
    fontSize: "30px",
    borderRight: "3px solid #0a518b",
    padding: "10px",
    paddingRight: "30px",
    color: "#0a518b",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flex: "column",
    FlexDirection: "column",

    gap: "20px",
  };

  const sectionStyle = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",    // FlexDirection: "column",
  };

  const buttonStyles = {
    transform: "translateX(100%)",
    padding: "10px",
    borderRadius: "5px",
    borderColor: "transparent",
    color: "white",
    backgroundColor: "#0a518b",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.05)",
    },
  };
  return (
    <html lang="en">
      <head>
        <style></style>
      </head>
      <body style={{ overflow: "#0a518b" }}>
        {/* <Error statusCode={404} /> */}
        {/* <span className="">dddddddddddd</span> */}
        <main id="not-found" style={styles}>
          {/* <Error statusCode={404} /> */}
          <section style={sectionStyle}>
            <div style={divStyle}>
              <span className="left" style={spanStyle}>
                404
              </span>
              <span className="right" style={{ color: "#0a518b" }}>
                This page could not be found.
              </span>
            </div>
            <br />
            <button style={buttonStyles} onClick={() => router.push("/")}>
              Back to Home
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
