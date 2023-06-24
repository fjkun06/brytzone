import React from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { Button } from "@/stories/components/Button";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { registerToNewsletter } from "@/utils/mailing/registerToNewsletter";
const NewsLetter = () => {
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 30000));
  const [loading, setLoading] = React.useState(false);
  const [registred, setRegistred] = React.useState(false);

  const notify = async () => {
    // toast(<Retry/>);
    setLoading(true);
    const res = registerToNewsletter("lolita2020")
      .then((data) => {
        console.log(data);
        setLoading(false);
        setRegistred(true);
      })
      .catch((err) => console.log(err));

    toast.promise(res, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
    //  console.log(res);

    // console.log("clickeddddddddddd");
    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT,
    // });

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    // });

    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });
  };
  return (
    <section className={`${brytzone}_home-newsletter`}>
      <Heading bordered>{"Subscribe to our newsletter"}</Heading>
      <div className="newsletter_content">
        <div className="newsletter_content_text">
          <h2>Never miss our updates</h2>
          <p>Always get updates on our new achievements and get new features for improvements...</p>
        </div>
        <div className="newsletter_content_form">
          <form action="">
            <h3>Get new updates</h3>
            <span>Be the first to be notified on our updates</span>
            <input type="email" placeholder="Email address" />
            <Button category="contact" onClick={() => notify()} disabled={loading ? true : false}>
              {registred ? "Registered" : "Subscribe"}
            </Button>
          </form>
          <span className="mask">
            <Image src="/home/newsletter/newsletter.png" width={291} height={274} alt="dark-girl" quality={100} />
          </span>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
const Retry = ({ closeToast, toastProps }: { closeToast?: any; toastProps?: any }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    {/* <button onClick={closeToast}>Close</button> */}
  </div>
);
export default NewsLetter;
