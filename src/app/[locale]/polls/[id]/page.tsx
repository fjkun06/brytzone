"use client";
import { useEffect, useState, useContext } from "react";
import { backendPort } from "@/utils/config";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { brytzone } from "../../home/header";
export default function Page({ params }: { params: { username: string } }) {
  const router = useRouter();
  useEffect(() => {
    // router.push(params.username + "/profile");
  });

  return (
    <section className={`${brytzone}_poll`}>
      <header>
        <h2></h2>
      </header>
      <section className="content">
        <div className="introduction"></div>
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
