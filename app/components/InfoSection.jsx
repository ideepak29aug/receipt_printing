import React, { useContext } from "react";
import AccountContext from "../context/AccountContext";

const InfoSection = () => {
  const { customerInfo } = useContext(AccountContext);

  return (
    <div className="flex flex-wrap my-4">
      {/* dealer info */}
      <div className="w-[50%] border-[1px] p-2">
        {customerInfo.dealer_info.organisation && (
          <p className="font-bold">
            Organisation Name : {customerInfo.dealer_info.organisation}
          </p>
        )}
        {customerInfo.dealer_info.address && (
          <p className="font-semibold">
            Address : {customerInfo.dealer_info.address}
          </p>
        )}
        {customerInfo.dealer_info.phone && (
          <p className="font-semibold">
            Ph No. : {customerInfo.dealer_info.phone}
          </p>
        )}
        {customerInfo.dealer_info.email && (
          <p className="font-semibold">
            Email : {customerInfo.dealer_info.email}
          </p>
        )}
        <p className="font-semibold">GSTIN : 08ABOFA3555B1ZK</p>
      </div>
      {/* supplier info*/}
      <div className="w-[50%] border-[1px] p-2">
        {customerInfo.supplier_info.address && (
          <p className="font-semibold">
            Site Address : {customerInfo.supplier_info.address}
          </p>
        )}
        {customerInfo.supplier_info.phone && (
          <p className="font-semibold">
            Ph no. : {customerInfo.supplier_info.phone}
          </p>
        )}
      </div>
      {/* client info */}
      <div className="w-[50%] border-[1px] p-2">
        {customerInfo.client_info.client && (
          <p className="font-bold">
            Client Name : {customerInfo.client_info.client}
          </p>
        )}
        {customerInfo.client_info.organisation && (
          <p className="font-bold">
            Organisation Name : {customerInfo.client_info.organisation}
          </p>
        )}
        {customerInfo.client_info.address && (
          <p className="font-semibold">
            Address : {customerInfo.client_info.address}
          </p>
        )}
        {customerInfo.client_info.phone && (
          <p className="font-semibold">
            Ph No. : {customerInfo.client_info.phone}
          </p>
        )}
      </div>
      {/* quote info */}
      <div className="w-[50%] border-[1px] p-2">
        {customerInfo.quote_info.quote && (
          <p className="font-bold">
            Quote No : {customerInfo.quote_info.quote}
          </p>
        )}
        <p className="font-semibold">
          Quote Date : {customerInfo.quote_info.date}
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
