import axios from 'axios'
import React from 'react'
import '../scss/bottomBar.scss'
import MyPDF from './../imagen/CV Facundo Santacruz.pdf';
import imagen from './../imagen/index.jepg'
function BottomBar() {

    return (
        <div className="bottomBar-principal">
            <div className="bottomBar-secondary">
                <a href="https://github.com/facundo-santacruz"><img className="bottomBar-imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/facundo-santacruz-3aa8841a4/"><img className="bottomBar-imagen" src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/></a>
                <a  href={MyPDF} download="CV Facundo Santacruz.pdf"><img className="bottomBar-imagen" src={imagen} alt="Imagen CV"/></a>   
            </div>
            
        </div>
    )
}

export default BottomBar
