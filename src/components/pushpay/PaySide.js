import React from "react";
// , { useState }

import { ReactComponent as CardImg } from "./img/card.svg";
import { ReactComponent as HashImg } from "./img/hash.svg";
import { ReactComponent as BankImg } from "./img/bank.svg";
import { ReactComponent as WalletImg } from "./img/wallet.svg";

import { Link, useHistory, Switch, Route } from "react-router-dom";
import { SideStyle } from "./styled";

// import Pay from "./Pay";

// const slideprops = [
//   {
//     to: "/payment/card",
//     icon: CardImg,
//     title: "card",
//   },
//   {
//     to: "/payment/ussd",
//     icon: HashImg,
//     title: "Ussd",
//   },
//   {
//     to: "/payment/bank",
//     icon: BankImg,
//     title: "bank",
//   },
//   {
//     to: "/payment/wallet",
//     icon: WalletImg,
//     title: "PushPay wallet",
//   },
// ];

// const backgroundColor = isSelected ? theme.colors.primary : theme.colors.backgroundgrey;

const PaySide = () => {
  // const activePath = window.location.pathname.split("/")[0].toLowerCase();
  const currentRoute = useHistory().location.pathname.toLowerCase();

      // const [selectedValues, setSelectedValues] = useState([]);

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
    <SideStyle>
      <ul className="list-unstyled list">
        <li className="liClass">
          <Link className="links" style={{backgroundColor: currentRoute === "/payment/" ? "#2335ed" : "", borderRadius:'10px'}} to="/payment/card">
            <CardImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>Card</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" style={{backgroundColor: currentRoute === "/payment/ussd" ? "#2ed" : "", borderRadius:'10px'}} to="/payment/ussd">
            <HashImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>USSD</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" style={{backgroundColor: currentRoute === "/payment/bank" ? "#2335ed" : "", borderRadius:'10px'}} to="/payment/bank"> 
            <BankImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>Bank</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" style={{backgroundColor: currentRoute === "/payment/wallet" ? "#2335ed" : "", borderRadius:'10px'}} to="/payment/wallet">
            <WalletImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>PushPay wallet</span>
          </Link>
        </li>
        <div className="bg-danger"></div>
      </ul>
    </SideStyle>
  );
};

export default PaySide;