"use client";

import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import AccountContext from "../context/AccountContext";

const page = () => {
  const route = useRouter();
  const { customerInfo, setCustomerInfo } = useContext(AccountContext);

  const handleGstChange = (event) => {
    const newValue = event.target.value;
    setCustomerInfo((prev) => ({
      ...prev,
      gst_type: newValue,
    }));
  };

  return (
    <div className="gradient-bg p-4 space-y-10">
      <div className="flex justify-between items-center px-8">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            route.push("/dashboard");
          }}
        >
          Previous
        </button>
        <p className="text-3xl font-bold">customer info</p>
        <button
          className="bg-blue-500 text-white px-9 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            route.push("/checkout");
          }}
        >
          Next
        </button>
      </div>
      {/* form */}
      <div>
        <div className="flex flex-wrap justify-center items-center gap-4 font-semibold">
          {/* dealer box */}
          <div className="shadow-xl w-[45%] p-4 bg-white/40 backdrop-blur-sm rounded-xl h-60 space-y-3">
            <div className="flex gap-2">
              <label htmlFor="organisation_name" className="">
                Organisation Name:{" "}
              </label>
              <input
                id="organisation_name"
                type="text"
                value={customerInfo.dealer_info.organisation}
                className="w-[60%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    dealer_info: {
                      ...prev.dealer_info,
                      organisation: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="dealer_address" className="">
                Address:{" "}
              </label>
              <input
                id="dealer_address"
                type="text"
                value={customerInfo.dealer_info.address}
                className="w-[90%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    dealer_info: {
                      ...prev.dealer_info,
                      address: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="dealer_phone" className="">
                Ph No. :{" "}
              </label>
              <input
                id="dealer_phone"
                type="text"
                value={customerInfo.dealer_info.phone}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    dealer_info: {
                      ...prev.dealer_info,
                      phone: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="dealer_email" className="">
                Email:{" "}
              </label>
              <input
                id="dealer_email"
                type="text"
                value={customerInfo.dealer_info.email}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    dealer_info: {
                      ...prev.dealer_info,
                      email: newValue,
                    },
                  }));
                }}
              />
            </div>
          </div>
          {/* supplier box */}
          <div className="shadow-xl w-[45%] p-4 bg-white/40 backdrop-blur-sm rounded-xl h-60 space-y-3">
            <div className="flex gap-2">
              <label htmlFor="supplier_address" className="">
                Site Address:{" "}
              </label>
              <input
                id="supplier_address"
                type="text"
                value={customerInfo.supplier_info.address}
                className="w-[80%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    supplier_info: {
                      ...prev.supplier_info,
                      address: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="supplier_phone" className="">
                Ph No. :{" "}
              </label>
              <input
                id="supplier_phone"
                type="text"
                value={customerInfo.supplier_info.phone}
                className="w-[80%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    supplier_info: {
                      ...prev.supplier_info,
                      phone: newValue,
                    },
                  }));
                }}
              />
            </div>
          </div>
          {/* client box */}
          <div className="shadow-xl w-[45%] p-4 bg-white/40 backdrop-blur-sm rounded-xl h-60 space-y-3">
            <div className="flex gap-2">
              <label htmlFor="client_name" className="">
                Client Name:{" "}
              </label>
              <input
                id="client_name"
                type="text"
                value={customerInfo.client_info.client}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    client_info: {
                      ...prev.client_info,
                      client: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="client_organisation_name" className="">
                Organisation Name:{" "}
              </label>
              <input
                id="client_organisation_name"
                type="text"
                value={customerInfo.client_info.organisation}
                className="w-[50%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    client_info: {
                      ...prev.client_info,
                      organisation: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="client_address" className="">
                Address:{" "}
              </label>
              <input
                id="client_address"
                type="text"
                value={customerInfo.client_info.address}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    client_info: {
                      ...prev.client_info,
                      address: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="client_phone" className="">
                Ph No. :{" "}
              </label>
              <input
                id="client_phone"
                type="text"
                value={customerInfo.client_info.phone}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    client_info: {
                      ...prev.client_info,
                      phone: newValue,
                    },
                  }));
                }}
              />
            </div>
          </div>
          {/* quote box */}
          <div className="shadow-xl w-[45%] p-4 bg-white/40 backdrop-blur-sm rounded-xl h-60 space-y-3">
            <div className="flex gap-2">
              <label htmlFor="quote_number" className="">
                Quote No :{" "}
              </label>
              <input
                id="quote_number"
                type="text"
                value={customerInfo.quote_info.quote}
                className="w-[70%]"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setCustomerInfo((prev) => ({
                    ...prev,
                    quote_info: {
                      ...prev.quote_info,
                      quote: newValue,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="" className="">
                Quote Date :{" "}
              </label>
              <p>{customerInfo.quote_info.date}</p>
            </div>
          </div>
          {/* GST box */}
          <div className="shadow-xl w-[45%] p-4 bg-white/40 backdrop-blur-sm rounded-xl h-60 gap-3 flex flex-col">
            GST Type
            <label className="flex gap-3">
              <input
                type="radio"
                name="option"
                value="Rajasthan"
                onChange={handleGstChange}
                checked={customerInfo.gst_type === "Rajasthan"}
              />
              GST for Rajasthan
            </label>
            <label className="flex gap-3">
              <input
                type="radio"
                name="option"
                value="Outside"
                onChange={handleGstChange}
                checked={customerInfo.gst_type === "Outside"}
              />
              GST for outside from Rajasthan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
