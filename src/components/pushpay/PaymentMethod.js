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
      path: "/",
      exact: true,
      sidebar: () => <p>NGN 40.00</p>,
      main: () => <Card />,
    },
    {
      path: "/ussd",
      sidebar: () => <p>NGN 20.00</p>,
      main: () => <USSD />,
      exact: true,
    },
    {
      path: "/bank",
      sidebar: () => <p>NGN 20.00</p>,
      main: () => <Bank/>,
    },
    {
      path: "/wallet",
      sidebar: () => <p>NGN 30.00</p>,
      main: () => <PushPayWallet/>,
      exact: true,
    },
  ];

const PaymentMethod = ({history, match }) => {

    return (
        <div className="pay">
          <div className="header">
            {/* <img src={} alt="" /> */}
            <PushImg />
            <h4>Choose payment method</h4>
          </div>
          <Router>
            <ul>
              <li>
                <Link to="/">
                  <CardImg />
                  <span>Card</span>
                </Link>
              </li>
              <li>
                  <Link to="/Ussd">
                  <HashImg />
                  <span>USSD</span>
                  </Link>
                </li>
                <li>
                <Link to="/bank">
                  <BankImg />
                  <span>Bank</span>
                  </Link>
                </li>
                <li>
                <Link to="/wallet">
                  <WalletImg />
                  <span>PushPay wallet</span>
                  </Link>
                </li>
            </ul>
            <div className="sidebars">
            <p>Processing fee</p>
              <Switch>
                {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.sidebar />}
                    />
                ))}
              </Switch>
            </div>
            <div className="main">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                ))}
              </Switch>
            </div>
          </Router>
        </div>
      );
    
}

export default withRouter(PaymentMethod)
 