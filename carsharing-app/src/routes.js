import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import MainPage from "./pages/MainPage";
import OfferPage from "./pages/OfferPage";

export const useRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="CarsharingApp/" exact>
                    <MainPage />
                </Route>
                <Route path="CarsharingApp/offer">
                    <OfferPage />
                </Route>
                <Redirect to="CarsharingApp/" />
            </Switch>
        </Router>
    )
}