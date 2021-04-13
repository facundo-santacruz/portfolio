import React from 'react'
import '../scss/projects.scss'
const Projects = () => {
    return (
        <div className="projects-principal" id="projects">
            <h1>Proyectos</h1>
            <div className="projects-secondary">
                <span>Meli App</span>
                <div className="projects-card">
                    <div className="projects-img">
                        <img alt="Imagen Mercado Libre" src="https://d1ih8jugeo2m5m.cloudfront.net/2019/11/Ejemplo-4.png"></img>
                    </div>
                    <div className="projects-container">
                        <h5>Proyecto desarrollado durante el Bootcamp Henry, el cual permite buscar productos según categoría o mediante producto, conteniendo filtros para hacermás exahustiva la búsqueda.</h5>
                        <button><a href="https://meli-app-facundo-santacruz.herokuapp.com/">Ir al proyecto</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
