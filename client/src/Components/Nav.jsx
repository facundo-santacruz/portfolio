import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/nav.scss"

const Nav = () => {
    return (
        <div className="principal">
            <div className="secondary">
                <Link className="link" to="menu/projects">Proyectos</Link>
                <Link className="link" to="menu/tecnologies">Tecnologías</Link>
                <Link className="link" to="menu/about">Sobre mí</Link>  
            </div>
        </div>
    )
}

export default Nav
