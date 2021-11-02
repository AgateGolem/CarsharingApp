import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { requests } from "../../requests";
import { ReactComponent as Arrow } from "../../img/icons/arrowUp.svg";
import model from "../../styles/Model.module.css";

const Model = (props) => {
    const [models, setModels] = useState([])
    const [toggle, setToggle] = useState(false);

    const nameCity = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.city;
    })
    
    const namePoint = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.point;
    })

    const nameModel = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.model;
    })

    const toggleOrder = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        requests.getCities('/car', (response) =>{
            setModels(response.data.data);
    })})

    /*console.log(models);*/

    const renderAuto = () => models.map((item,index) => (
        <div className={model.wrappCar}>
            {item.name};
            <img src={item.thumbnail.path}></img>
        </div>
    ))

    return (
        <div className={model.wrapper}>
            <div className={model.main}>
                <div className={model.left}>
                    <div className={model.radioInputs}>
                        <label>
                            <input type="radio" value="Все модели" name="kindModel" checked={true} />
                            <span>Все модели</span>
                        </label>
                        <label>
                            <input type="radio" value="Эконом" name="kindModel" />
                            <span>Эконом</span>
                        </label>
                        <label>
                            <input type="radio" value="Премиум" name="kindModel" />
                            <span>Премиум</span>
                        </label>
                    </div>
                    <div className={model.carList}>
                        {renderAuto()}
                    </div>
                </div>
                <div className={cn(model.border, {[model.open] : toggle})}>
                    <div className={cn(model.arrowWrapp, {[model.open] : toggle})} onClick={toggleOrder}>
                        <Arrow />
                    </div>
                    <div className={cn(model.order, {[model.open] : toggle})}>
                        <div className={model.order__wrapp}>
                            <div className={model.order__desc}>
                                <div className={model.order__head}>Ваш заказ:</div>
                                <div className={cn(model.order__point, {[model.openDesc] : namePoint}, {[model.openMobile]: toggle})}>
                                    <div className={model.point__name}>Пункт выдачи</div>
                                    <div className={model.point__address}>{nameCity + ','} <br/> {namePoint}</div>
                                </div>
                                <div className={cn(model.model__desc, {[model.openDesc] : nameModel})}>
                                    <div className={model.head}>Модель</div>
                                    <div className={model.name}>{nameModel}</div>
                                </div>
                                <div className={cn(model.order__pricename, {[model.openDesc] : nameModel}, {[model.openMobile]: toggle})}>Цена:<p className={model.order__price}>от 8 000 до 12 000₽</p></div>
                            </div>
                            <div className={cn({[model.active]:nameModel}, model.order__button)} onClick={() => props.updateStep(props.currentStep + 1)}>Выбрать модель</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;