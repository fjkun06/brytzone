import { brytzone } from "@/app/[locale]/home/header";
import { useRouter } from "next/navigation";
import React from "react";

const SubLink = ({ route, children }: { route: string; children: any }) => {
  const router = useRouter();

  return (
    <span className={`${brytzone}_sublink`} onClick={() => router.push(route)}>
      {children}{" "}
    </span>
  );
};

export default SubLink;
