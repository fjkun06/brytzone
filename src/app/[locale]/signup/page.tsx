"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { brytzone } from "../home/header";
import Image from "next/image";
import { useState } from "react";
import NormalInput, { PasswordInput } from "@/stories/components/Input";
import { Button } from "@/stories/components/Button";
import SubLink from "@/stories/components/SubLinks";
import SpecialNav from "@/stories/layout/navbar/SpecialNav";
import { motion, AnimatePresence } from "framer-motion";
import SkillList, { Skill } from "./skills";
import AreaOfInterestSelector from "./interest";
import Demo from "./Demo";
import Filer from "./upload";
import Progress from "./progress";

const Login = () => {
  const router = useRouter();
  const [matricle, setMatricle] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  //handle steps
  const increment = () => {
    if (step === 3) {
      setCompleted(true);
    }
    if (!(step >= 1 && step < 3)) {
      return;
    }

    console.log(`before ${step}`);
    setStep((s) => s + 1);
    console.log(`after ${step}`);
  };
  const decrement = () => {
    if (!(step > 1 && step <= 3)) {
      return;
    }
    console.log(`before ${step}`);
    setCompleted(false);

    setStep((s) => s - 1);
    console.log(`after ${step}`);
  };

  const handleMatricle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMatricle(e.target.value);
  };
  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  //form interface
  interface Form {
    name: string;
    matricule: string;
    level: number;
    email: string;
  }

  /**********************************************Skills List **********************************************/
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const handleSlillList = (skills: Skill[]) => {
    setSelectedSkills(skills);
    console.log(skills);
  };

  return (
    <section className={`${brytzone}_signup`}>
      <SpecialNav />
      <div className="signup_body">
        <div className="body">
          <div className="right">
            <span className="heading" />

            <Progress step={step} completed={completed} />
            <form>
              <motion.div layout className="container">
                <MyComponent isVisible={step === 1}>
                  <motion.div layout className="sub-container">
                    <NormalInput label="Full Name" name="name" value={matricle} onChange={handleMatricle} />
                    <NormalInput label="matricule" name="matricle" value={matricle} onChange={handleMatricle} />
                    <NormalInput label="level" name="level" value={matricle} onChange={handleMatricle} />
                    {/* <PasswordInput label="password" forgot placeholder="password" name="password" value={password} onChange={handlePassword} /> */}
                    {/* <SkillList skills={selectedSkills} setSkills={handleSlillList} /> */}
                    {/* <AreaOfInterestSelector /> */}
                  </motion.div>
                </MyComponent>
                <MyComponent isVisible={step === 2}>
                  <div className="subContainer">
                    <NormalInput label="matricule1" name="matricle" value={matricle} onChange={handleMatricle} />
                    <PasswordInput label="password1" forgot placeholder="password" name="password" value={password} onChange={handlePassword} />
                  </div>
                </MyComponent>
                <MyComponent isVisible={step === 3}>
                  <div className="subContainer">
                    <NormalInput label="matricule2" name="matricle" value={matricle} onChange={handleMatricle} />
                    <PasswordInput label="password2" forgot placeholder="password" name="password" value={password} onChange={handlePassword} />
                    <Filer />
                  </div>
                </MyComponent>
                <div className="btns">
                  {/* {step > 1 && ( */}
                  <button type="button" style={{ opacity: step > 1 ? 1 : 0 }}  onClick={decrement}>
                    Back
                  </button>
                  {/* )} */}
                  <Button category="content" onClick={increment}>
                    Next
                  </Button>
                  {/* <Button category="content">Back</Button>
                  <Button category="content">Next</Button> */}
                </div>
              </motion.div>
              <div className="actions">
                <Button category="content">Proceed</Button>
                <span className="help">
                  <span>Already have an account?</span>
                  <SubLink route="/login">Login</SubLink>
                </span>
              </div>
            </form>
          </div>
          <div className="left">
            <svg width="645" height="736" viewBox="0 0 645 736" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_ddddd_297_2520)">
                <rect x="171.766" y="16.403" width="376.982" height="565.069" fill="url(#pattern0)" />
                <ellipse cx="191.788" cy="564.696" rx="45.6906" ry="45.511" fill="#0A518B" />
                <path d="M188.693 274.458L129.846 320.09L119.752 246.311L188.693 274.458Z" fill="#FBB606">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 154.77 283.2" to="360 154.77 283.2" dur="10s" repeatCount="indefinite" />
                </path>
                <rect x="525.229" y="441.429" width="63.3504" height="63.6372" rx="9.68393" fill="#FBB606">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 556.404 473.748" to="360 556.404 473.748" dur="10s" begin="3s" repeatCount="indefinite" />
                </rect>
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_297_2520" transform="matrix(0.00245098 0 0 0.00163515 0 -0.00035712)" />
                </pattern>
                <image id="image0_297_2520" width="408" height="612" href="/signup/mosaic.webp" />
              </defs>
            </svg>
            {/* <Image width={560} height={460} src={"/login/login_avatar.webp"} alt="login-image" quality={100} /> */}
          </div>
        </div>
      </div>
      {/* <Demo/> */}
    </section>
  );
};

export default Login;

const MyComponent = ({ isVisible, children }: { isVisible: boolean; children: any }) => <AnimatePresence>{isVisible && <>{children}</>}</AnimatePresence>;
