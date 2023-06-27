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
      <div className="signup_body">
        <span className="heading">Sign Up</span>
        <div className="body">
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
          <div className="left">
            <svg width="645" height="736" viewBox="0 0 645 736" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_ddddd_297_2520)">
                <rect x="171.766" y="16.403" width="376.982" height="565.069" fill="url(#pattern0)" />
                <ellipse cx="191.788" cy="564.696" rx="45.6906" ry="45.511" fill="#0A518B" />
                <path d="M188.693 274.458L129.846 320.09L119.752 246.311L188.693 274.458Z" fill="#FBB606">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 154.77 283.2" to="360 154.77 283.2" dur="10s" repeatCount="indefinite" />
                </path>
                <rect x="525.229" y="441.429" width="63.3504" height="63.6372" rx="9.68393" fill="#FBB606">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 556.404 473.748" to="360 556.404 473.748" dur="10s" begin='3s' repeatCount="indefinite" />
                </rect>
              </g>
              <defs>
                <filter id="filter0_ddddd_297_2520" x="0.969837" y="0.56545" width="643.042" height="912.535" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_2520" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-1.9797" dy="13.8579" />
                  <feGaussianBlur stdDeviation="14.8477" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_297_2520" result="effect2_dropShadow_297_2520" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-7.9188" dy="53.4519" />
                  <feGaussianBlur stdDeviation="27.2209" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                  <feBlend mode="normal" in2="effect2_dropShadow_297_2520" result="effect3_dropShadow_297_2520" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-17.8173" dy="121.752" />
                  <feGaussianBlur stdDeviation="36.6244" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="effect3_dropShadow_297_2520" result="effect4_dropShadow_297_2520" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-31.6752" dy="215.787" />
                  <feGaussianBlur stdDeviation="43.5534" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                  <feBlend mode="normal" in2="effect4_dropShadow_297_2520" result="effect5_dropShadow_297_2520" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_297_2520" result="shape" />
                </filter>
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
    </section>
  );
};

export default Login;
