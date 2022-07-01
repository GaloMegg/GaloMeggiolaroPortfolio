import React from 'react'
import profilePic from "./galomeggiolaroperfil.jpg"
const AboutMe = () => {
    return (
        <article className='aboutMe__article'>
            <img src={profilePic} alt="profilePicture" />
            <p>
                I'm a passionate Developer with a huge need of knowledge.
                Polyglot.
                I love mate and
                having it with my family.
                I found out that my passion was programming when I figured out that is undestanding a
                whole new language.
                But the difference is that speaking languages creates opotunities, but programming build
                them.
                I'm from Gualeguaychú, Entre Rios, Argentina. Living in CABA.
                I prefer winter and rainy days. Not only that, but I'm willing to learn any language.
                Currently, I'm finishing a Full Stack bootcamp!
            </p>
        </article>
    )
}

export default AboutMe