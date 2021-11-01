import React, { useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Sidebar from "../Components/SideBar";
import {Slides} from "../Components/MainPage/Slides";
import data from "../constants.json";
import map from "../img/icons/map.svg"
import mainpage  from "../styles/MainPage.module.css"
import sidebar from "../styles/SideBar.module.css";

const MainPage = () => {
    const [active, setActive] = useState(false)
    const [city, setCity] = useState(data.DefaultCity)

    return (
        <div>
            <Sidebar sidebar={sidebar}/>
            <div className={mainpage.cont}>
                <div className={mainpage.header}>
                    <div className={mainpage.header__logo}>
                    Need for drive
                    </div>
                    <div className={mainpage.header__map}>
                        <div className={mainpage.map__name} onClick={() => setActive(true)}>
                            <ReactSVG src={map} />
                            <div className={mainpage.city__name}>{city}</div>
                        </div>
                    </div>
                </div>
                <div className={mainpage.information}>
                    <div className={mainpage.content}>
                        <h1 className={mainpage.content__name}>Каршеринг</h1>
                        <h1 className={cn(mainpage.content__name, mainpage.content__name_colorized)}>Need for drive</h1>
                        <p className={mainpage.content__description}>Поминутная аренда авто твоего города</p>
                        <NavLink to="/offer" style={{textDecoration: 'none'}}>    
                            <div className={cn(mainpage.button, mainpage.content__button)}>
                                Забронировать
                            </div>
                        </NavLink>
                    </div>
                    <div className={mainpage.footer}>
                        <p className={mainpage.footer__license}>2016-2019 "Need for drive"</p>
                        <p className={mainpage.footer__phone}>8 (495) 234-22-44</p>
                    </div>
                </div>
                <Slides />
            </div>
        </div>
    )
}

export default MainPage;