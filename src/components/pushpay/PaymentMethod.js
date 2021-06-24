import React from 'react'

import {ReactComponent as  PushImg } from  "./img/pushpay.svg"
import {ReactComponent as  Thund } from  "./img/thund.svg"
// import { PushContext } from '../../ContextProvider';


import { SideStyle } from "./styled";

import { ReactComponent as CardImg } from "./img/card.svg";
import { ReactComponent as HashImg } from "./img/hash.svg";
import { ReactComponent as BankImg } from "./img/bank.svg";
import { ReactComponent as WalletImg } from "./img/wallet.svg";


import { BrowserRouter as Router, Switch, Route,Link, useHistory } from "react-router-dom";
import "./payment.css"

import { MainRou, PowerRad } from "./styled"
// import PaySide from "./PaySide"

const PaymentMethod = ({ routes }) => {

  const currentRoute = useHistory().location.pathname.toLowerCase();

  // const [PaymentContext] = React.useContext(PushContext);


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
           
           {/*  */}
           <SideStyle>
              <ul className="list-unstyled list">
                <li className="liClass">
                  <Link className="links" style={{backgroundColor: currentRoute === "/payment/" ? "#2335ed" : "", borderRadius:'10px'}} to="/payment/card">
                    <CardImg style={{ marginRight: ".5rem" }} />
                    <span style={{ fontSize: ".8rem" }}>Card</span>
                  </Link>
                </li>
                <li className="liClass">
                  <Link className="links" style={{backgroundColor: currentRoute === "/payment/ussd" ? "#2335ed" : "", borderRadius:'10px'}} to="/payment/ussd">
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
              </ul>
            </SideStyle>
           {/*  */}
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


// const PaymentFee = () => {
//   <MainRou className="main col-md mt-2 mb-2 py-3">
//     <Switch>
//       {routes.map((route, index) => (
//         <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
//         ))}
//     </Switch>
//   </MainRou>
// }
// React.useEffect(() => {
// PaymentFee()
// }, [])