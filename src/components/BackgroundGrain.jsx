import style from '../styles/BackgroundGrain.module.css';

const BackgroundGrain = ({ children }) => {

    return (
        <div className={`${style.div}`}>
            <div className={`${style.grain}`}></div>
            {children}
        </div>
    );
};

export default BackgroundGrain;
