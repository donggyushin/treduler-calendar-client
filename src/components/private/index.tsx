import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from './main/main'

export default function App() {
    return <Router>
        <Switch>
            <Route>
                <Main />
            </Route>
        </Switch>
    </Router>
}