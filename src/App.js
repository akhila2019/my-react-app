import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
      render() {
        return (
         <HashRouter basename='/'>
          <div>
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
           </ul>
           <hr />
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
          </div>
         </HashRouter>
        );
       }
}


const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>


export default App;
