import React, { useState } from "react";
import { Route } from "react-router";
import Location from "../Components/Location"
import Model from "../Components/Model"
import Steps from "../Components/Steps";
import { DataContext } from "../Context/DataContext";
import "../styles/OfferPage.css"
import "../styles/Header.css"

const OfferPage = () => {
    const [data, setData] = useState({
        city: '', point: '', model: '', color: '', dateFrom: '',
        dateTo: '', tariff: '', fuel: '', seat: '', handDrive: ''
    })
    return (
        <div>
            <DataContext.Provider value={[data, setData]}>
                <Steps />
                <Route path="/offer">
                    <Location />
                </Route>
                <Route path="/offer/model">
                    <Model />
                </Route>
            </DataContext.Provider>
        </div>
    )
}

export default OfferPage;