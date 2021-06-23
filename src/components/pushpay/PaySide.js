import React from "react";
// , { useState }

import { ReactComponent as CardImg } from "./img/card.svg";
import { ReactComponent as HashImg } from "./img/hash.svg";
import { ReactComponent as BankImg } from "./img/bank.svg";
import { ReactComponent as WalletImg } from "./img/wallet.svg";

import styled from "styled-components";


import { Link, 
  // useHistory
 } from "react-router-dom";
// import { SideStyle } from "./styled";
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

const PaySide = () => {
  // const activePath = window.location.pathname.split("/payment/")[0].toLowerCase();
  // const currentRoute = useHistory().location.pathname.toLowerCase();
  
  //   const [selectedValues, setSelectedValues] = useState([]);
  
  const colors = {
    back: "#2335ed",
    front: null,
    // backcolor: currentRoute             // background: ${backcolor.currentRoute === "/payment/bank" ? "#2335ed" : ""};
  };
  
  const SideStyle = styled.div`

      ul {
        padding-left: 0;
        li {
          list-style: none;
          align-items: center;
          li:hover {
            color: white;
          }
          .links {
            text-decoration: none;
            display: flex;
            align-items: center;
            font-weight: 500px;
            padding: 8px 5px;
            color: #56799D;
            &:hover {
              color: white;
              background: "#2335ed";
              border-radius: 10px;
            }
            span {
              margin-left: 5px;
            }
          }
        }
      }

        // ul {
        //   padding-left: 0;
        //   li {
        //     list-style: none;
        //     align-items: center;
        //     li:hover {
        //       color: white;
        //     }

        //     .links {
        //       text-decoration: none;
        //       display: flex;
        //       align-items: center;
        //       font-weight: 500px;
        //       padding: 8px 5px;
        //       margin: 3px 0;
        //       color: #56799d;
        //       &:hover {
        //         color: white;
        //         // background: #2335ed;
        //         background: ${colors.back};
        //         border-radius: 10px;
        //       }
        //       &:isactive {
        //         background: #2335ed;
        //       }
        //       span {
        //         margin-left: 5px;
        //       }
        //     }
        //   }
        // }
      `;

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
          <Link className="links" to="/payment/ussd">
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
