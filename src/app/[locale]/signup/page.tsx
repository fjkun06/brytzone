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

const Login = () => {
  const router = useRouter();
  const [matricle, setMatricle] = useState("");
  const [password, setPassword] = useState("");

  const handleMatricle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMatricle(e.target.value);
  };
  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={`${brytzone}_signup`}>
      <SpecialNav />
      <div className="login_body">
        <span className="heading">Sign Up</span>
        <div className="body">
          <div className="left">
            <Image width={560} height={460} src={"/login/login_avatar.webp"} alt="login-image" quality={100} />
          </div>
          <div className="right">
            <form>
              <NormalInput label="matricule" name="matricle" value={matricle} onChange={handleMatricle} />
              <PasswordInput label="password" forgot placeholder="password" name="password" value={password} onChange={handlePassword} />
              <div className="actions">
                <Button category="content">Proceed</Button>
                <span className="help">
                  <span>Already have an account?</span>
                  <SubLink route="/login">Login</SubLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
