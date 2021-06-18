import React from "react";
import { Route, Switch,
  //  Redirect 
  } from "react-router-dom";
import RouteNavbar from "./components/RouteNavbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Post from "./components/Post";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
// import TypeInput from "./components/TypeInput";
// import CustomHookForm from "./components/customhooklogic/CustomHookForm";


import "./App.css";
import Pushpay from "./components/pushpay/Pushpay";
import Payment from "./components/pushpay/Payment";
// import ReactFormik from "./components/reactform/ReactFormik";
// import ReactHookForm from "./components/reactform/ReactHookForm";
// import LandifyApp from "./components/landify/LandifyApp";


const App = () => {
  return (
    <>
      {/* <RouteNavbar /> */}
      <Switch>
        <Route exact path="/" component={Pushpay} />
        <Route exact path="/payment" component={Payment} />
        {/* <Route exact path="/" component={LandifyApp} /> */}
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/posts/:post_id" component={Post} />
        <Route exact path="/typeinput" component={TypeInput} />
        <Route exact path="/react-hook-form" component={ReactHookForm} />
        <Route exact path="/formik" component={ReactFormik} />
        <Route exact path="/customreacthook" component={CustomHookForm} /> */}
        {/* <Route component={NotFound} />
        <Redirect path="/NotFound" /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );  
};

export default App;

// https://cssgradient.io/     https://getwaves.io/   https://bennettfeely.com/clippy/

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