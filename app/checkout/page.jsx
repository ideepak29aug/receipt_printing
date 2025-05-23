"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { logo } from "../assests";
import InfoSection from "../components/InfoSection";
import Estimate from "../components/Estimate";
import AccountContext from "../context/AccountContext";
import TotalAmount from "../components/TotalAmount";
import LastSection from "../components/LastSection";

const page = () => {
const { data } = useContext(AccountContext);
const [totalAmount, setTotalAmount] = useState(0);
const [totalSqft, setTotalSqft] = useState(0);
const [totalWeight, setTotalWeight] = useState(0);
const [totalWindows, setTotalWindows] = useState(0);


   useEffect(() => {
    // Filter only selected items
    const selectedItems = data.filter(item => item.selected);

    setTotalWindows(selectedItems.length);

    // Sum of amount for selected items
    const totalAmount = selectedItems.reduce((sum, item) => sum + Number(item.Amount), 0).toFixed(2);
    setTotalAmount(totalAmount);
    // Sum of sqft for selected items
    const totalSqft = selectedItems.reduce((sum, item) => sum + Number(item.sqft), 0).toFixed(2);
    setTotalSqft(totalSqft);

    const totalWeight = selectedItems.reduce((sum, item) => sum + Number(item.weight), 0).toFixed(2);
    setTotalWeight(totalWeight);
  }, []);


  return (
    <div>
      <div className="w-[65rem] p-6 mx-auto print shadow-lg">
        <div className="flex justify-center items-center">
          <p className="text-red-500 font-bold">"Shree Ganeshay Namah"</p>
        </div>
        <div className="flex justify-end items-center">
          <Image
            src={logo}
            alt=""
            style={{ height: "auto" }}
            width={130}
          />
        </div>
        <InfoSection />
        <Estimate
          totalAmount={totalAmount}
          totalSqft={totalSqft}
          totalWindows={totalWindows}
        />
        <TotalAmount
          totalAmount={totalAmount}
          totalSqft={totalSqft}
          totalWeight={totalWeight}
          totalWindows={totalWindows}
        />
        <LastSection />

        {/* print button */}
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 print:hidden"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default page;
