import style from '../styles/Music.module.css';
import VideoTemplate from "./VideoTemplate";

const video = [
    {
        title: "Pokolenie - KOMBII (Grzeczni Chłopcy Cover)",
        id: Math.random(),
        content: '',
        src: 'https://www.youtube.com/embed/Si6HLWRcrKE?si=PIRpI_E1h8JfKlpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    },
    {
        title: "Grzeczni Chłopcy: Swingin' Boys- Za Tobą Pójdę Jak Na Bal (Krzysztof Krawczyk Cover)",
        id: Math.random(),
        content: '',
        src: 'https://www.youtube.com/embed/_d3rBDJxfrw?si=Hn-N3rZBGvMB_qaT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    },
];

const Music = () => {
    return (
        <div className={`${style.music}`} id='muzyka'>
            {video.map((data) => (
                <VideoTemplate
                id={data.id}
                title={data.title}
                content={data.content}
                src={data.src}
            />
            ))}
        </div>
    )
}

export default Music;