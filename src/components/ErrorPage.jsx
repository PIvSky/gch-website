import Navbar from "./Navbar";
import style from '../styles/ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <>
            <Navbar/>
            <main>
                <h3>Serwus!</h3>
                <p>Mówili jeździć obserwować no i chyba padł nam tylni wahacz!</p>
                <br></br>
                <p>Jeżeli wyświetliła Ci się ta strona, daj nam znać że coś poszło nie tak, na ten adres: <a href="kontakt@grzecznichlopcy.pl">kontakt@grzecznichlopcy.pl</a></p>
            </main>
        </>
    )
}

export default ErrorPage;