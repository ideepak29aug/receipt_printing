"use client";

import React, { useEffect, useState } from "react";

const TotalAmount = ({ totalWindows, totalWeight, totalAmount, totalSqft }) => {
  const [cost, setCost] = useState(0);
  const [subTotal, setSubTotal] = useState(totalAmount);
  const [totalGst, setTotalGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

 useEffect(() => {
  const total = Number(totalAmount);
  const extraCost = Number(cost);

  const subtotal = (total + extraCost).toFixed(2);
  setSubTotal(subtotal);

  const gst = (Number(subtotal) * 0.18).toFixed(2);
  setTotalGst(gst);

  const grand = (Number(subtotal) + Number(gst)).toFixed(2);
  setGrandTotal(grand);
}, [cost, totalAmount]);

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
            <tr className="blue_row" style={{ backgroundColor : "#b0c4de"}}>
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
              <td className="p-1">Extra Pipe Cost</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                />
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">Sub Total</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {subTotal}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">GST @18%</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {totalGst}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr className="blue_row" style={{ backgroundColor : "#b0c4de"}}>
              <td className="p-1">Grand Total</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                {grandTotal}
              </td>
              <td className="p-1">Rs.</td>
            </tr>
            <tr>
              <td className="p-1">Average Price rate/sqft</td>
              <td className="p-1" align="center">
                :
              </td>
              <td className="p-1" align="right">
                <input type="number" defaultValue={0}/>
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
