import React from "react";
import { brytzone } from "./header";
import Heading from "@/stories/components/heading";
import { Button } from "@/stories/components/Button";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { registerToNewsletter } from "@/utils/mailing/registerToNewsletter";
import Link from "next/link";
import { NavLink } from "@/stories/layout/navbar/NavLink";
const NewsLetter = () => {
  const [loading, setLoading] = React.useState(false);
  const [registred, setRegistred] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const register = async () => {
    setLoading(true);

    try {
      const data = await toast
        .promise(
          registerToNewsletter(email),
          {
            pending: "Registration is pending",
            success: "Successfully registered to newsletter! Check your mail box.",
          },
          {
            autoClose: 3000,
            toastId: "success",
          }
        )
        .then((data) => {
          setLoading(true);
          setRegistred(true);
          setEmail("");
        });

      //display this toast after the user registers
      toast.onChange(({ id, status }) => {
        if (id === "success" && status === "removed") {
          console.log("Hello babe");
          toast(<NewsletterNext />, {
            toastId: "redirect",
          });
        }
      });
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toast.error(`${error.response.data.message}`, {
          // position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        });
      } else {
        toast.error(`${error.message}`, {});
      }
      setLoading(false);
      setRegistred(false);
      console.error("Error:", error);
    }
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
            <input type="email" name="email" value={email} onChange={handleEmail} required placeholder="Email address" />
            <Button category="contact" onClick={() => register()} disabled={loading ? true : false}>
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
    <button>Retry</button>
  </div>
);

export const NewsletterNext = () => {
  return (
    <div>
      <span>What is next?!</span>
      <Link className={"nav_link nav_link-toast"} href="/signup">
        Sign up
      </Link>
      or
      <Link className={"nav_link nav_link-toast"} href="/login">
        Login
      </Link>
      .
    </div>
  );
};

export default NewsLetter;
