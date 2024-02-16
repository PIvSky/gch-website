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
            <Main/>
            <About/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit sint eius, voluptatum vero aperiam rem quia perferendis. Temporibus nostrum omnis aliquam fuga numquam deserunt incidunt eius ut architecto soluta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem laborum libero dolorem temporibus ex nulla eum iste itaque dolores officia neque praesentium debitis architecto qui impedit perspiciatis dignissimos animi.
            <Music/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit sint eius, voluptatum vero aperiam rem quia perferendis. Temporibus nostrum omnis aliquam fuga numquam deserunt incidunt eius ut architecto soluta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem laborum libero dolorem temporibus ex nulla eum iste itaque dolores officia neque praesentium debitis architecto qui impedit perspiciatis dignissimos animi.
            <Slider/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit sint eius, voluptatum vero aperiam rem quia perferendis. Temporibus nostrum omnis aliquam fuga numquam deserunt incidunt eius ut architecto soluta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem laborum libero dolorem temporibus ex nulla eum iste itaque dolores officia neque praesentium debitis architecto qui impedit perspiciatis dignissimos animi.
            <Contact/>
            <Footer/>
        </>
    )
}

export default RootLayout;