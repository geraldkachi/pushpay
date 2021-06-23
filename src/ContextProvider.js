import React, { createContext, 
  // useReducer, 
  useState } from "react";

// import axios from "axios";
// import { paymentFormular } from "./components/paymentsFormula";

// import { paymentReducer } from "./PayProvider";


export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [paymentconst, setPayment] = useState({amount: 0, channel: null, processingFee: 0});

  // let initialState = localStorage.getItem('payment');
  // if (initialState) {
  //   initialState = JSON.parse(initialState);
  // } else {
  //   initialState = {amount: 0, channel: "", processingFee: 0};
  // }
  // const [paymentState, dispatch] = useReducer(paymentReducer, initialState);
  // useEffect(() => {
  //   localStorage.setItem('payment', JSON.stringify(paymentState));
  // }, [paymentState]);

  return (
    <CartContext.Provider value={[paymentconst, setPayment]}>
      {children}
    </CartContext.Provider> 
  );
};

export default ContextProvider;

// export const CartContext = createContext();

// const ContextProvider = ({ children }) => {
//   const [paymentconst, setPayment] = useState({amount: 0, channel: null, processingFee: 0});

//   return (
//     <CartContext.Provider value={[paymentconst, setPayment]}>
//       {children}
//     </CartContext.Provider>
//   );
// };