"use client";

import React, { useContext } from "react";
import AccountContext from "../context/AccountContext";
import ProductTable from "./ProductTable";

const Estimate = ({ totalSqft, totalAmount, totalWindows }) => {
  const { data, customerInfo } = useContext(AccountContext);

  return (
    <div>
      <div className="flex justify-center items-center mb-3">
        <p className="text-2xl font-bold">Estimate</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-white" style={{ backgroundColor: "#808080" }}>
            <th>Quote No.</th>
            <th>Date</th>
            <th>Customer Ref</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">{customerInfo.quote_info.quote}</td>
            <td align="center">{customerInfo.quote_info.date}</td>
            <td align="center">{customerInfo.client_info.client}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <thead>
          <tr className="text-white" style={{ backgroundColor: "#808080" }}>
            <th className="w-[3rem]">Serial No.</th>
            <th className="w-[13rem]">Image</th>
            <th>Details</th>
            <th className="w-[3.5rem]">Width</th>
            <th className="w-[3.5rem]">Height</th>
            <th className="w-[3.5rem]">Qty</th>
            <th className="w-[3.5rem]">Sqft</th>
            <th className="w-[3.5rem]">{`Rate (Rs.)`}</th>
            <th className="w-[3.5rem]">{`Amount (Rs.)`}</th>
          </tr>
        </thead>
        {totalWindows !== 0 ? <tbody >
          {data?.filter(item => item.selected).map((item, index) => (
            <ProductTable key={index} data={item} serialNumber={index} />
          ))}
          <tr>
            <td colSpan="3" align="center">
              SUM
            </td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1">{totalSqft}</td>
            <td className="p-1"></td>
            <td className="p-1">{totalAmount}</td>
          </tr>
        </tbody> : <tbody>
          <tr>
            <td colSpan="9" align="center" className="h-20">No Data Found</td>
          </tr>
          </tbody>}
      </table>
    </div>
  );
};

export default Estimate;
