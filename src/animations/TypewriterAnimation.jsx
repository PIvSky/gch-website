import React from 'react';
import style from '../styles/TypewriterAnimation.module.css';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterAnimation = ({ content }) => {
    return (
        <div className={`${style.text}`}>
            <Typewriter
                words={[content]}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
            />
        </div>
    );
};

export default TypewriterAnimation;
