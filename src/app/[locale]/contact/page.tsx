"use client";

import { sendContactForm } from "@/lib/sendContactForm";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

const initState = {
  values: initValues,
  isLoading: false,
  error: "",
};
export type ContactData = typeof initValues;
// export  as ContactData;

const Dashbaord = () => {
  const t = useTranslations("dash");
  const path1 = usePathname();
  // console.log("path: ", path1);
  // console.log(path1.slice(3 - path1.length));
  // // console.log(path.slice(3 - path.length) + "dashboard");

  const [inputs, setData] = React.useState(initState);
  const { values, isLoading, error } = inputs;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setData((prev: typeof initState) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };
  const handleChangeT: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setData((prev: typeof initState) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setData((prev: typeof initState) => ({ ...prev, isLoading: true }));
    //sending form data to the server
    try {
      const res = await sendContactForm(values);
      console.log(res);
      if(res === 200) {
    setData((prev: typeof initState) => ({ ...prev, isLoading: false }));

      }
    } catch (error: any) {
      setData((prev: typeof initState) => ({ ...prev, isLoading: false, error: error.message }));
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Contact</h1>
      <form className="" onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required type="text" name="name" placeholder="name" value={values.name} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input id="email" required type="email" name="email" placeholder="email" value={values.email} onChange={handleChange} />
        <label htmlFor="subject">Subject:</label>
        <input id="subject" required type="text" name="subject" placeholder="subject" value={values.subject} onChange={handleChange} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" required name="message" placeholder="message" value={values.message} onChange={handleChangeT} />
        <button
          type="submit"
          className=""
          // isLoading = {isLoading}
        >
          {!isLoading ? "Submit" : "Loading"}
        </button>
      </form>
    </div>
  );
};

export default Dashbaord;
