import style from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <h1 className={`${style.title}`}>grzeczni chłopcy</h1>
            <nav>
                <ul>
                    <li>o nas</li>
                    <li>muzyka</li>
                    <li>pobierz</li>
                    <li>kontakt</li>
                </ul>
            </nav>
            
        </>
    )
}

export default Navbar;