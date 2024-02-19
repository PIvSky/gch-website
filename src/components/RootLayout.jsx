// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Main from './Main'
import Music from './Music'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Slider from './Slider'
import BackgroundGrain from './BackgroundGrain';

const RootLayout = () => {
    return (
        <>
            <BackgroundGrain>
                <Navbar/>
                <Main/>
                <About/>
                <Music/>
                <Slider/>
                <Contact/>
                <Footer/>
            </BackgroundGrain>
            
        </>
    )
}

export default RootLayout;