import React, { useState } from 'react'
import '../scss/contact.scss'
import { AiOutlineMail } from "react-icons/ai";
import axios from 'axios'
const Contact = () => {
    const [input, setInput] = useState({
        email: "",
        subject: "",
        text: ""
    }) 
    const [resp, setResp ] = useState({
        flag: false
    })

    const [error, setError] = useState({
        email: "Formato inválido",
        subject: "Debe contener más de 2 caracteres.",
        text: "Debe contener más de 2 caracteres."
    }) 

    const validation = (text) => {
        let errors= {}
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(text.email))
        if (!re.test(text.email)){
            errors.email = "Formato Invalido"
        }
        if(text.subject.length < 2){
            errors.subject = "Debe contener más de 2 caracteres."
        }  
        if (text.text.length < 2) {
            errors.text = "Debe contener más de 2 caracteres."
        }
        return errors
    }    
        
    
    const handleChange = (e) => {
        
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        setError(validation({
          ...input,
          [e.target.name]: e.target.value
        }));
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(Object.keys(error).length ===0)
        if(Object.keys(error).length ===0){
            const {text, subject, email} = input;
            try {
                const result = await axios.get(`http://localhost:3001/sendMsg?msj=${text}&subject=${subject}&email=${email}`)
                if (result){
                    setInput({
                        email:"",
                        text:"",
                        subject:""
                    })
                    setError({
                        email: "Formato inválido",
                        subject: "Debe contener más de 2 caracteres.",
                        text: "Debe contener más de 2 caracteres."
                    }) 
                    setResp({
                        send: `Mensaje enviado.`,
                        flag: false
                    })
                    document.getElementById("email").focus()
                }    
            } catch (error) {
                setResp({
                    send: `Mensaje no enviado.`,
                    error: " No se pudo enviar el mensaje."
                })
                console.log(error)
                
            }
        }else{
            setResp({
                flag: true
            })
            if(error.email){ document.getElementById("email").focus() }
            else if(error.subject) {document.getElementById("subject").focus()}
            else {document.getElementById("msg").focus()}

           
        }
        
    }
    return (
        <form id="contact" data-aos="fade-up" onSubmit={handleSubmit} className="contact-principal">
            <h1>Contacto</h1>
            <div className="contact-secondary">
                <div className="contact-third">
                    <label><AiOutlineMail></AiOutlineMail> Correo</label>
                    <input type="email" placeholder="Ingrese correo." onChange={handleChange} id="email" value={input.email} name="email"/>
                    {error.email && resp.flag ? <p className="error">{error.email}</p> : null}
                </div>
                <div className="contact-third">
                    <label>Asunto</label>
                    <input type="text" placeholder="Ingrese asunto." onChange={handleChange}  id="subject" value={input.subject} name="subject"/>
                    {error.subject && resp.flag ?  <p className="error">{error.subject}</p> : null}
                </div>
                <div className="contact-third">
                    <label>Mensaje</label>
                    <textarea rows="5" placeholder="Ingrese asunto." type="text" onChange={handleChange}  id="msg"value={input.text} name="text"/>
                    {error.text && resp.flag ? <p className="error">{error.text}</p> : null}
                </div>
                {!resp.send ? null : <p style={{color:"green"}}>&#9989;{resp.send}</p>}
                {!resp.error ? null : <p style={{color:"red"}}>&#10060;{resp.error}</p>}
                <button onClick={handleSubmit}>Enviar</button>
            </div>

            
        </form>
    )
}

export default Contact
