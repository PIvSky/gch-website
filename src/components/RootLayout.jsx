// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Main from './Main'
import Music from './Music'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Slider from './Slider'

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            {/* <Main/>
            <About/>
            <Music/>
            <Slider/>
            <Contact/>
            <Footer/> */}
        </>
    )
}

export default RootLayout;