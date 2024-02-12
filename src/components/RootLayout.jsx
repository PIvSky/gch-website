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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in sit repudiandae harum reprehenderit quia vel delectus suscipit architecto! Laborum hic pariatur quis error sapiente, veritatis laudantium ipsum. Iure, fuga.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur esse quae architecto quas repellat corrupti temporibus voluptatibus minus, quia, error, tempore odio dolores atque. Aperiam sed praesentium saepe excepturi voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit tempora accusamus sit assumenda officia est quasi voluptates quam eligendi dolore. Placeat ut incidunt aperiam debitis dignissimos, dolorem ad reiciendis vel?
            <About/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis fugit quam dignissimos quas? Inventore omnis adipisci labore, maiores fugit corrupti commodi fugiat autem. Repellat sequi eius eligendi quo iusto!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci expedita asperiores non voluptatum facilis incidunt, perspiciatis placeat iste amet, praesentium cupiditate quibusdam delectus! Veniam ab commodi laborum asperiores totam nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt ipsam tenetur, odit dignissimos iste repudiandae quisquam velit natus, expedita blanditiis consequatur saepe laudantium quos quis impedit. Accusantium, debitis quos!
            <Music/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio aspernatur in fugit vero totam, quisquam laboriosam optio ipsam quae culpa blanditiis natus cupiditate voluptatem iste? Earum iure sint iusto.
            <Slider/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit reprehenderit doloribus nam, incidunt, molestias magni porro quidem itaque quas consectetur iusto nemo amet qui explicabo magnam laboriosam tempora accusamus.
            <Contact/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae neque ratione, ab aspernatur debitis architecto nobis sit ullam delectus quam! Eligendi ipsum ex quis natus eveniet laboriosam sit consequatur suscipit?
            <Footer/>
        </>
    )
}

export default RootLayout;