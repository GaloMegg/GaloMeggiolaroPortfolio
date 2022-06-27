import React, { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const Landing = () => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) || true)
    const handleClick = () => {
        localStorage.removeItem('isDark')
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    return (
        <>
            <article>
                <h1 className='landing__title'>Galo Meggiolaro</h1>
            </article>
            {isDark ? <BsFillMoonFill color="white" onClick={handleClick} /> : <BsFillSunFill color='white' onClick={handleClick} />}
            <article >
                <h2 className='landing__occupation'>Front-End Developer</h2>
                <p className='landing__description'>Capacitado e inclinado al desarrollo de páginas web modernas y minimalistas. Gracias a mi curiosidad en la comunicación, y su diversas formas, me enamoré perdidamente de este mundo de 0's y 1's.
                </p>
            </article>
        </>
    )
}

export default Landing