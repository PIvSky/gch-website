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
        src: car1,
        name: 'Radek',
        desc: 'Radek         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint dolorum nemo, ratione commodi tempore minus necessitatibus porro distinctio pariatur ducimus incidunt non, iste ipsam placeat consequuntur excepturi veniam! Illum?'
    },
    {
        src: car2,
        name: 'Piotr',
        desc: 'Piotr         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint dolorum nemo, ratione commodi tempore minus necessitatibus porro distinctio pariatur ducimus incidunt non, iste ipsam placeat consequuntur excepturi veniam! Illum?'
    },
    {
        src: car3,
        name: 'Michał',
        desc: 'Michał         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint dolorum nemo, ratione commodi tempore minus necessitatibus porro distinctio pariatur ducimus incidunt non, iste ipsam placeat consequuntur excepturi veniam! Illum?'
    },
    {
        src: car4,
        name: 'Łukasz',
        desc: 'Łukasz         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint dolorum nemo, ratione commodi tempore minus necessitatibus porro distinctio pariatur ducimus incidunt non, iste ipsam placeat consequuntur excepturi veniam! Illum?'
    },
    {
        src: car5,
        name: 'Grześ',
        desc: 'Grześ         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint dolorum nemo, ratione commodi tempore minus necessitatibus porro distinctio pariatur ducimus incidunt non, iste ipsam placeat consequuntur excepturi veniam! Illum?'
    }
]

const Slider = () => {

    const [imageIndex, setImageIndex] = useState(4);

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

    const handleLeftGalleryClick = (index) => {
        setImageIndex(index);
    };

    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.left_gallery}`}>
                {carouselImages.map((image,index) => (
                    <div className={`${style.left_gallery_frame}`} key={index}>
                        <img 
                            alt={image.name} 
                            src={image.src} 
                            className={`${style.left_gallery_photo}`}
                            onClick={() => handleLeftGalleryClick(index)}
                            ></img>
                    </div>
                ))}
            </div>
            <div className={`${style.image_wrapper}`}>
                <button onClick={showPrevImage} className={`${style.arrow_prev}`}><img alt='arrow-prev' src={arrowPrev} /></button>
                <span className={`${style.image_name}`}>{carouselImages[imageIndex].name}</span>
                <img className={`${style.image}`} src={carouselImages[imageIndex].src}/>
                <button onClick={showNextImage} className={`${style.arrow_next}`}><img alt='arrow-next' src={arrowNext} /></button>
            </div>
            <div className={`${style.right_gallery}`}>
                <p>{carouselImages[imageIndex].desc}</p>
                {/* TODO: change content of members bios */}
            </div>
        </div>
    )
}

export default Slider;