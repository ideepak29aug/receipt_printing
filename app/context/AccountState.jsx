"use client";

import React, { useState } from "react";
import AccountContext from "./AccountContext";
import { ProductList } from "../data/ProductList";
import { CustomerInfo } from "../data/CustomerInfo";

const AccountState = ({ children }) => {
  const [data, setData] = useState(ProductList);
  const [customerInfo, setCustomerInfo] = useState(CustomerInfo);

  return (
    <AccountContext.Provider
      value={{ data, setData, customerInfo, setCustomerInfo }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountState;
