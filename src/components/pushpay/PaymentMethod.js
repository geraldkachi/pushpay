import React from 'react'
// import {sections} from "./section"
import PushPayWallet from './PushPayWallet';
import USSD from './USSD';
import Card from './Card';
import Bank from './Bank';
import {ReactComponent as  PushImg } from  "./img/pushpay.svg"
import {ReactComponent as  Thund } from  "./img/thund.svg"


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./payment.css"

import { MainRou } from "./styled"
import PaySide from "./PaySide"


const routes = [
    {
      path: "/payment/card",
      exact: true,
      sidebar: () => <p className="fs-1">NGN 40.00</p>,
      main: () => <Card />,
    },
    {  
      path: "/payment/ussd",
      exact: true,
      sidebar: () => <p className="fs-1">NGN 30.00</p>,
      main: () => <USSD />,
    },
    {
      path: "/payment/bank",
      exact: true,
      sidebar: () => <p className="fs-1">NGN 20.00</p>,
      main: () => <Bank/>,
    },
    {
      path: "/payment/wallet",
      exact: true,
      sidebar: () => <p className="fs-1">NGN 10.00</p>,
      main: () => <PushPayWallet/>,
    },
  ];

const PaymentMethod = () => {

    return (
      <>
        <div className="pay">
           <div className="row mx-0 justify-content-center align-items-start">
        <Router>
            <div className="sidebars col-md-4">
            <div className="header">
              <PushImg />
              <h4 className="my-3" style={{ fontSize: ".6rem", fontWeight: 500 }}>Choose payment method</h4>
            </div>

           <div className="">
           <PaySide />

                <p style={{fontSize: ".8rem"}}>Processing fee</p>
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

            <MainRou className="main col-md">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                  ))}
              </Switch>
            </MainRou>
          </Router>
          </div>
        </div>

          {/* <div className="text-center position-absolute my-4"> */}
            <div className="text-center position-absolute" style={{color:'#0000FF', top: "90%", left: '40%'}}><Thund /> Powered by PushPay</div>
          {/* </div> */}
        </>
      );
    
}

export default PaymentMethod
// includes()  is a method taht take s a singel argurement
// what it does is that it checks if there is an item in that array ed
// const  myArray = [1, 2, 3, 4, 5]
// myArraya.includes(3)
// output = true