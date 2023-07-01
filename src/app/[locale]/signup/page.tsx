"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { brytzone } from "../home/header";
import Image from "next/image";
import { useState } from "react";
import NormalInput, { FileInput, PasswordInput } from "@/stories/components/Input";
import { Button } from "@/stories/components/Button";
import SubLink from "@/stories/components/SubLinks";
import SpecialNav from "@/stories/layout/navbar/SpecialNav";
import { motion, AnimatePresence } from "framer-motion";
import Demo from "./Demo";
import Filer from "./upload";
import Progress from "./progress";
import Mosaic from "./mosaic";
import Navigator from "./navigator";
import { useForm, Controller } from "react-hook-form";
import LevelComponent from "./level";
import { genId } from "@/utils/config";
import CustomSelectDropdown from "./CustomDropDown";
import { updatedInterests, updatedSkills } from "./config";
import SubmitModal from "./modal";

export type FormValues = {
  matricule: string;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  level: number;
  email: string;
  skills: string[];
  interests: string[];
  picture: File | undefined;
};

const SignUp = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  /**********************************************Skills List **********************************************/

  /**********************************************Handling input fields**********************************************/

  const { handleSubmit, control, setValue,getValues } = useForm<FormValues>({
    defaultValues: {
      matricule: "",
      password: "",
      confirmPassword: "",
      level: 0,
      email: "",
      name: "",
      username: "",
      skills: [],
      interests: [],
      picture: undefined,
    },
  });

  //getting dropdown item values
  const handleLevel = (value: number) => {
    setValue("level", value);
  };
  const handleInterests = (value: string[]) => {
    setValue("interests", value);
  };
  const handleSkills = (value: string[]) => {
    setValue("skills", value);
  };
  const handlePicture = (pic: File | undefined) => {
    setValue("picture", pic);
  };
  const onSubmit = (data: FormValues) => {
    // Handle form submission
    console.log(data);
    
  };

  const handleData = () => getValues();

  return (
    <section className={`${brytzone}_signup`}>
      <SpecialNav />
      <div className="signup_body">
        <div className="body">
          <div className="right">
            <span className="heading" />
            <span className="counter">{step}</span>
            <form>
              <motion.div layout className="container">
                <Progress step={step} completed={completed} />

                <AnimatePresence initial={false} mode="wait">
                  <SubContainer isVisible={step === 1} key={genId()}>
                    <Controller
                      control={control}
                      name="name"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="full name" value={value} onChange={onChange} />}
                    />
                    <Controller
                      control={control}
                      name="username"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="username" value={value} onChange={onChange} />}
                    />
                    <Controller
                      control={control}
                      name="matricule"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="matricule" value={value} onChange={onChange} />}
                    />
                    <LevelComponent setLevel={handleLevel} />
                  </SubContainer>

                  <SubContainer isVisible={step === 2} key={genId()}>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="email" value={value} onChange={onChange} />}
                    />
                    <CustomSelectDropdown setter={handleInterests} data={updatedInterests} heading="Area(s) of Interest" />
                    <CustomSelectDropdown setter={handleSkills} data={updatedSkills} heading="Skill(s)" />
                  </SubContainer>
                  <SubContainer isVisible={step >= 3} key={genId()}>
                    <Controller
                      control={control}
                      name="password"
                      render={({ field: { onChange, onBlur, value, ref } }) => <PasswordInput label="password" placeholder="password" onBlur={onBlur} value={value} onChange={onChange} />}
                    />
                    <Controller
                      control={control}
                      name="confirmPassword"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PasswordInput label="confirm password" placeholder="confirm password" onBlur={onBlur} value={value} onChange={onChange} />
                      )}
                    />
                    <Filer setter={handlePicture} />
                  </SubContainer>
                  <SubContainer isVisible={step === 4} key={genId()}>
                    <SubmitModal stepCallback={setStep} formCallback={handleSubmit(onSubmit)} loadData={handleData}/>
                  </SubContainer>
                </AnimatePresence>
                <Navigator step={step} stepCallback={setStep} completeCallback={setCompleted}  />
              </motion.div>
              <div className="actions">
                {/* <Button
                  category="content"
                  onClick={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  Proceed
                </Button> */}

                <span className="help">
                  <span>Already have an account?</span>
                  <SubLink route="/login">Login</SubLink>
                </span>
              </div>
            </form>
          </div>
          <Mosaic />
        </div>
      </div>
      {/* <Demo/> */}
    </section>
  );
};

export default SignUp;

const SubContainer = ({ isVisible, children }: { isVisible: boolean; children: any }) => {
  const circle = {
    animate: {
      opacity: 1,
      transition: { delay: 0.25, duration: 0.35, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.25, duration: 0.35, ease: "easeInOut" },
    },
  };
  const init = { opacity: 0 };
  return (
    <>
      {isVisible && (
        <motion.div initial={init} exit={circle.exit} animate={circle.animate} layout className="sub-container">
          {children}
        </motion.div>
      )}
    </>
  );
};
