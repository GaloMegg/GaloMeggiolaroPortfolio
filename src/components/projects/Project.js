import React from 'react'

const Project = ({ name, img, description, linkRepo, linkDemo }) => {
    return (
        <article className='projects__item' >
            <img src={img} alt="" />
            <div>
                <p >{name}</p>
                <p >{description.en}</p>
            </div>
            <div>
                <a href={linkRepo}><button>Repository</button></a>
                <a href={linkDemo}><button>Demo</button></a>

            </div>

        </article>
    )
}

export default Project