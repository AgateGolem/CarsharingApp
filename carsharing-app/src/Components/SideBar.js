import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import cn from "classnames";
import { ReactComponent as Hamburger } from "../img/icons/hamburger.svg";
import close from "../img/icons/close.svg";
import telegram from "../img/icons/telegram.svg";
import facebook from "../img/icons/facebook.svg";
import insta from "../img/icons/insta.svg";

const SideBar = (props) => {
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState('Eng')
    const {sidebar} = props;

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    const changeLanguage = () => {
        language === 'Eng' ? setLanguage('Рус') : setLanguage('Eng');
    }

    return (
        <div>
            <div className={sidebar.menu}>
                <div className={cn(sidebar.menu__icon, sidebar.open)} onClick={toggleMenu}>
                    <Hamburger />
                </div>
                <div className={sidebar.menu__language} onClick={changeLanguage}>{ language }</div>
            </div>
            <div className={cn(sidebar.wrapp, {[sidebar.opened]:toggle})}>
                <div className={sidebar.menu__opened}>
                    <div className={sidebar.menu__icon} onClick={toggleMenu}>
                        <ReactSVG src={close}/>
                    </div>
                    <nav className={sidebar.menu__list}>
                        <a className={sidebar.link} href="#">ПАРКОВКА</a>
                        <a className={sidebar.link} href="#">СТРАХОВКА</a>
                        <a className={sidebar.link} href="#">БЕНЗИН</a>
                        <a className={sidebar.link} href="#">ОБСЛУЖИВАНИЕ</a>
                    </nav>
                    <div className={sidebar.menu__social}>
                        <div className={sidebar.social__icon}>
                            <ReactSVG src={telegram}/>
                        </div>
                        <div className={sidebar.social__icon}>
                            <ReactSVG src={facebook}/>
                        </div>
                        <div className={sidebar.social__icon}>
                            <ReactSVG src={insta}/>
                        </div>
                        <div className={cn(sidebar.menu__language, sidebar.mobile)} onClick={changeLanguage}>{ language }</div>
                    </div>
                </div>
                <div className={sidebar.slider__back}></div>
            </div>
        </div>
    )
}

export default SideBar;