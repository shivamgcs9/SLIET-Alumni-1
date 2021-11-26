import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faq from "./components/Faq/faq";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Teams from "./pages/Teams/Teams";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/login" caseSensitive={false} component={Login} />
          <Route path="/register" caseSensitive={false} component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
