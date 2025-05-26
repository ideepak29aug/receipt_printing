"use client";

import React, { useContext, useEffect, useState } from "react";
import AccountContext from "../context/AccountContext";

const TotalAmount = ({ totalWindows, totalWeight, totalAmount, totalSqft }) => {
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [igst, setIgst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const { customerInfo } = useContext(AccountContext);

  useEffect(() => {
    const total = Number(totalAmount);

    if (customerInfo.gst_type === "Rajasthan") {
      const cgst = (Number(total) * 0.9).toFixed(2);
      setCgst(cgst);

      const sgst = (Number(total) * 0.9).toFixed(2);
      setSgst(sgst);
    } else {
      const igst = (Number(total) * 0.18).toFixed(2);
      setIgst(igst);
    }

    const grand = (total + Number(cgst) + Number(sgst) + Number(igst)).toFixed(2);
    setGrandTotal(grand)

    // const extraCost = Number(cost);

    // const subtotal = (total + extraCost).toFixed(2);
    // setSubTotal(subtotal);

    // const gst = (Number(subtotal) * 0.18).toFixed(2);
    // setTotalGst(gst);

    // const grand = (Number(subtotal) + Number(gst)).toFixed(2);
    // setGrandTotal(grand);
  }, [totalAmount]);

  return (
    <div className="mt-4 w-full flex mb-96">
      <div className="w-1/2 space-y-3">
        <div className="w-full flex items-center font-bold">
          <p className="w-1/2">Total Area : {totalSqft}</p>
          <p className="w-1/2">Total Windows : {totalWindows}</p>
        </div>
        <p className="font-bold">Total Weight : {totalWeight} Kg</p>
        <div className="">
          <p className="underline font-bold">Company's Bank Details</p>
          <div>
            <div className="flex items-center">
              <p className="w-[20%]">Name : </p>
              <input
                className="w-[80%]"
                type="text"
                defaultValue="ALU Fenestration"
              />
            </div>
            <div className="flex items-center">
              <p className="w-[20%]">Bank Name : </p>
              <input className="w-[80%]" type="text" defaultValue="HDFC BANK" />
            </div>
            <div className="flex items-center">
              <p className="w-[20%]">Branch : </p>
              <input
                className="w-[80%]"
                type="text"
                defaultValue="KALYAN CIRCLE, STATION ROAD, SIKAR"
              />
            </div>
            <div className="flex items-center">
              <p className="w-[20%]">A/C No. : </p>
              <input
                className="w-[80%]"
                type="text"
                defaultValue="50200040547854"
              />
            </div>
            <div className="flex items-center">
              <p className="w-[20%]">IFSC Code : </p>
              <input
                className="w-[80%]"
                type="text"
                defaultValue="HDFC0001125"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[50%]"></th>
              <th className="w-[10%]"></th>
              <th className="w-[30%]"></th>
              <th className="w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="blue_row" style={{ backgroundColor: "#b0c4de" }}>
              <td className="p-1">Sub Total</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {totalAmount}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">CGST 9%</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {cgst}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">SGST 9%</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {sgst}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">IGST 18%</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {igst}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr className="blue_row" style={{ backgroundColor: "#b0c4de" }}>
              <td className="p-1">Grand Total</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {grandTotal}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalAmount;
