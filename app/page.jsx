"use client";

import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <button className="start cursor-pointer" type="submit" onClick={() => router.push("/dashboard")}>
        Let's Start
      </button>
    </div>
  );
};

export default page;
