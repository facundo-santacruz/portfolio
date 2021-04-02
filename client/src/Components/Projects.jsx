import React from 'react'
import '../scss/projects.scss'
const Projects = () => {
    return (
        <div className="projects-principal">
            <h1>Proyectos</h1>
            <div className="projects-secondary">
                <span>Meli App</span>
                <div className="projects-card">
                    <div className="projects-img">
                        <img alt="Imagen Mercado Libre" src="https://d1ih8jugeo2m5m.cloudfront.net/2019/11/Ejemplo-4.png"></img>
                    </div>
                    <div className="projects-container">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia similique ipsam provident, aliquam esse aliquid quibusdam inventore libero est possimus nulla explicabo ipsum soluta omnis asperiores eius nisi. Omnis, placeat?</h5>
                        <p>Link: <a href="https://meli-app-facundo-santacruz.herokuapp.com/">¡Click Aquí!</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
