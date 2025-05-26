"use client";

import React, { useContext, useState } from "react";
import ImageCards from "../components/ImageCards";
import AccountContext from "../context/AccountContext";
import CardModal from "../components/CardModal";
import { useRouter } from "next/navigation";

const page = () => {
  const { data } = useContext(AccountContext);
  const [isOpen, setIsOpen] = useState({
    status: false,
    data: null,
  });
  const router = useRouter();

  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-4 p-3 gradient-bg z-0">
      {isOpen?.status && <CardModal setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className="flex justify-between w-full px-8">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-9 py-2 rounded-lg cursor-pointer"
        >
          Logout
        </button>
        <h2 className="text-3xl font-bold">Select Products</h2>
        <button
          type="button"
          onClick={() => router.push("/customer_info")}
          className="bg-blue-500 text-white px-9 py-2 rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap mx-auto p-4 gap-8 justify-center items-center overflow-y-scroll h-[90vh]">
        {data?.map((item, index) => (
          <ImageCards key={index} data={item} setIsOpen={setIsOpen} />
        ))}
      </div>
    </div>
  );
};

export default page;
