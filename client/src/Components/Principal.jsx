import React from 'react'
import "../scss/principal.scss";
import imagen from "../imagen/FOTO.jpeg"
const Principal = () => {
    return (
        <div className="principal-principal">
            <div className="principal-secondary">
                <h1>FULL STACK WEB DEVELOPER</h1>
                <img className="imagen-principal" src={imagen} alt="imagen"/>
            </div>
        </div>
    )
}

export default Principal

