import React from 'react'

import Landing from './Landing'
const landingTitleData = {
    grettings: ["¡Hola!", "Hello!", "大家好", "Ciao!"],
    name: "Galo Meggiolaro",
    occupation: "Front-End Developer",
    description: "Amante del desarrollo de páginas web modernas y minimalistas. Gracias a mi curiosidad en la comunicación, y su diversas formas, me enamoré perdidamente de este mundo de 0's y 1's.",
}
const LandingContainer = () => {
    return (
        <section className='landing'>
            <div className='landing__gif'>
                <Landing name={landingTitleData.name} description={landingTitleData.description} occupation={landingTitleData.occupation} />
            </div>
        </section>
    )
}

export default LandingContainer