import React, { useState } from 'react'
import '../scss/contact.scss'
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
    const [input, setInput] = useState({
        email: "",
        asunto: "",
        text: ""
    }) 

    const [error, setError] = useState({
        email: "Formato inválido",
        asunto: "Debe contener más de 2 caracteres.",
        text: "Debe contener más de 2 caracteres."
    }) 

    const validation = (text) => {
        console.log(text);
        let errors= {}
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(input.email)){
            errors.email = "Formato Invalido"
        }
        if(text.asunto.length < 2){
            errors.asunto = "Debe contener más de 2 caracteres."
        }  
        if (text.text.length < 2) {
            errors.text = "Debe contener más de 2 caracteres."
        }
        return errors
    }    
        
    
    const handleChange = (e) => {
        // console.log(e.target.name);
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        setError(validation({
          ...input,
          [e.target.name]: e.target.value
        }));
        console.log(error)
    }
    

    const handleSubmit = () => {
        console.log("Hola")
    }
    
    return (
        <form onSubmit={handleSubmit} className="contact-principal">
            <h1>Contacto</h1>
            <div className="contact-secondary">
                <div className="contact-third">
                    <label><AiOutlineMail></AiOutlineMail> Correo</label>
                    <input type="email" placeholder="Ingrese correo." onChange={handleChange} value={input.email} name="email"/>
                </div>
                <div className="contact-third">
                    <label>Asunto</label>
                    <input type="text" placeholder="Ingrese asunto." onChange={handleChange} value={input.asunto} name="asunto"/>
                </div>
                <div className="contact-third">
                    <label>Mensaje</label>
                    <textarea rows="5" placeholder="Ingrese asunto." type="text" onChange={handleChange} value={input.text} name="text"/>
                </div>
                <button disabled={!error} onClick={handleSubmit}>Enviar</button>
            </div>

            
        </form>
    )
}

export default Contact
