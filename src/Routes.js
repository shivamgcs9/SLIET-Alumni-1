import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Teams from "./pages/Teams/Teams";
import Dashboard from './pages/Dashboard/Dash';



function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/team" exact component={Teams} />
                <Route path="/dashboard" exact component={Dashboard} />
                

            </Switch>
        </Router>
    );
}

export default Routes;
