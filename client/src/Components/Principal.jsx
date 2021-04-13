import React from 'react'
import "../scss/principal.scss";
import imagen from "../imagen/FOTO.jpeg"
const Principal = () => {
    return (
        <div className="container-principal">
        
            <img className="imagen-container" src={imagen} alt="imagen"/>
        </div>
    )
}

export default Principal
