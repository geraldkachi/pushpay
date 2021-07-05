import React, { createContext, 
  // useReducer, 
  useState } from "react";

// import { paymentFormular } from "./components/paymentsFormula";

// import { paymentReducer } from "./PayProvider";


export const PushContext = createContext(); 

const ContextProvider = ({ children }) => {
  const [paymentState, setPaymentState] = useState({amount: 0, channel: '', processingFee: 0});
  // console.log(paymentState)

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
    <PushContext.Provider value={{ paymentState, setPaymentState }}>
      {children}
    </PushContext.Provider> 
  );
};

export default ContextProvider;

// export const PushContext = createContext();

// const ContextProvider = ({ children }) => {
//   const [paymentconst, setPayment] = useState({amount: 0, channel: null, processingFee: 0});

//   return (
//     <PushContext.Provider value={[paymentconst, setPayment]}>
//       {children}
//     </PushContext.Provider>
//   );
// };