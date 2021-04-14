import React from 'react'
import "../scss/container.scss"
import Projects from "./Projects";
import Tecnologies from "./Tecnologies";
import Contact from "./Contact";
import BottomBar from "./BottomBar";

const Container = () => {
    return (
        <div className="container-principal">
            
                <div className="container-secondary">
                    <img className="container-imagen" src="https://storage.googleapis.com/www-paredro-com/uploads/2019/08/7ca4675c-bigstock-laptop-background-workspace-w-300812260.jpg" alt="Imagen Computadora"/>
                    <h3></h3>
                </div>
                <Projects/> 
                <Tecnologies/>
                <Contact/>
                <BottomBar/>
            
        </div>
    )
}

export default Container
