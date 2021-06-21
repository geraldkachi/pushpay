import React from 'react'


import {ReactComponent as  CardImg } from  "./img/card.svg"
import {ReactComponent as  HashImg } from  "./img/hash.svg"
import {ReactComponent as  BankImg } from  "./img/bank.svg"
import {ReactComponent as  WalletImg } from  "./img/wallet.svg"

import { Link } from "react-router-dom";


const PaySide = () => {
      const STyledLink = {}
    return (
        <div>
            <ul className="list-unstyled list">
              <li className="liClass">
                <Link style={STyledLink} className="ank" to="/payment/card">
                  <CardImg style={{ marginRight: ".5rem",}} />
                  <span style={{ fontSize: ".8rem"}}>Card</span>
                </Link>
              </li>
              <li className="liClass">
                  <Link style={STyledLink} className="ank" to="/payment/Ussd">
                  <HashImg style={{ marginRight: ".5rem"}}  />
                  <span style={{ fontSize: ".8rem"}}>USSD</span>
                  </Link>
                </li>
                <li className="liClass">
                <Link style={STyledLink} className="ank" to="/payment/bank">
                  <BankImg style={{ marginRight: ".5rem"}} />
                  <span style={{ fontSize: ".8rem"}}>Bank</span>
                  </Link>
                </li>
                <li className="liClass">
                <Link style={STyledLink} className="ank" to="/payment/wallet">
                  <WalletImg style={{ marginRight: ".5rem"}} />
                  <span style={{ fontSize: ".8rem"}}>PushPay wallet</span>
                  </Link>
                </li>
            </ul>
        </div>
    )
}

export default PaySide
