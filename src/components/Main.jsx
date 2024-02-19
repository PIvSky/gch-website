import style from '../styles/Main.module.css'
import photo from '../assets/photo/photo-main.webp'

const Main = () => {
    return (
        <div className={`${style.photo_container}`}>
            <img 
                className={`${style.photo}`}
                src={photo}
            />
            {/* TODO: change smaller size of photo - resize resolution */}
        </div>
    )
}

export default Main;