import style from '../styles/Navbar.module.css'
import { HashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <>
            <div className={`${style.navbar}`}>
                <div className={`${style.title_container}`}>
                    <h1 className={`${style.title_element}`}>grzeczni chłopcy</h1>
                </div>
                <nav>
                    <ul className={`${style.nav_list}`}>
                        <li className={`${style.nav_element}`}>
                            <NavLink
                                smooth to='/#o-nas'
                            >o nas
                            </NavLink>
                        </li>
                        <li className={`${style.nav_element}`}>
                            <NavLink
                                smooth to='/#muzyka'
                            >muzyka
                            </NavLink>
                        </li>
                        <li className={`${style.nav_element}`}>pobierz</li>
                        <li className={`${style.nav_element}`}>
                            <NavLink 
                                smooth to="/#kontakt"
                            >kontakt
                            </NavLink>
                        </li>
                    </ul>
                    <div className={`${style.burger_box}`}>
                        <div className={`${style.burger_inner}`}>
                            <div className={`${style.top_bun}`}></div>
                            <div className={`${style.middle_bun}`}></div>
                            <div className={`${style.bottom_bun}`}></div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;