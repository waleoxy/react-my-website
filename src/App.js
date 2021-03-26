import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import Works from "./pages/WorksPage"
import Default from "./pages/DefaultPage";
import Contact from "./pages/ContactPage";
import DetailWork from "./pages/DetailWork"
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/detailwork/:id" component={DetailWork}/>
          <Route path="/works" exact component={Works}/>
          <Route component={Default}/>
        </Switch>
        <Footer/>
      </>
    )
  }
}
