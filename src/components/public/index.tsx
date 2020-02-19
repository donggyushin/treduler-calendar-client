import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from './main/main'
import SignUp from './signUp/signUp'
import Login from './login/login'

export default function App() {
    return <Router>
        <Switch>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
            <Route exact path="/sign-in">
                <Login />
            </Route>
            <Route>
                <Main />
            </Route>
        </Switch>
    </Router>
}