import React, { useState } from "react";
import Sidebar from "../Components/SideBar";
import Header from '../Components/Header';
import Location from "../Components/OrderPage/Location"
import Model from "../Components/OrderPage/Model"
import StepNavigation from "../Components/OrderPage/StepNavigation";
import sidebar from "../styles/SideBarOrder.module.css";

const OfferPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const labelArray = ['Местоположение', 'Модель', 'Дополнительно', 'Итого']
    const updateStep = (step) => {
        setCurrentStep(step);
    }

    

    const renderStep = () => {
        switch (currentStep) {
            
            case 1: 
                return <Location updateStep={updateStep} currentStep={currentStep}/>
            case 2:
                break;

            case 3: 
                break;

            case 4: 
                break;

            default:
                return <Location updateStep={updateStep} currentStep={currentStep}/>
        }
    }

    return (
        <div>
            <Sidebar sidebar={sidebar} />
            <Header />
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            { renderStep() }
        </div>
    )
}

export default OfferPage;