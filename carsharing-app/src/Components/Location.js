import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { YMaps, Map } from 'react-yandex-maps';
import { DataContext } from "../Context/DataContext";

const Location = () => {
    const [cities, setCities] = useState([]);
    const [points, setPoints] = useState([]);
    const [city, setCity] = useState();
    const [point, setPoint] = useState();
    const [data, setData] = useContext(DataContext);

    const head = {
        headers: {
            "X-Api-Factory-Application-Id": '5e25c641099b810b946c5d5b'
        }
    }
    
    const changeCity = event => {
        setCity(event.target.value);
    }

    const changePoint = event => {
        setPoint(event.target.value);
    }

    const getCities = () => {
        axios.get(`https://api-factory.simbirsoft1.com/api/db/city/`, head)
            .then(response => {
                console.log(response);
                setCities(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getPoints = () => {
        const town = cities.find(el => el.name === city)
        axios.get(`https://api-factory.simbirsoft1.com/api/db/point?cityId=` + town.id, head)
            .then(response => {
                console.log(response);
                setPoints(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const citiesList = () => {
        return cities.map((city,i) => {
            return <option key={i} value={`${city.name}`} />
        })
    }

    const pointsList = () => {
        return points.map((point,i) => {
            return <option key={i} value={`${point.name}`} />
        })
    }

    const saveData = () => {
        setData({city, point})
    }

    return (
        <div>
            <DataContext.Consumer>
                {({data, actions}) => {
                    return(
                        <div className="main">
                            <div className="left">
                                <div className="inputs">
                                    <div className="inputs__city">
                                        <label>Город</label>
                                        <input type="text" className="input" list="towns" onClick={getCities} onChange={changeCity}></input>
                                        <datalist id="towns">{citiesList()}</datalist>
                                    </div>
                                    <div className="inputs__point">
                                        <label>Пункт выдачи</label>
                                        <input type="text" className="input" list="points" onClick={getPoints} onChange={changePoint}></input>
                                        <datalist id="points">{pointsList()}</datalist>
                                    </div>
                                </div>
                                <div className="map">
                                    <label>Выбрать на карте:</label>
                                    <div className="map__yandex">
                                        <YMaps>
                                            <Map width='80%' height='350px' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                                        </YMaps>
                                    </div>
                                </div>
                            </div>
                            <div className="order">
                                <div className="order__wrapp">
                                    <div className="order__desc">
                                        <div className="order__head">Ваш заказ:</div>
                                        <div className="order__point">
                                            <div className="point__name">Пункт выдачи</div>
                                            <div className="point__address">{point}</div>
                                        </div>
                                        <div className="order__pricename">Цена:<p className="order__price">от 8 000 до 12 000₽</p></div>
                                    </div>
                                    <div className={`${point ? 'active ' : ''}order__button`} onClick={saveData}>Выбрать модель</div>
                                </div>
                            </div>
                            <input id="step" style={{display: 'none'}} value='1'/>
                        </div>
                    )
                }}
            </DataContext.Consumer>
        </div>
    )
}

export default Location;