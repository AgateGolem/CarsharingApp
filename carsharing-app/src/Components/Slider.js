import React, {useState} from "react";
import "../styles/MainPage.css"

const slides = [
    {
        eachSlide: 'url(https://www.tu-braunschweig.de/fileadmin/_processed_/9/5/csm_Photo_by_Jp_Valery_on_Unsplash_3493c81b06.jpg)',
        head: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        color: 'linear-gradient(to right, #13493F, #0C7B1B)',
    },
    {
        eachSlide: 'url(https://get.wallhere.com/photo/trees-white-black-Photoshop-street-car-vehicle-road-Nikon-sports-car-Ferrari-Belgium-Hypercar-MM-Pearl-GTO-tree-50mm-wild-photo-wheel-f16-wallpaper-supercar-d90-50-stripe-cs5-belgie-official-v12-edition-limited-599-land-vehicle-automotive-design-automotive-exterior-race-car-automobile-make-luxury-vehicle-bumper-ferrari-spa-599gto-willem-striping-rodenburg-brasschaat-593100.jpg)',
        head: 'Страховка',
        text: 'Полная страховка автомобиля',
        color: 'linear-gradient(to right, #132949, #0C7B67)',
    },
    {
        eachSlide: 'url(https://s1.1zoom.ru/b5050/954/431617-Kycb_3840x2400.jpg)',
        head: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт',
        color: 'linear-gradient(to right, #493013, #7B0C3B)',
    },
    {
        eachSlide: 'url(https://get.wallhere.com/photo/car-vehicle-Nissan-sports-car-2013-Nissan-GT-R-netcarshow-netcar-car-images-car-photo-GT-R-R35-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-454928.jpg)',
        head: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО',
        color: 'linear-gradient(to right, #281349, #720C7B)',
    }
];

export const Slider = () => {
    const [active, setActive] = useState(0);
    const max = slides.length;

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 50;
        
        return {
            width: ( slides.length * 50 ) + 'vw',
            transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
            <div className='slider__grad'></div>
            <div 
                className='slide__desc'
                key= { index }>
            <div className='slide__head'>{ item.head }</div>
            <div className='slide__text'>{ item.text }</div>
            <div 
            className='slide__button button'
            style={{ background: item.color }}>Подробнее</div>
        </div>
        </div> 
    ));
    
    const renderDots = () => slides.map((slide, index) => ( // check index
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className='arrows prev' 
                onClick={ () => prevOne() } >
                <svg width="30" height="30" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 10L9 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next' 
                onClick={ () => nextOne() } > 
                <svg width="30" height="30" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 10L1 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </React.Fragment>
    )

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
                
            </div>
            
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
        </section>
    );
};