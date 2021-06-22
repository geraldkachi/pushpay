import React, { useState } from "react";

import { ReactComponent as CardImg } from "./img/card.svg";
import { ReactComponent as HashImg } from "./img/hash.svg";
import { ReactComponent as BankImg } from "./img/bank.svg";
import { ReactComponent as WalletImg } from "./img/wallet.svg";

import { Link } from "react-router-dom";
import { SideStyle } from "./styled";
import Pay from "./Pay";

const slideprops = [
  {
    to: "/payment/card",
    icon: CardImg,
    title: "card",
  },
  {
    to: "/payment/ussd",
    icon: HashImg,
    title: "Ussd",
  },
  {
    to: "/payment/bank",
    icon: BankImg,
    title: "bank",
  },
  {
    to: "/payment/wallet",
    icon: WalletImg,
    title: "PushPay wallet",
  },
];

// const backgroundColor = isSelected ? theme.colors.primary : theme.colors.backgroundgrey;

const PaySide = () => {
  // const activePath = window.location.pathname;

//   const [selectedValues, setSelectedValues] = useState([]);

  return (
    <SideStyle>
      <ul className="list-unstyled list">
        <li className="liClass">
          <Link className="links" to="/payment/card">
            <CardImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>Card</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" to="/payment/Ussd">
            <HashImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>USSD</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" to="/payment/bank">
            <BankImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>Bank</span>
          </Link>
        </li>
        <li className="liClass">
          <Link className="links" to="/payment/wallet">
            <WalletImg style={{ marginRight: ".5rem" }} />
            <span style={{ fontSize: ".8rem" }}>PushPay wallet</span>
          </Link>
        </li>
      </ul>
      

      {/* {slideprops.map((item) => {
        const index = selectedValues.indexOf(item);
        const isSelected = index !== -1;

        const CheckBoxPress = () => {
          if (radio) {
            setSelectedValues([item]);
          } else {
            if (isSelected) {
              selectedValues.splice(index, 1);
            } else {
              selectedValues.push(item);
            }
            setSelectedValues([...selectedValues]);
          }
        };

        return (
          <ul key={index} className="list-unstyled list">
            <li>
              <Link
                to={item.to}
                onClick={CheckBoxPress}>
                <div>{item.icon}</div>
                <span style={{ fontSize: ".8rem" }}>{item.title}</span>
              </Link>
            </li>
          </ul>
        );
      })} */}
    </SideStyle>
  );
};

export default PaySide;
