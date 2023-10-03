import React from 'react'

export const Project = () => {
  return (
    <div className='container'style={{padding:'30px'}}>
        <center style={{color:'white'}}><h1>Projects</h1></center><br /> <br></br>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div className="card h-100">
      <img src="images\Bootstrap.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Aspects-Fieldwork-Research-Website-Bootstrap</h5>
        <p className="card-text">The "Aspects Fieldwork & Research Website" project is a comprehensive web development endeavor aimed at establishing a dynamic online presence for our esteemed market research and consulting firm, Aspects Fieldwork & Research. This project embodies our commitment to delivering high-quality research and insights in a user-friendly digital format.</p>
      </div>
      <div className="card-footer">
      <button><a href='https://github.com/SangeshGupta/Aspects-Fieldwork-Research-Website-bootstrap'><small className="text-muted">
      <i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-link fa-beat-fade fa-sm"></i></small></a></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='images\Angular.png'className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Personal-Blog-Website-Tea-time-journal-Angular</h5>
        <p className="card-text">Created a personal blog website using HTML, Bootstrap, and Angular. The website includes sections for "Home," "About Me," and "Get in Touch." Implemented responsive design for various screen sizes and incorporated Angular forms for user interaction. Shared life hacks, self-care tips, and ideas to simplify life through engaging blog posts</p>
      </div>
      <div className="card-footer">
       <button><a href='https://github.com/SangeshGupta/Personal-Blog-Website-Tea-time-journal-angular'><small className="text-muted">
        <i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-link fa-beat-fade fa-sm"></i></small></a></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="images\Portfolio.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sangesh Gupta's Portfolio Website-React</h5>
        <p className="card-text">Built this website using React.js for the frontend, with React Router for smooth navigation. Bootstrap ensures a responsive and visually appealing design. The website's source code is hosted on GitHub for transparency and collaboration.</p>
      </div>
      <div className="card-footer">
       <button><a href='https://github.com/SangeshGupta/Personal-Blog-Website-Tea-time-journal-angular'><small className="text-muted">
        <i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-link fa-beat-fade fa-sm"></i></small></a></button>
      </div>
    </div>
  </div>
</div>
<br />
</div>
  )
}
