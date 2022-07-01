import React, { useEffect, useState } from 'react'

import Landing from './Landing'
const landingTitleData = {
    grettings: ["¡Hola!", "Hello!", "大家好", "Ciao!"],
    name: "Galo Meggiolaro",
    occupation: "Front-End Developer",
    description: "Amante del desarrollo de páginas web modernas y minimalistas. Gracias a mi curiosidad en la comunicación, y su diversas formas, me enamoré perdidamente de este mundo de 0's y 1's.",

}
const LandingContainer = () => {
    // const [title, settitle] = useState("")
    // const [stringI, setStringI] = useState(0)
    // const [finished, setFinished] = useState(false)
    // const [grettingsI, setGrettingsI] = useState(0)
    // useEffect(() => {
    //     let writing = setInterval(() => {
    //         if (finished) {
    //             // if (stringI == 0) { setFinished(false); setGrettingsI(grettingsI + 1) }
    //             setStringI(stringI - 1)
    //             settitle(landingTitleData.grettings[grettingsI].slice(0, stringI))
    //             if (stringI == 0) {
    //                 setFinished(false)
    //                 if (grettingsI == landingTitleData.grettings.length - 1) { setGrettingsI(0); setStringI(0); return }
    //                 setGrettingsI(grettingsI + 1)
    //                 setStringI(0)
    //             }
    //             return
    //         } else {
    //             if (stringI == landingTitleData?.grettings[grettingsI]?.length - 1) { setFinished(true); }
    //             setStringI(stringI + 1)
    //             settitle(landingTitleData.grettings[grettingsI].slice(0, stringI))

    //         }
    //     }, 300)
    //     return () => {
    //         clearInterval(writing)
    //     }
    // }, [finished, stringI])
    return (
        <section className='landing'>
            <div className='landing__gif'>

                {/* <p>{title}</p> */}
                <Landing name={landingTitleData.name} description={landingTitleData.description} occupation={landingTitleData.occupation} />
            </div>
        </section>
    )
}

export default LandingContainer