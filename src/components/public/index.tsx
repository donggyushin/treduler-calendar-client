import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from './main'
import SignUp from './signUp'
import Login from './login'

export default function App() {
    return <Router>
        <Switch>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route>
                <Main />
            </Route>
        </Switch>
    </Router>
}