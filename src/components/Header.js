import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='images\logo.jpg' class="mx-5" alt=''></img></a>
    <button class="navbar-toggler btn " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa-solid fa-bars" style={{color:'white'}} ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link px-5" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link px-5" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link px-5" to="skills">Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link px-5" to="projects">Projects</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link px-5" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
