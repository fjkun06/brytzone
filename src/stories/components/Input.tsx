import React, { InputHTMLAttributes, useState } from "react";
import ShowPasswordIcon from "./ShowPasswordIcon";
import HidePasswordIcon from "./HidePasswordIcon";
import { brytzone } from "@/app/[locale]/home/header";
import { useRouter } from "next/navigation";
import SubLink from "./SubLinks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  forgot?: boolean;
}

const NormalInput: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <label className={`${brytzone}_field_normal`}>
      <span>{label}</span>
      <input {...rest} placeholder={label} />
    </label>
  );
};
export const PasswordInput: React.FC<InputProps> = ({ label, forgot, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();

  return (
    <label className={`${brytzone}_field_password`} style={{ height: forgot ? "12rem" : "8.6rem" }}>
      <span>{label}</span>
      <div className="visibility">
        <input type={showPassword ? "text" : "password"} placeholder="password" {...rest} />
        <div onClick={handleTogglePassword}>{showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}</div>
      </div>
      {forgot && (
        <div className="password">
          <SubLink route="/password_recovery">Forgot password?</SubLink>
        </div>
      )}
    </label>
  );
};

export default NormalInput;
