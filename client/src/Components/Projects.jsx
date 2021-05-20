import React from 'react'
import '../scss/projects.scss'
import video from '../imagen/meli001.webm'
const Projects = () => {
    return (
        <div data-aos-anchor="projects-principal" data-aos="fade-up"  data-aos-anchor-position = "top-center"data-aos="fade-up" className="projects-principal" id="projects">
            <h1>Proyectos</h1>
            <div className="projects-secondary">
                <h3>Meli App</h3>
                <div className="projects-card">
                        <video className="projects-img" controls>
                            <source src={video} type='video/webm; codecs="vp8, vorbis"' />
                            Video tag not supported. Download the video 
                        </video>
                    <div className="projects-container">
                        <h5>Proyecto desarrollado durante el Bootcamp Henry, el cual permite buscar productos según categoría o mediante producto, conteniendo filtros para hacer más exahustiva la búsqueda.</h5>
                        <button><a href="https://meli-app-facundo-santacruz.herokuapp.com/">Ir al proyecto</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Projects
