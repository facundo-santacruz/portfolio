import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/nav.scss"

const Nav = () => {
    return (
        <div className="nav-principal">
            <div className="nav-secondary">
                <a className="link" href="/menu#projects">Proyectos</a>
                <a className="link" href="/menu#tecnologies">Tecnologías</a>
                <a className="link" href="/menu#contact">Contacto</a>  
            </div>
        </div>
    )
}

export default Nav
