import React from 'react'
import { About } from './About'
import { Skills } from './Skills'
import { Project } from './Project'
import Contact from './Contact'

const Home = () => {
    
    return (
        <>
        <div class="custom-shape-divider-top-1695273658">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
         <div className='container header-text imagess p-4'>
            <div className='p-4'>
            <p class="developer-title">Full Stack Developer</p>
        <h1 class="developer-name">Hi, <br/>I'm <span class="name-highlight">Sangesh Gupta</span></h1>
        <p class="developer-role">Web Developer</p>
            </div>
            </div>
            <br />
            <br />
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            
        </>
    )
}

export default Home