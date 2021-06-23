import React from 'react'
import PushPayWallet from './PushPayWallet';
import USSD from './USSD';
import Card from './Card';
import Bank from './Bank';
import {ReactComponent as  PushImg } from  "./img/pushpay.svg"
import {ReactComponent as  Thund } from  "./img/thund.svg"
import { CartContext } from '../../ContextProvider';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./payment.css"

import { MainRou, PowerRad } from "./styled"
import PaySide from "./PaySide"
import { paymentFormular } from '../paymentsFormula';
// import { paymentFormular } from '../paymentsFormula';


const PaymentMethod = () => {
  const [PaymentContext] = React.useContext(CartContext);


  const [routes] = React.useState([
    {
      path: "/payment/card",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
      main: () => <Card />,
    },  
    {  
      path: "/payment/ussd",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
      main: () => <USSD />,
    },
    {
      path: "/payment/bank",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
      main: () => <Bank/>,
    },
    {
      path: "/payment/wallet",
      exact: true,
      sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
      main: () => <PushPayWallet/>,
    },
  ])


    return (
      <>
        <div className="pay">
           <div className="row mx-0 justify-content-center align-items-start">
        <Router>
            <div className="sidebars col-md-4">
            <div className="header  mt-3">
              <PushImg />
              <h4 className="my-3" style={{ fontSize: ".6rem", fontWeight: 500 }}>Choose payment method</h4>
            </div>

           <div className="">
           
              <PaySide />
                <div className="bg-white p-2" style={{borderRadius: '10px'}}>
                    <p style={{fontSize: ".9rem"}}>Processing fee</p>
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
           </div>

            <MainRou className="main col-md mt-2 mb-2 py-3">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                  ))}
              </Switch>
            </MainRou>
          </Router>
          </div>
        </div>

          <>
          </>
            <PowerRad className="text-center"><Thund /> Powered by PushPay</PowerRad>
        </>
      );
    
}

export default PaymentMethod
// includes()  is a method taht take s a singel argurement
// what it does is that it checks if there is an item in that array ed
// const  myArray = [1, 2, 3, 4, 5]
// myArraya.includes(3)
// output = true


// 13579felix