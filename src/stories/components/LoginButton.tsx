import React from "react";
import { Button } from "./Button";
import UserAddIcon from "../layout/navbar/UserAddIcon";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  return (
    <Button category="action" icon={<UserAddIcon />} onClick={()=> router.push('/login')}>
      Log In
    </Button>
  );
};

export default LoginButton;
