import style from '../styles/About.module.css'
import TypewriterAnimation from '../animations/TypewriterAnimation';

const About = () => {

    const about = {
        title: 'KTÓRE KAŻDY ZNA, ALE NIKT NIE SŁYSZAŁ.',
        content: 'Najlepsze przeboje, chórki, choreografia, styl, dancing, szyk, elegancja, dziarska publika i pełen wigoru zespół - to przepis na udany bal. Tak właśnie bawią ludzi Grzeczni Chłopcy - nieokiełznani przodownicy dobrego humoru i pogody ducha. Zaopatrzeni w doskonałe instrumenty, modną odzież i szerokie uśmiechy przemierzają kraj. W każdym mieście, w każdej wsi, które odwiedzą, Polacy z entuzjazmem oddają się zabawie.W repertuarze mają najlepsze piosenki krajowej produkcji: Kombi, Anna Jantar, Lady Pank, Krzysztof Krawczyk, Feel, czy Elektryczne Gitary. To tylko część długiej listy artystów goszczących w muzycznym arsenale zespołu. Gdy zjawiają się Grzeczni Chłopcy, dziewczęta mdleją, a chłopcy szaleją. Takiej fety Polska nie widziała, od brzegu Bałtyku aż po Tatry. Obywatelu! Nie czekaj! Szkoda życia! Nie zadzieraj nosa, nie rób takiej miny, nie udawaj Greka - baw się razem z nami!' 
    }

    return (
        <section className={`${style.wrapper}`} id='o-nas'>
            <div className={`${style.content_container}`}>
                <h2>PIOSENKI, <TypewriterAnimation content={about.title}/></h2>
                <p>{about.content}</p>
            </div>
        </section>
    )
}

export default About;