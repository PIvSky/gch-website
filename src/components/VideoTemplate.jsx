import style from '../styles/VideoTemplate.module.css';

const VideoTemplate = ({title, content, src, id}) => {
    return (
        <>
            <div className={`${style.video_wrapper}`}>
                <h1 className={`${style.title}`}>{title}</h1>
                <p className={`${style.content}`}>{content}</p>
                <div className={`${style.container}`}>
                        <iframe 
                            loading="lazy"
                            title={`Video of + ${title}`}
                            key={id}
                            width="300" 
                            height="300" 
                            src={src} allowfullscreen> 
                        </iframe>
                </div>
            </div>
        </>
    );
};

export default VideoTemplate;