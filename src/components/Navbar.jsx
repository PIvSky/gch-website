import { useRef, useEffect } from 'react';
import style from '../styles/Navbar.module.css';
import {useNavigate} from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';

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

    // position stisky on scroll
    useEffect(() => {
        const handleScroll = () => {
          const navbar = stickyRef.current;
          
          if (window.scrollY > navbar.offsetTop) {
            navbar.classList.add(style.sticky);
          } else {
            navbar.classList.remove(style.sticky);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <>
            <div className={`${style.wrapper}`}>
                <div className={`${style.navbar}`} ref={stickyRef}>
                    <div className={`${style.title_container}`}>
                        <h1 onClick={navigateHandler} className={`${style.title_element}`}>grzeczni chłopcy</h1>
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
                    <ul className={`${style.nav_list}`}>
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
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;