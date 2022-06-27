import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  // useselector languages to get the language

  return (
    <>
      <Link to="/">Home</Link>
      <div>
      <Link to="/aboutMe">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
      </div>
    </>
  )
}

export default Nav