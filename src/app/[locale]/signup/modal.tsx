import React, { Dispatch, SetStateAction, useState } from "react";
import { brytzone } from "../home/header";
import { AnimatePresence, motion } from "framer-motion";
import { FormValues } from "./page";
import { backendPort, genId } from "@/utils/config";
import { CircleLoader } from "react-spinners";
import axios from "axios";
import NormalInput from "@/stories/components/Input";
import { User } from "./config";
import { useRouter } from "next/navigation";

interface SubmitModalProps {
  stepCallback: Dispatch<SetStateAction<number>>;
  formCallback: (data: any) => void;
  loadData: () => FormValues;
}
const SubmitModal: React.FC<SubmitModalProps> = ({ stepCallback, formCallback, loadData }) => {
  const decrementParent = () => {
    stepCallback((s) => s - 1);
  };
  /******************Animations config******************/
  const svg = {
    animate: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const init = { pathLength: 0 };

  const handler = () => {
    console.log(loadData());
  };
  //hovers
  const [step, setStep] = useState(0);
  const increment = () => {
    if (step <= 3) {
      setStep((s) => s + 1);
    }
  };
  const decrement = () => {
    console.log("clecke");

    setStep((s) => s - 1);
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={`${brytzone}_submit_modal`}>
      <AnimatePresence initial={false}>
        <SignUpCreate key={genId()} visible={step === 0} increment={increment} decrement={decrement} decrementParent={decrementParent} />
        <SignUpCreation key={genId()} visible={step === 1} increment={increment} data={loadData()} />
        <SignUpVerify key={genId()} visible={step === 2} increment={increment} />
        {/* <SignUpSucess key={genId()} visible={step === 3} increment={increment} /> */}
        <SignUpComplete key={genId()} visible={step === 3} />
        {/* <motion.div className="submit"></motion.div> */}
      </AnimatePresence>
    </div>
  );
};

export default SubmitModal;

const SubContainer = ({ isVisible, children }: { isVisible: boolean; children: any }) => {
  const comp = {
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
        <motion.div initial={init} exit={comp.exit} animate={comp.animate} layout className="submit">
          {children}
        </motion.div>
      )}
    </>
  );
};
interface Screen {
  visible: boolean;
  increment: () => void;
}
interface Create extends Screen {
  data: FormValues;
}
interface Init extends Screen {
  decrement: () => void;
  decrementParent: () => void;
}
export const SignUpCreation: React.FC<Create> = ({ visible, increment, data }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleFileSend = async () => {
    try {
      const res = await axios.post(`http://localhost:${backendPort}/signup`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res) increment();
      console.log(res); // Handle the response as needed
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      console.error("Error submitting form:", error);
    }
  };
  React.useEffect(() => {
    setTimeout(() => {
      if (visible) handleFileSend();
    }, 1000);
  }, []);

  return (
    <SubContainer isVisible={visible}>
      <h2>Creating user...</h2>
      <motion.p animate={{ scale: 2.5, y: -50 }}>
        <CircleLoader loading={loading} cssOverride={{ color: "var(--test)" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" />
      </motion.p>
      {error.length > 0 && <span className="error">{error}</span>}
      {error.length > 0 && (
        <div className="submit_actions">
          <motion.span layout onClick={handleFileSend} className={`${brytzone}_sublink proceed`}>
            Retry
          </motion.span>
        </div>
      )}
    </SubContainer>
  );
};
export const SignUpSucess: React.FC<Screen> = ({ visible, increment }) => {
  return (
    <SubContainer isVisible={visible}>
      <h2 className="">User Successfully created!</h2>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05">
            <animate
              attributeName="d"
              dur="0.5s"
              repeatCount="1"
              keyTimes="0; 1"
              values="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05; M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05; M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05; M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05; M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05"
            />
          </path>
        </svg>
      </p>
      <div className="submit_actions"></div>
    </SubContainer>
  );
};
export const SignUpComplete: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [user, setUser] = useState<User>();
  const userName = user?.username;
  const router = useRouter();

  React.useEffect(() => {
    const welcome = async () => {
      try {
        const res = await axios.get(`http://localhost:${backendPort}/user`, {
          withCredentials: true,
        });
        // const res = await axios.post(`http://localhost:${backendPort}/signup`, data, {
        //   headers: { "Content-Type": "multipart/form-data" },
        //   withCredentials: true,
        // });
        if (res) {
          setUser(res.data.user);
          setTimeout(() => {
            if (userName) router.push(`${userName.toLocaleLowerCase()}/profile`);
          }, 3000);
        }

        // const datum = res;
        console.log(res);
      } catch (error: any) {
        console.log(error);
      }
    };
    setTimeout(() => {
      if (visible) welcome();
    }, 1000);
  }, [userName,visible,router]);

  return (
    <SubContainer isVisible={visible}>
      {userName ? (
        // {user?.name ? (
        <>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
            Welcome, {userName}
          </motion.h2>
          <motion.p animate={{ scale: 2.5, y: 0 }}>
            <CircleLoader cssOverride={{ color: "var(--test)" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" />
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span>You are now being redirected... </span>
          </motion.p>
        </>
      ) : (
        <motion.p animate={{ scale: 2.5, y: 80 }}>
          <CircleLoader cssOverride={{ color: "var(--test)" }} color="" aria-label="Loading Spinner" data-testid="loader" className="wave" />
        </motion.p>
      )}
    </SubContainer>
  );
};
export const SignUpVerify: React.FC<Screen> = ({ visible, increment }) => {
  const [otp, setOTP] = useState("");
  const [otpError, setOTPError] = useState("");

  const handleOTP: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    setOTP(inputValue);
  };

  const resend = async () => {
    try {
      const res = await axios.get(`http://localhost:${backendPort}/resend`, {
        withCredentials: true,
      });
      // const res = await axios.post(`http://localhost:${backendPort}/signup`, data, {
      //   headers: { "Content-Type": "multipart/form-data" },
      //   withCredentials: true,
      // });
      if (res) increment();

      const datum = res;
      console.log(datum);
    } catch (error: any) {
      console.log(error);
    }
  };

  const verifyOTP = async () => {
    //reset errors
    setOTPError("");
    try {
      const res = await axios.post(`http://localhost:${backendPort}/signup/verify`, JSON.stringify({ otp }), {
        withCredentials: true,
        // body: JSON.stringify({ otp }),
        headers: { "Content-Type": "application/json" },
      });
      // const res = await fetch(`http://localhost:${backendPort}/login`, {
      //   credentials: "include",
      // });
      // const res = await fetch(`http://localhost:${backendPort}/signup/verify`, {
      //   credentials: "include",
      // });
      console.log(res);
      if (res) increment();
      // if (datum.errors) {
      //   setEmailError(datum.errors.email);
      //   setPasswordError(datum.errors.password);
      // }
      // if (res.user) {
      //   // location.assign("/login");
      //   console.log(datum.user);
      // }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <SubContainer isVisible={visible}>
      <h2 className="">Verification</h2>
      <p>
        <span>Enter verification code sent to your email address </span>
        <NormalInput label="BZ-XXXXXX" value={otp} onChange={handleOTP} />
        {otpError.length > 0 && <span className="email error">{otpError}</span>}
      </p>
      <div className="submit_actions">
        <motion.span layout className={`${brytzone}_sublink proceed`} onClick={resend}>
          Resend Verification
        </motion.span>
        <motion.span layout className={`${brytzone}_sublink proceed`} onClick={verifyOTP}>
          Verify
        </motion.span>
      </div>
    </SubContainer>
  );
};
export const SignUpCreate: React.FC<Init> = ({ visible, decrement, increment, decrementParent }) => {
  /******************Animations config******************/
  const svg = {
    animate: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const init = { pathLength: 0 };
  const handleIncrement = async () => {
    increment();
  };
  const handleDecrement = async () => {
    decrement();
    decrementParent();
    console.log("clecke");
  };
  return (
    <SubContainer isVisible={visible}>
      <h2 className="">Confirmation Notice</h2>
      <p>After completing this step, there will be no way to revert changes. Any further modifications can only be made in the user settings.</p>
      <div className="submit_actions">
        <motion.span layout className={`${brytzone}_sublink return`} onClick={handleDecrement}>
          <AnimatePresence>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <motion.path
                animate={svg.animate}
                exit={svg.exit}
                initial={init}
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </motion.svg>
          </AnimatePresence>
          Return
        </motion.span>
        <motion.span layout onClick={handleIncrement} className={`${brytzone}_sublink proceed`}>
          {/* <motion.span layout onClick={increment} className={`${brytzone}_sublink proceed`}> */}
          <AnimatePresence>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <motion.path
                animate={svg.animate}
                exit={svg.exit}
                initial={init}
                d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
              />
              <motion.path animate={svg.animate} exit={svg.exit} initial={init} d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
            </motion.svg>
          </AnimatePresence>
          Proceed
        </motion.span>
      </div>
    </SubContainer>
  );
};
