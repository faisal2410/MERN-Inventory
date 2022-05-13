import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
};
export default App;
