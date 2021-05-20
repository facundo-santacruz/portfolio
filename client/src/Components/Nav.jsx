import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../scss/nav.scss"
import BottomBar from './BottomBar'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Nav = () => {
    const [ flag, setFlag ] = useState(window.innerWidth)
    const [ collapsable, setCollapsable ] = useState(false)
    useEffect(() => {
        const handleResize = () => setFlag(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    });

    useEffect(() => {
        Aos.init({ 
            duration: 500
        })
    }, [])

    if(flag > 500){
        return (
            <div className="nav-principal">
                <div className="nav-secondary">
                    <Link className="link" to="/">Presentación</Link>
                    <Link className="link" to="/initial">Inicio</Link>
                    <Link className="link" to="/projects">Proyectos</Link>
                    <Link className="link" to="/tecnologies">Tecnologías</Link>
                    <Link className="link" to="/contact">Contacto</Link>  
                </div>
            </div>
        )

    }else{
            return (
                <div className="collapsable_principal">
                    <a className="collapsable_btn" onClick={() => setCollapsable(!collapsable)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </a>
                    {!collapsable ? null : 
                        <div  data-aos="fade-left" className="nav-principal" >
                            <div className="nav-secondary">
                                <Link onClick={() => setCollapsable(false)} className="link" to="/">Presentación</Link>
                                <Link onClick={() => setCollapsable(false)} className="link" to="/initial">Inicio</Link>
                                <Link onClick={() => setCollapsable(false)} className="link" to="/projects">Proyectos</Link>
                                <Link onClick={() => setCollapsable(false)} className="link" to="/tecnologies">Tecnologías</Link>
                                <Link onClick={() => setCollapsable(false)} className="link" to="/contact">Contacto</Link>  
                            </div>
                        </div>
                    }
                </div>
            
            )
    }
}

export default Nav
