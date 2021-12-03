import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Teams from "./pages/Teams/Teams";
import Dashboard from './pages/Dashboard/Dash';
import LoginSignUp from "./components/SigninSignup/LoginSignUp";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/team" exact component={Teams} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/register" exact component={Register} />
                <Route path="/signin" component = {Login} />
            </Switch>
        </Router>
    );
}

export default Routes;
