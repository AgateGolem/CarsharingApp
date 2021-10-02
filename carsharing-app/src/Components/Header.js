import React, { useContext, useState } from "react";
import axios from 'axios';
import "../styles/Header.css"
import MenuContext from "../Context/MenuContext";
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('Ульяновск')
    const [width, setWidth] = useContext(MenuContext);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    const changeCity = event => {
        setCity(event.target.value);
        if(event.key === 'Enter') setToggle(!toggle)
    }

    const data = {
        headers: {
            "X-Api-Factory-Application-Id": '5e25c641099b810b946c5d5b'
        }
    }

    const getCities = () => {
        axios.get(`https://api-factory.simbirsoft1.com/api/db/city/`, data)
            .then(response => {
                console.log(response);
                setCities(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            
            console.log(cities);
    }

    const citiesList = () => {
        return cities.map((city,i) => {
            return <option key={i} value={`${city.name}`} />
        })
    }

    return (
        <div>
            <div className={`${width} header`}>
                <Link to='/' style={{textDecoration: 'none'}}  onClick={() => setWidth('')}><div className="header__logo">
                    Need for drive
                </div></Link>
                <div className={`${width} header__map`}>
                    <div className="map__name" onClick={changeToggle}>
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="city__name">{city}</div>
                    </div>
                    <div className={`map__list ${toggle ? 'opened' : ''}`}>
                        <label className="map__city">Город</label>
                        <input className='map__input' type="text" list="cities" placeholder="Начните вводить пункт ..." onClick={getCities} onChange={changeCity}></input>
                        <datalist id="cities">{citiesList()}</datalist>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;