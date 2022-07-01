import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ path, setPath }) => {
  return (
    <>
      <Link onClick={() => { setPath("/") }} to="/">Home</Link>
      <Link className={path === "/aboutme" ? "selected" : ""} onClick={() => { setPath("/aboutme") }} to="/aboutme">About Me</Link>
      <Link className={path === "/contact" ? "selected" : ""} onClick={() => { setPath("/contact") }} to="/contact">Contact</Link>
      <Link className={path === "/projects" ? "selected" : ""} onClick={() => { setPath("/projects") }} to="/projects">Projects</Link>
    </>
  )
}

export default Nav