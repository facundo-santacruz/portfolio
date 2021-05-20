import React from 'react'
import "../scss/principal.scss";
import imagen from "../imagen/FOTO.jpeg"
const Principal = () => {
    return (
        <div className="principal-principal">
            <div className="principal-secondary">
                <h1>FULL STACK WEB DEVELOPER</h1>
                <div className="container">
                    <div className="cara cara1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cara cara2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* <img className="imagen-principal" src={imagen} alt="imagen"/> */}
            </div>
        </div>
    )
}

export default Principal

