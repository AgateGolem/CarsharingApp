import React, { useContext, useState } from "react";
import "../styles/MainPage.css"
import "../styles/Header.css"
import {Slider} from "../Components/Slider"
import { Link } from "react-router-dom";
import MenuContext from "../Context/MenuContext";

const MainPage = () => {

    const [width, setWidth] = useContext(MenuContext)
    return (
        <div>
            <div className="cont">
            <div className="information">
                
                <div className="content">
                    <h1 className="content__name">Каршеринг</h1>
                    <h1 className="content__name content__name_colorized">Need for drive</h1>
                    <p className="content__description">Поминутная аренда авто твоего города</p>
                    <Link to={"/offer"} style={{textDecoration: 'none'}} onClick={() => setWidth('max')}>    
                        <div className="button content__button">
                            Забронировать
                        </div>
                    </Link>
                </div>
                <div className="footer">
                    <p className="footer__license">2016-2019 "Need for drive"</p>
                    <p className="footer__phone">8 (495) 234-22-44</p>
                </div>
            </div>
                <Slider />
            </div>
        </div>
    )
}

export default MainPage;