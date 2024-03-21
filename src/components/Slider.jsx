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
        desc: 'Radosław Mysłek - człowiek pożar, grając tylko lewą ręką na bębnach potrafi podpalić każdy parkiet. W tym czasie drugą wymieni olej w aucie. Gdy był mały, rozkręcał mamie wszystkie zegarki, żeby zobaczyć jak działają (i od tej pory już nie działały).'
    },
    {
        src: car2,
        name: 'Piotr',
        desc: 'Piotr Iwański - jego gra, to miód na serce mas słuchających. I nic dziwnego, bo gdy nie łamie serc swoją grą, to jest właścicielem pasieki. Pracowita z niego pszczółka, więc jako operator instrumentów klawiszowych przemierza suche polskie szosy, jako kierowca z programem artystycznym. Bawienie ludzi nigdy go nie nudzi, by być w dobrej formie codziennie się trudzi.'
    },
    {
        src: car3,
        name: 'Michał',
        desc: 'Michał Mościcki - jak na prawdziwego basistę przystało, ma dowcip równie bujny jak brodę. Tańczy za trzech, żartuje za dwóch, a śpiewa jak dwie trzecie prawdziwego wokalisty. Po godzinach dorabia jako rehabilitant kończyn dolnych - jak gra, każdemu nogi same rwą się do tańca.'
    },
    {
        src: car4,
        name: 'Łukasz',
        desc: 'Łukasz Jankowski - czuły dżentelmen z niebylejakim zadęciem. Czy dmie we flet, czy w saksofon, nieważne - wszystkim damom w promieniu jednego kursu PKSem przyśpiesza tętno. W każdą solówkę wjeżdża jak tarpan w ściernisko, a na końcu ląduje jak zawodowy pilot LOTu - tak, że wszyscy biją brawo. Była mu pisana kariera lekarza, ale leczy smutasów swoimi frazami.'
    },
    {
        src: car5,
        name: 'Grześ',
        desc: 'Grzegorz Duszak - wujek dobra rada. Gdy mu się pożalisz, powie - nie przejmuj się, bracie, nie cały świat jest o Tobie - cały świat jest o mnie. Jak na prawdziwego wokalistę przystało, gra również na gitarze, a do tego ma pamięć fotogeniczną - zapamiętuje tylko ładnych ludzi (i wciąż nie pamięta, jak nazywa się basista Grzecznych Chłopców). Napisze piosenkę, pożartuje, zagra, zaśpiewa, ugotuje - słowem człowiek renesansu krajowej produkcji.'
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
                <button onClick={showPrevImage} className={`${style.arrow_prev}`}>
                    <img 
                        alt='arrow-prev' 
                        src={arrowPrev}
                        width='40px'
                        height='auto'
                    />
                </button>
                <span className={`${style.image_name}`}>{carouselImages[imageIndex].name}</span>
                <img loading="lazy" className={`${style.image}`} src={carouselImages[imageIndex].src} alt='member-photo'/>
                <button onClick={showNextImage} className={`${style.arrow_next}`}>
                    <img 
                        alt='arrow-next' 
                        src={arrowNext}
                        width='40px'
                        height='auto'
                    />
                </button>
            </div>
            <div className={`${style.right_gallery}`}>
                <p>{carouselImages[imageIndex].desc}</p>
            </div>
        </div>
    )
}

export default Slider;