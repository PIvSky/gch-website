import style from '../styles/VideoTemplate.module.css';

const VideoTemplate = ({title, id, videoId, backgroundImage}) => {
    return (
        <>
            <div className={`${style.video_wrapper}`}>
                <h1 className={`${style.title}`}>{title}</h1>
                <div className={`${style.container}`}>
                        <lite-youtube
                            id={id} 
                            videoid={videoId}
                            params="controls=1"
                            style={backgroundImage}
                        />                        
                </div>
            </div>
        </>
    );
};

export default VideoTemplate;