import React from 'react'
import { MainRou } from "./styled"

import { BrowserRouter as Router, Switch, Route,Link,NavLink, useHistory } from "react-router-dom";

const Main = ({ routes }) => {
    return (
        <Router>
            <MainRou className="main col-md mt-2 mb-2 py-3">
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                  ))}
              </Switch>
            </MainRou>
        </Router>
    )
}

export default Main
