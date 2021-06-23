import React from "react";
import PaymentMethod from "./PaymentMethod";
// import { sections } from "./section"
import "./payment.css";

import PushPayWallet from './PushPayWallet';
import USSD from './USSD';
import Card from './Card';
import Bank from './Bank';



import { BackRad, PaymentLay } from "./styled"; //ListSTyle
import { CartContext } from "../../ContextProvider";
import { paymentFormular } from "../paymentsFormula";

// const currentRoute = useHistory().location.pathname.toLowerCase();

const Payment = () => {
  const [PaymentContext] = React.useContext(CartContext);

  const routes = [
    {
      path: "/payment/card",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - (PaymentContext?.amount)}</p>,

      main: () => <Card />,
    },  
    {  
      path: "/payment/ussd",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - (PaymentContext?.amount)}</p>,
      main: () => <USSD />,
    },
    {
      path: "/payment/bank",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - (PaymentContext?.amount)}</p>,
      main: () => <Bank/>,
    },
    {
      path: "/payment/wallet",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - (PaymentContext?.amount)}</p>,
      main: () => <PushPayWallet/>,
    },  
  ]

  return (
    <>
      <PaymentLay className="backpay">
        <div style={{ width: "616px" }}>
          <BackRad className="p-4 overflow-hidden backrad">
            <PaymentMethod {...{routes}} />
          </BackRad>
        </div>
      </PaymentLay>
    </>
  );
};


export default Payment;

// <Link className="links" style={{backgroundColor: currentRoute === "/payment/bank" ? "#2335ed" : "", }} to="/payment/bank"> 
