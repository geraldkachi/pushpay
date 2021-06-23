import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { paymentFormular } from "./components/paymentsFormula";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [paymentconst, setPayment] = useState({amount: 0, channel: null, processingFee: 0});

  return (
    <CartContext.Provider value={[paymentconst, setPayment]}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
