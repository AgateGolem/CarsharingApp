import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from "../Components/SideBar";
import Header from '../Components/Header';
import Location from "../Components/OrderPage/Location"
import Model from "../Components/OrderPage/Model"
import StepNavigation from "../Components/OrderPage/StepNavigation";
import sidebar from "../styles/SideBarOrder.module.css";
import offer from "../styles/OfferPage.module.css";

const OfferPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [activeNextStep, setActiveNextStep] = useState(false);
    const labelArray = ['Местоположение', 'Модель', 'Дополнительно', 'Итого']
    const namePoint = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.point;
    })

    const setActive = (active) => {
        setActiveNextStep(active);
    }

    const updateStep = (step) => {
        setCurrentStep(step);
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1: 
                return <Location updateStep={updateStep} currentStep={currentStep} setActive={setActive}/>
            case 2:
                return <Model updateStep={updateStep} currentStep={currentStep}/>
            case 3: 
                break;
            case 4: 
                break;
            default:
                return <Location updateStep={updateStep} currentStep={currentStep}/>
        }
    }

    return (
        <>
            <Sidebar sidebar={sidebar} />
            <Header />
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep} activeNextStep={activeNextStep}></StepNavigation>
            { renderStep() }
        </>
    )
}

export default OfferPage;