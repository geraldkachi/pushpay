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
      path: "/payment/card",
      exact: true,
      sidebar: () => <p>NGN 40.00</p>,
      main: () => <Card />,
    },
    {  
      path: "/payment/ussd",
      exact: true,
      sidebar: () => <p>NGN 30.00</p>,
      main: () => <USSD />,
    },
    {
      path: "/payment/bank",
      exact: true,
      sidebar: () => <p>NGN 20.00</p>,
      main: () => <Bank/>,
    },
    {
      path: "/payment/wallet",
      exact: true,
      sidebar: () => <p>NGN 10.00</p>,
      main: () => <PushPayWallet/>,
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
                <Link to="/payment/card">
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
           </div>

            <div className="main col-md bg-success">
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
// includes()  is a method taht take s a singel argurement
// what it does is that it checks if there is an item in that array ed
// const  myArray = [1, 2, 3, 4, 5]
// myArraya.includes(3)
// output = true