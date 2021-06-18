import React from 'react'
// import {sections} from "./section"
import { withRouter, useRouteMatch } from "react-router-dom"
import PushPayWallet from './PushPayWallet';
import USSD from './USSD';
import Card from './Card';
import Bank from './Bank';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {ReactComponent as  CardImg } from  "./img/card.svg"
import {ReactComponent as  HashImg } from  "./img/hash.svg"
import {ReactComponent as  BankImg } from  "./img/bank.svg"
import {ReactComponent as  PushImg } from  "./img/pushpay.svg"
import {ReactComponent as  WalletImg } from  "./img/wallet.svg"


const routes = [
    {
      path: "/payment/",
      exact: true,
      // sidebar: () => <p>NGN 40.00</p>,
      main: () => <Card />,
    },
    {  
      path: "/payment/ussd",
      // sidebar: () => <p>NGN 30.00</p>,
      main: () => <USSD />,
      exact: true,
    },
    {
      path: "/payment/bank",
      // sidebar: () => <p>NGN 20.00</p>,
      main: () => <Bank/>,
    },
    {
      path: "/payment/wallet",
      // sidebar: () => <p>NGN 10.00</p>,
      main: () => <PushPayWallet/>,
      exact: true,
    },
  ];

const PaymentMethod = ({history, match }) => {

    return (
        <div className="pay">
          
          {/* <div className=" d-flex justify-content-center align-items-center"> */}
          <div className="row mx-0  justify-content-center align-items-center">


        <Router >
            <div className="sidebars col-md-4">

            <div className="header">
            <PushImg />
            <h4>Choose payment method</h4>
          </div>
           <div className="">
           <ul className="list-unstyled list">
              <li>
                <Link to="/payment/">
                  <CardImg style={{color:'#007bff'}} />
                  <span>Card</span>
                </Link>
              </li>
              <li>
                  <Link to="/payment/Ussd">
                  <HashImg />
                  <span>USSD</span>
                  </Link>
                </li>
                <li>
                <Link to="/payment/bank">
                  <BankImg />
                  <span>Bank</span>
                  </Link>
                </li>
                <li>
                <Link to="/payment/wallet">
                  <WalletImg />
                  <span>PushPay wallet</span>
                  </Link>
                </li>
            </ul>

                {/* <p>Processing fee</p>
                <Switch>
                  {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                      />
                  ))}
                </Switch> */}
            </div>
           </div>

            <div className="main col-md">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                  ))}
              </Switch>
            </div>
          </Router>
          </div>


        </div>
      );
    
}

export default withRouter(PaymentMethod)
 