import React, { useEffect, useState } from 'react'
import btn from "./favicon.ico"
import validator from 'validator';
import emailjs from '@emailjs/browser';
import { VscDebugRestartFrame } from "react-icons/vsc";
const { REACT_APP_SID, REACT_APP_PK, REACT_APP_TID } = process.env;
const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [current, setCurrent] = useState("to")
    const [error, setError] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [send, setSend] = useState(false)
    const [resetInput, setResetInput] = useState("")
    const [delaySuccess, setDelaySuccess] = useState(false)
    const [delaySuccess1, setDelaySuccess1] = useState(false)
    const [delaySuccess2, setDelaySuccess2] = useState(false)
    const [delayReset, setDelayReset] = useState(false)

    useEffect(() => {
        if (send) {
            setTimeout(() => {
                setDelaySuccess(true)

            }, 1000);
            setTimeout(() => {
                setDelaySuccess1(true)

            }, 1500);
            setTimeout(() => {
                setDelaySuccess2(true)

            }, 1800);
            setTimeout(() => {
                setDelayReset(true)

            }, 1899);

        } else {
            setDelaySuccess(false)
            setDelaySuccess1(false)
            setDelaySuccess2(false)
            setDelayReset(false)
        }

    }, [send])

    const handleEmail = (e) => {
        setSend(false)
        if (validator.isEmail(e.target.value)) {
            setCurrent("email")
            setEmail(e.target.value);

            setError({ ...error, email: "" })
        } else {
            if (e.target.value.length == 0) {
                setEmail("");

                setError({ ...error, email: "Email requerido." })
                return
            }
            setError({ ...error, email: "Email no valido." })
        }
    }
    const handleName = (e) => {
        setSend(false)
        setCurrent("name")

        if (e.target.value) {
            setName(e.target.value);
            setError({ ...error, name: "" })
        } else {
            if (e.target.value.length == 0) {
                setName("");
                setError({ ...error, name: "Nombre requerido." })
                return
            }
            setError({ ...error, name: "No puede contener numeros o simbolos." })
        }
    }
    const handleMessage = (e) => {

        setSend(false)
        if (!validator.isEmpty(e.target.value)) {
            setCurrent("msg")

            setMessage(e.target.value);
            setError({ ...error, message: "" })
        } else {
            setMessage("");

            setError({ ...error, message: "No puede estar vacio. ¡Hablemos de algo!" })
        }
    }

    const resetForm = (id) => {
        document.getElementById(id).reset();
        setSend(false)
        setEmail("")
        setName("")
        setMessage("")
        setError({
            name: "",
            email: "",
            message: ""

        })
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
            setSend(true)
            setCurrent("sent")
            return
        };
        let err = {}
        if (name === "") {
            err.name = "El nombre no puede estar vacio."
        };
        if (email === "") {
            err.email = "El email no puede estar vacio."
        }
        if (message === "") {
            err.message = "El mensaje no puede estar vacio."
        };
        setError(err)
    }

    const resetType = (e) => {
        e.preventDefault()
        document.getElementById("reset").value = ""
        if (resetInput == "reset" || resetInput == `"reset"`) {
            setCurrent("to")
            setSend(false)
            setResetInput("")
        }
    }
    return (
        <>
            <div className="contactInfo">
                <div className="contactInfo__linuxbashexp"><p>wtscrackin@wtsCrackin:~</p> {send || <button className='btn' onClick={() => resetForm("form")}><VscDebugRestartFrame color='#d2d2d2' /></button>}</div>
                <div className='bash'>
                    {send
                        ?
                        <>
                            <p> <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ msg send -e</span></p>
                            {
                                <>
                                    {delaySuccess && <p className='delaySuccess'><span className='contactInfo__white'>sending msg -e galomeggiolarobul@gmail.com </span></p>}
                                    {delaySuccess1 && <p > <span className='contactInfo__white'>msg sent</span></p>}
                                    {delaySuccess2 && <p > <span className='contactInfo__white'>escribe "reset"  </span></p>}
                                    {delayReset && < p > <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ {resetInput} </span><span className={current == "sent" ? "active" : ""}></span></p>}
                                </>
                            }
                        </>
                        :
                        <>
                            {<p> <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ to galomeggiolarobul@gmail.com </span><span className={current == "to" ? "active" : ""}></span></p>}
                            {email && <p> <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ from {email} </span><span className={current == "email" ? "active" : ""}></span></p>}

                            {name && <p> <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ {name} </span><span className={current == "name" ? "active" : ""}></span></p>}

                            {message && <p> <span className='contactInfo__green'> wtscrackin@wtsCrackin </span> <span className='contactInfo__white'> : </span> <span className='contactInfo__blue'>  ~ </span> <span className='contactInfo__white'>$ msg {message} </span> <span className={current == "msg" ? "active" : ""}></span></p>}

                        </>
                    }
                </div>
            </div>
            {
                send
                    ?
                    <form id='form-reset' action="" onSubmit={resetType} className='contactForm' >
                        <div>
                            {delayReset && <input type="text" id="reset" name='reset' onChange={(e) => setResetInput(e.target.value.toLowerCase())} />}
                        </div>
                    </form>
                    :
                    <form id="form" className='contactForm' action="" onSubmit={handleSubmit}>
                        <div>
                            <input type="email" placeholder='Email' onChange={handleEmail} onBlur={handleEmail} />
                            {error.email && <p>{error.email}</p>}
                        </div>
                        <div>
                            <input type="text" placeholder='Nombre' onChange={handleName} onBlur={handleName} />
                            {error.name && <p>{error.name}</p>}
                        </div>

                        <div>
                            <textarea name="" id="" cols="30" rows="10" onChange={handleMessage} onBlur={handleMessage} ></textarea>
                            {error.message && <p>{error.message}</p>}
                        </div>

                        <button type='submit'>
                            <img src={btn} alt="" />
                        </button>
                    </form>
            }
        </>
    );
}

export default ContactForm