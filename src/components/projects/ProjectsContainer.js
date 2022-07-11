import React from 'react'
import ProjectMap from './ProjectMap'
import hsk from './images/hsk.png'
import craftyAccs from './images/craftyaccs.png'
import craftySample from './images/craftysample.png'
import weatherDev from './images/weather.png'
const allProjects = [
    {
        id: 1,
        name: "HSK-Helper",
        img: hsk,
        description: {
            en: "Dynamic Flash-cards app, personal uses and for fun",
            es: " Aplicación de Flash-cards dinámica, para uso personal y por diversión",
        },
        linkRepo: "https://github.com/GaloMegg/HSK",
        linkDemo: "https://hskhelper.netlify.app/",
    },
    {
        id: 2,
        name: "Crafty Accs static",
        img: craftySample,
        description: {
            en: "Design, development and creation of a static product catalog, focused on styles, SEO, meta tags and page accessibility.Used technology: HTML5, SCSS, Bootstrap.",
            es: "Diseño y desarrollo de un catálogo de productos estático, enfocado en estilos, SEO, meta tags y accesibilidad.Usada tecnología: HTML5, SCSS, Bootstrap."
        },
        linkRepo: "https://github.com/GaloMegg/CraftyAccesorios-Meggiolaro",
        linkDemo: "https://galomegg.github.io/CraftyAccesorios-Meggiolaro/",
    },
    {
        id: 3,
        name: "Crafty Accs",
        img: craftyAccs,
        description: {
            en: " Design and development of an e-commerce for the company Crafty Accesorios, which I'm the cofounder. S.P.A.developed with React, React- Router(V - 6), Sass, Firebase.",
            es: "Diseño y desarrollo de un e-commerce para la empresa Crafty Accesorios, que soy el cofundador. S.P.A.desarrollado con React, React- Router(V - 6), Sass, Firebase."
        },
        linkRepo: "https://github.com/GaloMegg/CRAFTYACCS__Meggiolaro",
        linkDemo: "https://craftyaccs.netlify.app/",
    },
    {
        id: 4,
        name: "Weather-Dev",
        img: weatherDev,
        description: {
            en: " Creation and design of a weather web application, where the user's position is detected and the weather of their area is provided. It was done by querying API-rest and using the Geolocation API. Used technology: HTML5, CSS, SCSS, React.js.",
            es: "Creacion y diseño de una aplicacion web del clima. Donde el se detecta la posicion del usuario y se le proporciona el clima de su area. Se ha hecho usando la API-rest y la API-geolocation. Usado tecnologia: HTML5, CSS, SCSS, React.js."
        },
        linkRepo: "https://github.com/GaloMegg/weatherapp",
        linkDemo: "https://weatherdev.netlify.app/",
    }
]
const ProjectsContainer = () => {

    return (
        <section className='projects'>
            <ProjectMap allProjects={allProjects} />
        </section>
    )
}

export default ProjectsContainer