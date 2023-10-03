
import React from 'react'

export const About = () => {
    return (
        <>
            <div className='container ' style={{ padding: '50px ' }}>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 ">
                        <img src="images/about.png" className="img-fluid" width={'100%'} alt='' />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12  " style={{ color: 'white' }}>
                        <h1>About Me</h1>
                        <h3 style={{ color: 'red', fontStyle:"oblique" }}>Hello.</h3>
                        <p> Welcome to my personal portfolio website! I'm Sangesh Gupta, a 
                            full-stack developer, and this website is a window into my travels, 
                            abilities, and projects. As a devoted web developer, I've created
                             this section to introduce myself, demonstrate my skills, and share 
                             some of my recent work with you. Concerning my qualifications, 
                             I graduated with honors in Business Management Studies in 2019 
                             and gained valuable experience working as a document verifier for 
                             Sureprep Pvt. Ltd. for two years. I also recently completed a full-stack 
                             developer course at Ntech Global Solutions. With this unique blend of skills 
                             and experiences, I'm keen to make a career transition into the IT area as a 
                             professional or developer, where I can actively contribute and drive innovation.</p>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

