
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import LanguageSelection from "./Components/LanguageSelection";
import LoginForm from "./Login/LoginForm";
import LoginPage from "./Login/LoginPage";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LanguageSelection} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Router>
        )
    }
}