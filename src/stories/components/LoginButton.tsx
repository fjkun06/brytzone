import React from "react";
import { Button } from "./Button";
import UserAddIcon from "../layout/navbar/UserAddIcon";
import { useRouter } from "next/navigation";

const LoginButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();

  // <Button category="action" icon={<UserAddIcon />} onClick={() => router.push("/login")}>
  //   Log In
  // </Button>

  return isLoggedIn ? (
    <Button category="action" icon={<UserAddIcon />}>
      Log Out
    </Button>
  ) : (
    <Button category="action" icon={<UserAddIcon />}>
      Log In
    </Button>
  );
};

export default LoginButton;
