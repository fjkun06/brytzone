"use client";
import logo from "../../../../public/assets/images/icon.png";
import { useTranslations } from "next-intl";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export const metadata = {
  title: "Ensome | Services",
  description: "section displaying all the services we offer",
};
import Link from "next-intl/link";
import { brytzone } from "../home/header";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [matricle, setMatricle] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMatricle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMatricle(e.target.value);
    console.log(e.target.value);
  };
  // const t = useTranslations("dash");
  const path1 = usePathname();
  console.log("path: ", path1);
  console.log(path1.slice(3 - path1.length));
  const p2 = path1.slice(3 - path1.length);
  return (
    <section className={`${brytzone}_login`}>
      <nav className={`${brytzone}_special_nav`}>
        {/* <Image width={280} height={209} src={logo} alt="" onClick={() => router.push("/")}/> */}
        <Image width={84} height={63} src={logo} alt="brytzone-logo" onClick={() => router.push("/")} />
      </nav>
      <div className="login_body">
        {/* <h1>Login</h1> */}

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
            <defs>
              <filter id="filter0_ddddd_414_3126" x="0.666626" y="0.918457" width="198.833" height="173" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_414_3126" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="5.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_414_3126" result="effect2_dropShadow_414_3126" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="19" />
                <feGaussianBlur stdDeviation="9.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_414_3126" result="effect3_dropShadow_414_3126" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="3" dy="43" />
                <feGaussianBlur stdDeviation="13" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_414_3126" result="effect4_dropShadow_414_3126" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="5" dy="77" />
                <feGaussianBlur stdDeviation="15.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_414_3126" result="effect5_dropShadow_414_3126" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_414_3126" result="shape" />
              </filter>
            </defs>
          </svg>
        </span>
        <div className="body">
          <div className="left">
            <Image width={560} height={460} src={"/login/login_avatar.webp"} alt="login-image" quality={100} />
          </div>
          <div className="right">
            <form className="">
              <label className="field_normal">
                <span>
                  Matricule
                  <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      id="Vector"
                      d="M28.3355 21.3155L1.63976 0.445999C1.56654 0.387375 1.48249 0.343747 1.39241 0.317606C1.30232 0.291465 1.20797 0.283323 1.11475 0.293645C1.02152 0.303967 0.931233 0.33255 0.849051 0.377764C0.766868 0.422977 0.694396 0.483935 0.635772 0.557157L0.189355 1.11473C0.130593 1.18798 0.0868514 1.27209 0.0606325 1.36226C0.0344136 1.45243 0.0262324 1.54689 0.0365569 1.64022C0.0468814 1.73356 0.075509 1.82394 0.120802 1.9062C0.166094 1.98846 0.227163 2.06098 0.300513 2.11961L26.9962 22.9891C27.0694 23.0478 27.1535 23.0914 27.2436 23.1175C27.3337 23.1437 27.428 23.1518 27.5212 23.1415C27.6145 23.1312 27.7048 23.1026 27.7869 23.0574C27.8691 23.0122 27.9416 22.9512 28.0002 22.878L28.4466 22.3204C28.5054 22.2472 28.5491 22.163 28.5754 22.0729C28.6016 21.9827 28.6098 21.8883 28.5994 21.7949C28.5891 21.7016 28.5605 21.6112 28.5152 21.5289C28.4699 21.4467 28.4088 21.3742 28.3355 21.3155ZM13.2819 6.82797L19.2991 11.5323C19.2 8.85649 17.0179 6.7177 14.318 6.7177C13.9697 6.71836 13.6225 6.75531 13.2819 6.82797ZM15.3541 16.6076L9.33688 11.9033C9.43643 14.5787 11.6185 16.7174 14.318 16.7174C14.6662 16.7167 15.0135 16.6799 15.3541 16.6076ZM14.318 5.28917C18.7219 5.28917 22.7593 7.74446 24.9396 11.7176C24.4051 12.6954 23.7448 13.5989 22.9753 14.405L24.6601 15.7219C25.5981 14.7185 26.3928 13.5901 27.0217 12.3689C27.1238 12.1669 27.177 11.9437 27.177 11.7173C27.177 11.491 27.1238 11.2678 27.0217 11.0658C24.5985 6.34227 19.8058 3.14637 14.318 3.14637C12.6796 3.14637 11.1167 3.45886 9.64714 3.98608L11.719 5.60613C12.5645 5.41417 13.4305 5.28917 14.318 5.28917ZM14.318 18.146C9.91409 18.146 5.87715 15.6907 3.6964 11.7176C4.23156 10.7398 4.89269 9.83639 5.66287 9.03059L3.97809 7.71366C3.04024 8.71697 2.24567 9.84519 1.617 11.0662C1.51487 11.2683 1.46167 11.4914 1.46167 11.7178C1.46167 11.9441 1.51487 12.1673 1.617 12.3693C4.03791 17.0929 8.83064 20.2888 14.318 20.2888C15.9563 20.2888 17.5192 19.974 18.9889 19.4491L16.917 17.8295C16.0715 18.021 15.2059 18.146 14.318 18.146Z"
                      fill="#3C3232"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <svg width="26" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.72 17.14">
                    <g id="ad61956e-c5a0-4291-8319-b980a643b41b" data-name="Layer 2">
                      <g id="ae376123-b901-47eb-8a27-530e596588a6" data-name="Layer 1">
                        <path
                          d="M25.56,7.92A14.3,14.3,0,0,0,12.86,0,13.7,13.7,0,0,0,8.19.84,14.62,14.62,0,0,0,2.52,4.56,15.08,15.08,0,0,0,.16,7.92,1.33,1.33,0,0,0,0,8.57a1.36,1.36,0,0,0,.16.65,14.32,14.32,0,0,0,12.7,7.92,14,14,0,0,0,4.67-.84,18.3,18.3,0,0,0,5.67-3.73,14.8,14.8,0,0,0,2.36-3.35,1.49,1.49,0,0,0,.16-.65A1.45,1.45,0,0,0,25.56,7.92Zm-4,3.33a13.49,13.49,0,0,1-6.06,3.43,11.86,11.86,0,0,1-2.6.32A12.14,12.14,0,0,1,2.24,8.57a12.61,12.61,0,0,1,2-2.69,14.12,14.12,0,0,1,8.66-3.74A12.13,12.13,0,0,1,23.48,8.57,12.64,12.64,0,0,1,21.52,11.25Z"
                          fill="#3c3232"
                          fillOpacity="0.8"
                        />
                        <circle cx="12.82" cy="8.51" r="4.94" fill="#3c3232" fillOpacity="0.8" />
                      </g>
                    </g>
                  </svg>
                </span>
                <input type="text" placeholder="Matricle" name="matricle" value={matricle} onChange={handleMatricle} />
              </label>
              <label className="field_password">
                <span>Password</span>
                <div className="visibility">
                  <input type={showPassword? "text":"password"} placeholder="Matricle" name="matricle" value={matricle} onChange={handleMatricle} />
                  <div onClick={handleTogglePassword}>
                    {showPassword ? (
                      <svg width="26" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.72 17.14">
                        <g id="ad61956e-c5a0-4291-8319-b980a643b41b" data-name="Layer 2">
                          <g id="ae376123-b901-47eb-8a27-530e596588a6" data-name="Layer 1">
                            <path
                              d="M25.56,7.92A14.3,14.3,0,0,0,12.86,0,13.7,13.7,0,0,0,8.19.84,14.62,14.62,0,0,0,2.52,4.56,15.08,15.08,0,0,0,.16,7.92,1.33,1.33,0,0,0,0,8.57a1.36,1.36,0,0,0,.16.65,14.32,14.32,0,0,0,12.7,7.92,14,14,0,0,0,4.67-.84,18.3,18.3,0,0,0,5.67-3.73,14.8,14.8,0,0,0,2.36-3.35,1.49,1.49,0,0,0,.16-.65A1.45,1.45,0,0,0,25.56,7.92Zm-4,3.33a13.49,13.49,0,0,1-6.06,3.43,11.86,11.86,0,0,1-2.6.32A12.14,12.14,0,0,1,2.24,8.57a12.61,12.61,0,0,1,2-2.69,14.12,14.12,0,0,1,8.66-3.74A12.13,12.13,0,0,1,23.48,8.57,12.64,12.64,0,0,1,21.52,11.25Z"
                              fill="#3c3232"
                              fillOpacity="0.8"
                            />
                            <circle cx="12.82" cy="8.51" r="4.94" fill="#3c3232" fillOpacity="0.8" />
                          </g>
                        </g>
                      </svg>
                    ) : (
                      <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          id="Vector"
                          d="M28.3355 21.3155L1.63976 0.445999C1.56654 0.387375 1.48249 0.343747 1.39241 0.317606C1.30232 0.291465 1.20797 0.283323 1.11475 0.293645C1.02152 0.303967 0.931233 0.33255 0.849051 0.377764C0.766868 0.422977 0.694396 0.483935 0.635772 0.557157L0.189355 1.11473C0.130593 1.18798 0.0868514 1.27209 0.0606325 1.36226C0.0344136 1.45243 0.0262324 1.54689 0.0365569 1.64022C0.0468814 1.73356 0.075509 1.82394 0.120802 1.9062C0.166094 1.98846 0.227163 2.06098 0.300513 2.11961L26.9962 22.9891C27.0694 23.0478 27.1535 23.0914 27.2436 23.1175C27.3337 23.1437 27.428 23.1518 27.5212 23.1415C27.6145 23.1312 27.7048 23.1026 27.7869 23.0574C27.8691 23.0122 27.9416 22.9512 28.0002 22.878L28.4466 22.3204C28.5054 22.2472 28.5491 22.163 28.5754 22.0729C28.6016 21.9827 28.6098 21.8883 28.5994 21.7949C28.5891 21.7016 28.5605 21.6112 28.5152 21.5289C28.4699 21.4467 28.4088 21.3742 28.3355 21.3155ZM13.2819 6.82797L19.2991 11.5323C19.2 8.85649 17.0179 6.7177 14.318 6.7177C13.9697 6.71836 13.6225 6.75531 13.2819 6.82797ZM15.3541 16.6076L9.33688 11.9033C9.43643 14.5787 11.6185 16.7174 14.318 16.7174C14.6662 16.7167 15.0135 16.6799 15.3541 16.6076ZM14.318 5.28917C18.7219 5.28917 22.7593 7.74446 24.9396 11.7176C24.4051 12.6954 23.7448 13.5989 22.9753 14.405L24.6601 15.7219C25.5981 14.7185 26.3928 13.5901 27.0217 12.3689C27.1238 12.1669 27.177 11.9437 27.177 11.7173C27.177 11.491 27.1238 11.2678 27.0217 11.0658C24.5985 6.34227 19.8058 3.14637 14.318 3.14637C12.6796 3.14637 11.1167 3.45886 9.64714 3.98608L11.719 5.60613C12.5645 5.41417 13.4305 5.28917 14.318 5.28917ZM14.318 18.146C9.91409 18.146 5.87715 15.6907 3.6964 11.7176C4.23156 10.7398 4.89269 9.83639 5.66287 9.03059L3.97809 7.71366C3.04024 8.71697 2.24567 9.84519 1.617 11.0662C1.51487 11.2683 1.46167 11.4914 1.46167 11.7178C1.46167 11.9441 1.51487 12.1673 1.617 12.3693C4.03791 17.0929 8.83064 20.2888 14.318 20.2888C15.9563 20.2888 17.5192 19.974 18.9889 19.4491L16.917 17.8295C16.0715 18.021 15.2059 18.146 14.318 18.146Z"
                          fill="#3C3232"
                          fillOpacity="0.8"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
