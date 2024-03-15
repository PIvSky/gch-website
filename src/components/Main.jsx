import style from '../styles/Main.module.css'
import photo from '../assets/photo/photo-main.webp'
import instagram_icon from '../assets/icons/instagram.png';
import facebook_icon from '../assets/icons/facebook.png';
import youtube_icon from '../assets/icons/youtube.png';

const Main = () => {
    return (
        <div className={`${style.photo_container}`}>
            <img 
                className={`${style.photo}`}
                src={photo}
                alt='main-photo'
            />
            <div className={`${style.icons_container}`}>
                <a href='https://www.instagram.com/grzecznichlopcy/'><img className={`${style.instagram_icon}`} src={instagram_icon} alt='sm-icon'/></a>
                <a href='https://www.facebook.com/grzecznichlopcyband'><img className={`${style.facebook_icon}`} src={facebook_icon} alt='sm-icon'/></a>
                <a href='https://www.youtube.com/@GChProductionPL'><img className={`${style.youtube_icon}`} src={youtube_icon} alt='sm-icon'/></a>
            </div>
            {/* TODO: change smaller size of photo - resize resolution */}
        </div>
    )
}

export default Main;