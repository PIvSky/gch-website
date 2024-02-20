import style from '../styles/About.module.css'
import TypewriterAnimation from '../animations/TypewriterAnimation';
import photo from '../assets/photo/photo-about.webp'

const content = 'Najlepsze przeboje, chórki, choreografia, styl, dancing, szyk, elegancja, dziarska publika i pełen wigoru zespół - to przepis na udany bal. Tak właśnie bawią ludzi Grzeczni Chłopcy - nieokiełznani przodownicy dobrego humoru i pogody ducha. Zaopatrzeni w doskonałe instrumenty, modną odzież i szerokie uśmiechy przemierzają kraj. W każdym mieście, w każdej wsi, które odwiedzą, Polacy z entuzjazmem oddają się zabawie.W repertuarze mają najlepsze piosenki krajowej produkcji: Kombi, Anna Jantar, Lady Pank, Krzysztof Krawczyk, Feel, czy Elektryczne Gitary. To tylko część długiej listy artystów goszczących w muzycznym arsenale zespołu. Gdy zjawiają się Grzeczni Chłopcy, dziewczęta mdleją, a chłopcy szaleją. Takiej fety Polska nie widziała, od brzegu Bałtyku aż po Tatry. Obywatelu! Nie czekaj! Szkoda życia! Nie zadzieraj nosa, nie rób takiej miny, nie udawaj Greka - baw się razem z nami!'

const About = () => {
    return (
        <section className={`${style.wrapper}`} id='o-nas'>
            {/* <div className={`${style.photo_container}`}>   
                <div className={`${style.photo_frame}`}>
                    <img
                        className={`${style.photo}`} 
                        src={photo} 
                        alt="about-photo" />
                </div>
            </div> */}
            <div className={`${style.content_container}`}>
                <h2 className={`${style.about_title}`}>PIOSENKI, KTÓRE KAŻDY ZNA, ALE NIKT NIE SŁYSZAŁ.</h2>
                <TypewriterAnimation content={content}/>
            </div>
        </section>
    )
}

export default About;