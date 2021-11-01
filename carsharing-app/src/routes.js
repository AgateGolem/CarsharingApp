import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import MainPage from "./pages/MainPage";
import OfferPage from "./pages/OfferPage";

export const useRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/CarsharingApp" >
                    <MainPage />
                </Route>
                <Route path="/CarsharingApp/offer">
                    <OfferPage />
                </Route>
            </Switch>
        </Router>
    )
}