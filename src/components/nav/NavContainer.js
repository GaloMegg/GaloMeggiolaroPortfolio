import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const NavContainer = () => {
    const [path, setPath] = useState(localStorage.getItem("link") || undefined)
    useEffect(() => {
        window.addEventListener("popstate", () => {
            setPath(window.location.pathname)
        })
    }, [path])
    return (
        <nav className='nav'>
            <Nav setPath={setPath} path={path} />
        </nav>
    )
}

export default NavContainer