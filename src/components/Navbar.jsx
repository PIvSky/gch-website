import { useRef, useEffect } from 'react';
import style from '../styles/Navbar.module.css';
import instagram_icon from '../assets/icons/instagram.png';
import facebook_icon from '../assets/icons/facebook.png';
import youtube_icon from '../assets/icons/youtube.png';
import {useNavigate} from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';
import 'animate.css';

const Navbar = () => {

    const navRef = useRef();
    const menuRef = useRef();
    const navigateHome = useNavigate()
    const stickyRef = useRef(null);

    // Hamburger menu action 
    const menuTranformation = () => {
        menuRef.current.classList.toggle(style.open);
    }

    const showNavbar = () => {
        const listItems = navRef.current.querySelectorAll('li');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add(style.slideInLeft);
            }, index * 250);
        });
        navRef.current.classList.toggle(style.nav_show);
    };

    const closeNavbar = () => {
        menuRef.current.classList.toggle(style.open);
        navRef.current.classList.toggle(style.nav_show);
    };

    const navigateHandler = () => {
        navigateHome('./');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className={`${style.wrapper}`} ref={stickyRef}>
                <div className={`${style.navbar}`}>
                    <div className={`${style.title_container}`}>
                        <h1 onClick={navigateHandler} className={`${style.title_element} ${style.animate__animated} ${style.animate__flash}`}>grzeczni chłopcy</h1>
                    </div>
                    <div onClick={showNavbar} className={`${style.burger_box}`}>
                        <div className={`${style.burger_inner}`} onClick={menuTranformation} ref={menuRef}>
                            <div className={`${style.top_bun}`}></div>
                            <div className={`${style.middle_bun}`}></div>
                            <div className={`${style.bottom_bun}`}></div>
                        </div>
                    </div>
                </div>
                <nav className={`${style.nav}`} ref={navRef}>
                    <ul className={`${style.nav_list} ${style.animate__animated} ${style.animate__flash}`}>
                        <li className={`${style.nav_element}`} onClick={closeNavbar}>
                            <NavLink smooth to='/#o-nas'>o nas</NavLink>
                        </li>
                        <li className={`${style.nav_element}`} onClick={closeNavbar}>
                            <NavLink smooth to='/#muzyka'>muzyka</NavLink>
                        </li>
                        <li className={`${style.nav_element}`} onClick={closeNavbar}>pobierz
                        </li>
                        <li className={`${style.nav_element}`} onClick={closeNavbar}>
                            <NavLink smooth to="/#kontakt">kontakt</NavLink>
                        </li>
                        <div className={`${style.icons_container}`}>
                            <a href='https://www.instagram.com/grzecznichlopcy/'><img className={`${style.instagram_icon}`} src={instagram_icon}/></a>
                            <a href='https://www.facebook.com/grzecznichlopcyband'><img className={`${style.facebook_icon}`} src={facebook_icon}/></a>
                            <a href='https://www.youtube.com/@GChProductionPL'><img className={`${style.youtube_icon}`} src={youtube_icon}/></a>
                        </div>
                        {/* TODO: Add SM shortcuts */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;