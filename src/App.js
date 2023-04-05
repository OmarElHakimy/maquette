import React, { Component } from "react";
import Navigation from './containers/Navigation';
import Header from './containers/Header';
import IntroduceOurself from './containers/introduceOurself';
import WhyUs from './containers/whyUs';
import AreaOfPractice from './containers/areaOfPractice';
import Footer from "./containers/footer";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <IntroduceOurself/>
        <WhyUs/>
        <AreaOfPractice/>
        <Footer/>
      </div>
    );
  }
}

export default App;

