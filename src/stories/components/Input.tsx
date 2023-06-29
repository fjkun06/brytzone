import React, { InputHTMLAttributes, useState } from "react";
import ShowPasswordIcon from "./ShowPasswordIcon";
import HidePasswordIcon from "./HidePasswordIcon";
import { brytzone } from "@/app/[locale]/home/header";
import { useRouter } from "next/navigation";
import SubLink from "./SubLinks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fileName?: string;
  fileSize?: string;
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
export const FileInput: React.FC<InputProps> = ({ label, fileName, fileSize, ...rest }) => {
  const size = fileSize?.includes("NaN") ? "" : `: : ${fileSize}`;
  
  return (
    <div className={`${brytzone}_field_file`}>
      <span className="file_heading">{label}</span>
      <div className="input">
        <span>
          {fileName ?? "Click icon to upload"}  {size}
        </span>
        <label htmlFor="pic">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.6786 8.88296C25.789 8.88296 24.9724 8.37254 24.564 7.58504L23.514 5.47046C22.8432 4.14337 21.0932 3.04962 19.6057 3.04962H16.2661C14.764 3.04962 13.014 4.14337 12.3432 5.47046L11.2932 7.58504C10.8849 8.37254 10.0682 8.88296 9.17863 8.88296C6.01405 8.88296 3.50571 11.5517 3.70988 14.7017L4.46821 26.7475C4.64321 29.7517 6.26196 32.2163 10.287 32.2163H25.5703C29.5953 32.2163 31.1995 29.7517 31.389 26.7475L32.1474 14.7017C32.3515 11.5517 29.8432 8.88296 26.6786 8.88296ZM15.7411 10.7059H20.1161C20.714 10.7059 21.2099 11.2017 21.2099 11.7996C21.2099 12.3975 20.714 12.8934 20.1161 12.8934H15.7411C15.1432 12.8934 14.6474 12.3975 14.6474 11.7996C14.6474 11.2017 15.1432 10.7059 15.7411 10.7059ZM17.9286 26.558C15.2161 26.558 12.9995 24.3559 12.9995 21.6288C12.9995 18.9017 15.2015 16.6996 17.9286 16.6996C20.6557 16.6996 22.8578 18.9017 22.8578 21.6288C22.8578 24.3559 20.6411 26.558 17.9286 26.558Z"
              fill="#0A518B"
            />
          </svg>
          <input {...rest} placeholder={label} type="file" id="pic" />
        </label>
      </div>
    </div>
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
