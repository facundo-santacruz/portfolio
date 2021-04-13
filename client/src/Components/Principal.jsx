import React from 'react'
import "../scss/principal.scss";
import imagen from "../imagen/FOTO.jpeg"
const Principal = () => {
    return (
        <div className="principal-principal">
        
            <img className="imagen-principal" src={imagen} alt="imagen"/>
        </div>
    )
}

export default Principal
