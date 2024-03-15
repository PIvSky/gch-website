import style from '../styles/Music.module.css';
import VideoTemplate from "./VideoTemplate";

const video = [
    {
        title: "Pokolenie - KOMBII (Grzeczni Chłopcy Cover)",
        id: Math.random(),
        videoId: 'Si6HLWRcrKE',
        src: 'https://www.youtube.com/embed/Si6HLWRcrKE?si=PIRpI_E1h8JfKlpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        backgroundImageStyle: {
            backgroundImage: "url('https://i.ytimg.com/vi/Si6HLWRcrKE/hqdefault.jpg')"
        }
    },
    {
        title: "Grzeczni Chłopcy: Swingin' Boys- Za Tobą Pójdę Jak Na Bal (Krzysztof Krawczyk Cover)",
        id: Math.random(),
        videoId: '_d3rBDJxfrw',
        src: 'https://www.youtube.com/embed/_d3rBDJxfrw?si=Hn-N3rZBGvMB_qaT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        backgroundImageStyle: {
            backgroundImage: "url('https://i.ytimg.com/vi/_d3rBDJxfrw/hqdefault.jpg')"
        }
    }
];

const Music = () => {
    return (
        <div className={`${style.music}`} id='muzyka'>
            {video.map((data) => (
                <VideoTemplate
                key={data.id}
                id={data.id}
                title={data.title}
                videoId={data.videoId}
                src={data.src}
                backgroundImage={data.backgroundImageStyle}
            />
            ))}
        </div>
    )
}

export default Music;