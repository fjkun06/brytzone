"use client";
import { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { brytzone } from "../../home/header";
import Heading from "@/stories/components/heading";
export default function Page({ params }: { params: { username: string } }) {
  const router = useRouter();
  useEffect(() => {
    // router.push(params.username + "/profile");
  });

  return (
    <section className={`${brytzone}_poll`}>
      <header>
        <h2>COURSE: CEC 320,EMBEDDED SYSTEMS</h2>
      </header>
      <section className="content">
        <div className="introduction">
          <Heading bordered>Answer The questions</Heading>
          <p>
            <span>This section contains all the modules of this course and requires you to answer a</span> <span className="tagged">Yes</span> or
            <span>
              <span className="tagged"> No</span> to every question that requires such answer
            </span>
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <span className="index">1</span>
            <article>
              <h2>Module 1: Introduction To Embedded Systems</h2>
              <p>This module had a brief review of what embedded systems are....</p>
              <div className="choice">
                <span className="question">Do you have a problem with this Module?</span>
                <div className="options">
                  <label>
                    Yes
                    <input type="checkbox" name="" placeholder="" />
                  </label>
                  <label>
                     No
                    <input type="checkbox" name="" placeholder="" />
                  </label>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
