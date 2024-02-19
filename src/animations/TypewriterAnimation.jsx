import React from 'react';
import style from '../styles/TypewriterAnimation.module.css';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterAnimation = ({ content }) => {
    return (
        <div className={`${style.text}`}>
            <Typewriter
                words={[content]}
                typeSpeed={25}
                erase={false}
                cursor={true}
                cursorBlinking={true}
            />
        </div>
    );
};

export default TypewriterAnimation;
