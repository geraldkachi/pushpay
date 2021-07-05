import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NotFound from "./components/NotFound";

import "./App.css";
import Pushpay from "./components/pushpay/Pushpay";
import Payment from "./components/pushpay/Payment";;


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Pushpay} />
        <Route path="/payment" component={Payment} />
        <Redirect from="/payment" to="/payment/card" /> 
        <Route path="*" component={NotFound} />
      </Switch>  
    </>
  );  
};

export default App;

// https://cssgradient.io/   https://getwaves.io/   https://bennettfeely.com/clippy/

//  from a site
// axios.all([
//   axios.get('https://api.github.com/users/hacktivist123'),
//   axios.get('https://api.github.com/users/adenekan41')
// ])
// .then(response => {
//   console.log('Date created: ', response[0].data.created_at);
//   console.log('Date created: ', response[1].data.created_at);
// });

// axios([
//   axios.get(`https:jsonplaceholder.typicode.com/todos`),
//   axios.get(`https:jsonplaceholder.typicode.com/posts`)
//   ])
//   .then(axios.spread((todos, posts) => showOutput(post)))
//   .catch(error => console.error(error))
  
//    Simultaneously data fetch api
  
//    axios
//   .delete(`http://jsonplaceholder.typicode.com/posts/1`)
//   .then(res => showOutput(res))
//   .catch(error => console.log(error))
//    Delete
  
//    To update an synchronous function of hitting an endpoint Api
  
//    axios
//   .patch('http://jsonplaceholder.typicode.com/posts/1, {
//   title: 'update todo',
//   completed: true
//   }')
//   .then(res => showOutput(res))
//   .catch(error => console.log(error))
  
//    Intercepting requests 
  
//    axios.get(url[, config])
  
//   axios.delete(url[, config])
  
//   axios.head(url[, config])
  
//   axios.options(url[, config])
  
//   axios.post(url[, data[, config]])
  
//   axios.put(url[, data[, config]])
  
//   axios.patch(url[, data[, config]])
//   [06/04, 09:54] Gerald Kachi: import * as React from 'react'; import Svg, { Circle, Rect } from 'react-native-svg'; export default function SvgComponent(props) { return ( <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}> <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" /> <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" /> </Svg> ); }
  
//   For react-native-svg using expo-cli
//    expo install react-native-svg
  
  
//   import * as React from 'react'; import Svg, { Circle, Rect } from 'react-native-svg'; export default function SvgComponent(props) { return ( <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}> <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" /> <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" /> </Svg> ); }
  
//   For react-native-svg using expo-cli