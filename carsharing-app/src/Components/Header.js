import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../constants.json";
import { ReactSVG } from "react-svg";
import map from "../img/icons/map.svg";
import header from "../styles/Header.module.css";

const Header = () => {
    const [active, setActive] = useState(false)
    const [city, setCity] = useState(data.DefaultCity)

    console.log(active)
    return (
        <div className={header.wrapper}>
            <div className={header.header}>
                <div className={header.header__logo}>
                    <Link to='/CarsharingApp/' style={{textDecoration: 'none'}}>
                        Need for drive
                    </Link>
                </div>
                <div className={header.header__map}>
                    <div className={header.map__name} onClick={() => setActive(true)}>
                        <ReactSVG src={map} />
                        <div className={header.city__name}>{city}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;