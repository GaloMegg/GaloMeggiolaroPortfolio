import React, { useState } from 'react'
import btn from "./favicon.ico"
import validator from 'validator';
import emailjs from '@emailjs/browser';
const { REACT_APP_SID, REACT_APP_PK, REACT_APP_TID } = process.env;

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState({})
    const [send, setSend] = useState(false)

    const handleEmail = (e) => {
        setSend(false)
        if (validator.isEmail(e.target.value)) {
            setEmail(e.target.value);
            setError({ ...error, email: "" })
        } else {
            setError({ ...error, email: "Email no valido." })
        }
    }
    const handleName = (e) => {
        setSend(false)
        if (validator.isAlpha(e.target.value)) {
            setName(e.target.value);
            setError({ ...error, name: "" })
        } else {
            setError({ ...error, name: "No puede contener numeros o simbolos." })
        }
    }
    const handleMessage = (e) => {
        setSend(false)
        if (!validator.isEmpty(e.target.value)) {
            setMessage(e.target.value);
            setError({ ...error, message: "" })
        } else {
            setError({ ...error, message: "No puede estar vacio. ¡Hablemos de algo!" })
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            emailjs.send(REACT_APP_SID, REACT_APP_TID, { name, email, message }, REACT_APP_PK)
            setName("")
            setEmail("")
            setMessage("")
            setError({})
            e.target.reset()
        }
    }
    return (
        <>
            <div className="contact-form"></div>
            {send ? <h1>Enviado</h1> : <div>
                {email && <p>From: {email}</p>}
                {email && <p>To: galomeggiolarobul@gmail.com</p>}
                {name && <p>{name}</p>}
                {message && <p>{message}</p>}
            </div>}
            <form className='contactForm' action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Nombre' onChange={handleName} />
                    {error.name && <p>{error.name}</p>}
                </div>
                <div>
                    <input type="email" placeholder='Email' onChange={handleEmail} />
                    {error.email && <p>{error.email}</p>}
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" onChange={handleMessage} onBlur={handleMessage} ></textarea>
                    {error.message && <p>{error.message}</p>}
                </div>

                <button type='submit'>
                    <img src={btn} alt="" />
                </button>
            </form>
        </>
    );
}

export default ContactForm