import React, { useEffect } from 'react'
import "../scss/container.scss"
import Projects from "./Projects";
import Tecnologies from "./Tecnologies";
import Contact from "./Contact";
import BottomBar from "./BottomBar";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Container = () => {

    useEffect(() => {
        Aos.init({ 
            duration: 2000
        })
    }, [])

    return (
        <div className="container-principal" >
                <div  data-aos="fade-up"  className="container-secondary" id="initial">
                    <img className="container-imagen" src="https://storage.googleapis.com/www-paredro-com/uploads/2019/08/7ca4675c-bigstock-laptop-background-workspace-w-300812260.jpg" alt="Imagen Computadora"/>
                    <h3></h3>
                </div>
                {/* <Projects/> 
                <Tecnologies/>
                <Contact/>
                <BottomBar/> */}
        </div>
    )
}

export default Container
