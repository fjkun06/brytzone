"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page({ params }: { params: { username: string } }) {
  const router = useRouter();
  useEffect(() => {
    router.push(params.username + "/profile");
  });

  return <div>Loading...</div>;
}
