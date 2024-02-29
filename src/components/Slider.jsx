import { useState } from 'react';
import style from '../styles/Slider.module.css'

import car1 from '../assets/photo/car1.webp';
import car2 from '../assets/photo/car2.webp';
import car3 from '../assets/photo/car3.webp';
import car4 from '../assets/photo/car4.webp';
import car5 from '../assets/photo/car5.webp';

import arrowPrev from '../assets/buttons/left-arrow.png';
import arrowNext from '../assets/buttons/right-arrow.png';

const carouselImages = [
    {
        url: car1,
        name: 'Radek'
    },
    {
        url: car2,
        name: 'Piotr'
    },
    {
        url: car3,
        name: 'Michał'
    },
    {
        url: car4,
        name: 'Łukasz'
    },
    {
        url: car5,
        name: 'Grześ'
    }
]

const Slider = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const showPrevImage = () => {
        if (imageIndex === 0) {
            setImageIndex(carouselImages.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    };

    const showNextImage = () => {
        if (imageIndex === carouselImages.length - 1) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    };

    return (
        <>
        <div className={`${style.wrapper}`}>
            <button onClick={showPrevImage} className={`${style.arrow_prev}`}><img alt='arrow-prev' src={arrowPrev} /></button>
            <span className={`${style.image_name}`}>{carouselImages[imageIndex].name}</span>
            <img className={`${style.image}`} src={carouselImages[imageIndex].url}/>
            <button onClick={showNextImage} className={`${style.arrow_next}`}><img alt='arrow-next' src={arrowNext} /></button>
        </div>
    </>
    )
}

export default Slider;