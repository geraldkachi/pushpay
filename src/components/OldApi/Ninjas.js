import React from "react";

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      {ninjas.map((ninja) => {
        return ninja.age > 20 ? (
          <div key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>belt: {ninja.belt}</div>
          </div>
        ) : null
      })}
    </div>
  );
};

export default Ninjas;

// <div>
// {ninjas.map((ninja) => (
//   <div key={ninja.id}>
//     <div>Name: {ninja.name}</div>
//     <div>Age: {ninja.age}</div>
//     <div>belt: {ninja.belt}</div>
//   </div>
// ))}
// </div>

// const ninjaList = ninjas.map((ninja) => {
//     if (ninja.age > 20) {

//         return(
//             <div key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>Age: {ninja.age}</div>
//           <div>belt: {ninja.belt}</div>
//         </div>
//         )
//     } else{
//         return null
//     }
// })





// ////////////////////////////////////////////////

// import logo from './logo.svg';
import React from "react"
import "./App.css";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Shop from "./components/Shop";
// import NotFound from "./components/NotFound";
// import ItemDetail from "./components/itemDetail";
// import { Switch, Route, Redirect } from "react-router-dom";
import Ninjas from "./components/Ninjas"

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"kachi",
       age:"40",
       text:'',

       ninjas:[
          {id:"1",name:"kachi", age:"25", belt:"black"},
          {id:"2",name:"kachi", age:"20", belt:"green"},
          {id:"3",name:"kachi", age:"305", belt:"pink"}
       ]
    }
  }

  // handleClick = (e) => {
  //   // console.log(e.target);
  //   console.log(this.state);
  //   this.setState({name:"LordGerald",age:"49"})
  // }

  // handleClickForm = (e) => {
  //   this.setState({name: e.target.value})
  // }

  // handleMouseOver = (e) => {
  //   console.log(e.target, e.pageX);
  // }
  // handleCopy = (e) => {
  //   console.log("Try being Original for once");
  // }
//   handleSubmit = (e) => {
//     e.preventDefault(e)
//     console.log("submiited", this.state.name);
//   }
//   handleChange =(e)=>{
//     this.setState({name: e.target.value})
//   }

//  render(){
//    const {ninjas} = this.state
//   return (
//     <div className="App">
//      <h1>Hey Kacji</h1>
//      <p>My name is: {this.state.name} and i am  {this.state.age}</p>
//      <button onClick={this.handleClick}>click me</button>
//      <button onMouseOver={this.handleMouseOver}>Hover me</button>
//      <p onCopy={this.handleCopy}>What we think, we become</p>
//     <br/>
//     <br/>


//     <form action="" onSubmit={this.handleSubmit}>
//       <input type="text" name="text" value={this.state.name} onChange={this.handleChange} />
//       <button onClick={this.handleClickForm}>Submit</button>
//     </form>

//     <div>
//       <h1>My first React app!</h1>
//       <p>Welcome</p>
//       <Ninjas ninjas={ninjas} />
      //  <Ninjas name="KachiLord" age="225" belt="blue" /> 
//      </div>

//     </div>
//   );
//  }
// } 

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// )

// export default App;

// <Navbar />
// <Switch>
//  <Route exact path="/" component={Home} />
//  <Route exact path="/about" component={About} />
// <Route exact path="/shop" component={Shop} />
// <Route path="/shop/:id" component={ItemDetail} />
// <Redirect to="/404" component={NotFound} />
// </Switch> 