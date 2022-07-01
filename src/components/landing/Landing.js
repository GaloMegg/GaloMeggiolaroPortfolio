const Landing = ({ name, description, occupation }) => {
    return (
        <>
            <article>
                <h1 className='landing__title' >{name}</h1>
            </article>
            <article >
                <h2 className='landing__occupation'>{occupation}</h2>
                <p className='landing__description'>{description}</p>
            </article>
        </>
    )
}

export default Landing      