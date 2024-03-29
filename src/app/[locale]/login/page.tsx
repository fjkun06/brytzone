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
import React from "react";
import axios from "axios";
import { backendPort } from "@/utils/config";
import { User } from "../signup/config";
import { CircleLoader } from "react-spinners";

type Input = string | undefined;
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [limitError, setLimitError] = useState<Input>(undefined);
  const [emailError, setEmailError] = useState<Input>(undefined);
  const [passwordError, setPasswordError] = useState<Input>(undefined);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const userData = { email: "", password: "" };
    userData.email = email;
    userData.password = password;
    console.log(userData);

    //reset errors
    setEmailError("");
    setPasswordError("");
    setLimitError("");
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:${backendPort}/login`,
        { ...userData },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const datum = await res.data;
      console.log(datum);
      if (res.data.errors) {
        setLoading(false);

        setEmailError(datum.errors.email);
        setPasswordError(datum.errors.password);
      }
      if (res) {
        setUser(res.data.user);
        const userName = res.data.user.split(" ")[0];

        setTimeout(() => {
          if (userName) router.push(`${userName.toLocaleLowerCase()}/profile`);
        }, 1500);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.message);
      if (error.response.data.errors) {
        const { email, limit, password } = error?.response?.data?.errors;
        setEmailError(email);
        setPasswordError(password);
        setLimitError(limit);
        setLoading(false);
      }
      if (error.response.data.message) {
        setLimitError(error.response.data.message);
        setLoading(false);
      }

      if (error.response.status === 401 || error.response.status === 400) {
        console.log(401);

        // location.assign("/signup/verify");
      }
    }
  };

  return (
    <section className={`${brytzone}_login`}>
      <SpecialNav />
      <div className="login_body">
        <span className="heading">
          <svg width="200" height="174" viewBox="0 0 200 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ddddd_414_3126)">
              <rect x="112.292" y="6.91846" width="51.2082" height="58.49" fill="#0A518B" />
              <rect x="26.6666" y="55.9185" width="75" height="10" rx="5" fill="#FBB606" />
              <path
                d="M42.3683 46.9785H52.4483V52.9185H34.6733V21.3285H42.3683V46.9785ZM67.5486 53.2785C65.0886 53.2785 62.8686 52.7535 60.8886 51.7035C58.9386 50.6535 57.3936 49.1535 56.2536 47.2035C55.1436 45.2535 54.5886 42.9735 54.5886 40.3635C54.5886 37.7835 55.1586 35.5185 56.2986 33.5685C57.4386 31.5885 58.9986 30.0735 60.9786 29.0235C62.9586 27.9735 65.1786 27.4485 67.6386 27.4485C70.0986 27.4485 72.3186 27.9735 74.2986 29.0235C76.2786 30.0735 77.8386 31.5885 78.9786 33.5685C80.1186 35.5185 80.6886 37.7835 80.6886 40.3635C80.6886 42.9435 80.1036 45.2235 78.9336 47.2035C77.7936 49.1535 76.2186 50.6535 74.2086 51.7035C72.2286 52.7535 70.0086 53.2785 67.5486 53.2785ZM67.5486 46.6185C69.0186 46.6185 70.2636 46.0785 71.2836 44.9985C72.3336 43.9185 72.8586 42.3735 72.8586 40.3635C72.8586 38.3535 72.3486 36.8085 71.3286 35.7285C70.3386 34.6485 69.1086 34.1085 67.6386 34.1085C66.1386 34.1085 64.8936 34.6485 63.9036 35.7285C62.9136 36.7785 62.4186 38.3235 62.4186 40.3635C62.4186 42.3735 62.8986 43.9185 63.8586 44.9985C64.8486 46.0785 66.0786 46.6185 67.5486 46.6185ZM94.311 27.4485C96.081 27.4485 97.626 27.8085 98.946 28.5285C100.296 29.2485 101.331 30.1935 102.051 31.3635V27.8085H109.746V52.8735C109.746 55.1835 109.281 57.2685 108.351 59.1285C107.451 61.0185 106.056 62.5185 104.166 63.6285C102.306 64.7385 99.981 65.2935 97.191 65.2935C93.471 65.2935 90.456 64.4085 88.146 62.6385C85.836 60.8985 84.516 58.5285 84.186 55.5285H91.791C92.031 56.4885 92.601 57.2385 93.501 57.7785C94.401 58.3485 95.511 58.6335 96.831 58.6335C98.421 58.6335 99.681 58.1685 100.611 57.2385C101.571 56.3385 102.051 54.8835 102.051 52.8735V49.3185C101.301 50.4885 100.266 51.4485 98.946 52.1985C97.626 52.9185 96.081 53.2785 94.311 53.2785C92.241 53.2785 90.366 52.7535 88.686 51.7035C87.006 50.6235 85.671 49.1085 84.681 47.1585C83.721 45.1785 83.241 42.8985 83.241 40.3185C83.241 37.7385 83.721 35.4735 84.681 33.5235C85.671 31.5735 87.006 30.0735 88.686 29.0235C90.366 27.9735 92.241 27.4485 94.311 27.4485ZM102.051 40.3635C102.051 38.4435 101.511 36.9285 100.431 35.8185C99.381 34.7085 98.091 34.1535 96.561 34.1535C95.031 34.1535 93.726 34.7085 92.646 35.8185C91.596 36.8985 91.071 38.3985 91.071 40.3185C91.071 42.2385 91.596 43.7685 92.646 44.9085C93.726 46.0185 95.031 46.5735 96.561 46.5735C98.091 46.5735 99.381 46.0185 100.431 44.9085C101.511 43.7985 102.051 42.2835 102.051 40.3635Z"
                fill="#0A518B"
              />
              <path
                d="M123.008 21.3285V52.9185H115.313V21.3285H123.008ZM143.884 27.5385C146.824 27.5385 149.164 28.4985 150.904 30.4185C152.674 32.3085 153.559 34.9185 153.559 38.2485V52.9185H145.909V39.2835C145.909 37.6035 145.474 36.2985 144.604 35.3685C143.734 34.4385 142.564 33.9735 141.094 33.9735C139.624 33.9735 138.454 34.4385 137.584 35.3685C136.714 36.2985 136.279 37.6035 136.279 39.2835V52.9185H128.584V27.8085H136.279V31.1385C137.059 30.0285 138.109 29.1585 139.429 28.5285C140.749 27.8685 142.234 27.5385 143.884 27.5385Z"
                fill="white"
              />
            </g>
          </svg>
        </span>
        <div className="body">
          <div className="left">
            <Image width={560} height={460} src={"/login/login_avatar.webp"} alt="login-image" quality={100} />
          </div>
          <div className="right">
            <form onSubmit={onSubmit}>
              <NormalInput error={emailError} label="email" name="email" value={email} onChange={handleEmail} />
              <PasswordInput error={passwordError} label="password" forgot placeholder="password" name="password" value={password} onChange={handlePassword} />
              {limitError && <span className="limit_error">{limitError}</span>}

              <div className="actions">
                <Button type="submit" category="content">
                  {loading ? <CircleLoader cssOverride={{ color: "white" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" /> : "Log In"}
                </Button>
                <span className="help">
                  <span>Don’t have an account?</span>
                  <SubLink route="/signup">Sign Up</SubLink> 
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
