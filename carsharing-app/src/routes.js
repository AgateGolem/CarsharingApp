import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import MainPage from "./pages/MainPage";
import OfferPage from "./pages/OfferPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <MainPage />
            </Route>
            <Route exact path="/offer">
                <OfferPage />
            </Route>
        </Switch>
    )
}