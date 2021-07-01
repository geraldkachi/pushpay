import React from 'react'
import { LinkStled, SideStyle } from "./styled"
import { BrowserRouter as Router, Switch, Route,Link,NavLink, useHistory } from "react-router-dom";

import {ReactComponent as  PushImg } from  "./img/pushpay.svg"
// import {ReactComponent as  Thund } from  "./img/thund.svg"

// import { ReactComponent as CardImg } from "./img/card.svg";
// import { ReactComponent as HashImg } from "./img/hash.svg";
// import { ReactComponent as BankImg } from "./img/bank.svg";
// import { ReactComponent as WalletImg } from "./img/wallet.svg";

const SideBar = ({ routes }) => {

    const activePath = window.location.pathname;
    
    return (
        <Router>
            <div className="sidebars">
            <div className="header  mt-3">
              <PushImg />
              <h4 className="my-3" style={{ fontSize: ".6rem", fontWeight: 500 }}>Choose payment method</h4>
            </div>

                <div className="">
                
                {/* side */}
                <SideStyle>
                    {routes.map((route, index) => (
                        <LinkStled exact activeClassName="active" activeStyle={{backgroundColor: "#2335ed", textDecoration: 'none', borderRadius: '10px', color:'white'}} key={index} to={route.path} className={activePath === route.path && "links"}>
                            <ul className="list-unstyled list">
                                <li className="liClass">
                                    {route.icon} <span style={{ fontSize: ".8rem" }}>{route.page}</span>
                                </li>
                            </ul>
                        </LinkStled>
                    ))}
                </SideStyle>
                    
                {/*  */}
                <div className="bg-white p-2" style={{borderRadius: '10px'}}>
                    <p style={{fontSize: ".9rem"}}>Processing fee</p>
                    <>
                        <Switch>
                            {routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} children={<route.sidebar />} />
                            ))}
                        </Switch>
                    </>
                </div>
                </div>
           </div>
        </Router>
    )
}

export default SideBar
