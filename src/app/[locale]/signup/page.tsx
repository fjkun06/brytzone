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
import Mosaic from "./mosaic";
import Navigator from "./navigator";
import { useForm, Controller } from "react-hook-form";
import LevelComponent from "./level";

const Login = () => {
  const router = useRouter();
  const [matricle, setMatricle] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

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
    level: string;
    email: string;
  }

  /**********************************************Skills List **********************************************/
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const handleSlillList = (skills: Skill[]) => {
    setSelectedSkills(skills);
    console.log(skills);
  };
  /**********************************************Handling input fields**********************************************/
  type FormValues = {
    matricule: string;
    name: string;
    password: string;
    level: number;
    email: string;
  };
  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      matricule: "",
      password: "",
      level: 0,
      email: "",
      name: "",
    },
  });

  const handleLevel = (value: number) => {
    setValue("level", value);
  }

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
                    <Controller
                      control={control}
                      name="name"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="full name" value={value} onChange={onChange} />}
                    />
                    <Controller
                      control={control}
                      name="matricule"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="matricule" value={value} onChange={onChange} />}
                    />
                    <LevelComponent  setLevel={handleLevel}/>

                 
                    {/* <PasswordInput label="password" forgot placeholder="password" name="password" value={password} onChange={handlePassword} /> */}
                    {/* <SkillList skills={selectedSkills} setSkills={handleSlillList} /> */}
                    {/* <AreaOfInterestSelector/> */}
                  </motion.div>
                </MyComponent>
                <MyComponent isVisible={step === 2}>
                  <div className="sub-container">
                    <Controller
                      control={control}
                      name="matricule"
                      render={({ field: { onChange, onBlur, value, ref } }) => <NormalInput onBlur={onBlur} label="matricule" value={value} onChange={onChange} />}
                    />
                    <Controller
                      control={control}
                      name="password"
                      render={({ field: { onChange, onBlur, value, ref } }) => <PasswordInput onBlur={onBlur} label="password" placeholder="password" value={value} onChange={onChange} />}
                    />
                    {/* <div className="test">
                      <label htmlFor="pet-select">Choose a pet:</label>

                      <select name="pets" id="pet-select">
                        <option value="">--Please choose a level--</option>
                        <option value="dog">200</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                    </div> */}
                  </div>
                </MyComponent>
                <MyComponent isVisible={step === 3}>
                  <div className="sub-container">
                    <NormalInput label="matricule2" name="matricle" value={matricle} onChange={handleMatricle} />
                    <PasswordInput label="password2" forgot placeholder="password" name="password" value={password} onChange={handlePassword} />
                    <Filer />
                  </div>
                </MyComponent>
                <Navigator step={step} stepCallback={setStep} completeCallback={setCompleted} />
              </motion.div>
              <div className="actions">
                <Button
                  category="content"
                  onClick={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  Proceed
                </Button>

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

export default Login;

const MyComponent = ({ isVisible, children }: { isVisible: boolean; children: any }) => <AnimatePresence>{isVisible && <>{children}</>}</AnimatePresence>;
