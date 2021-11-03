import React from "react";
import cn from "classnames";
import steps from "../../styles/Steps.module.css";

const Steps = (props) => {
    const {selected, index, label, updateStep, activeNextStep} = props;
    console.log(activeNextStep)

    return (
        <div className={cn(steps.step, {[steps.selected]: selected}, {[steps.activeNext]: activeNextStep})} onClick={() => updateStep(index + 1)}>
            <span>{label}</span>
        </div>
    )
}
export default Steps;