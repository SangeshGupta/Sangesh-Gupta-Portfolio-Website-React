
import React from 'react'

export const Skills = () => {
    return (
        <>
            <div className='container 'style={{padding:'30px'}}> 
                <center style={{ color: 'white',}}><h1>Skills</h1></center><br></br>
                <div className='row skill'>
                    <div className='col-md-6 col-lg-6 col-sm-12 '>
                        <img src='images\html5-icon-png-1.jpg' className="img-fluid" alt='' width={'100%'}></img>
                    </div>

                    <div className='col-md-6 col-lg-6 col-sm-12 '>

                        <div className="accordion accordion-flush bg-black " id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header headers">
                                    <button className="accordion-button headers" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="#collapseOne" style={{backgroundColor:'black', color:'white'}}>
                                        Frontend Languages
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>jQuery</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button className="accordion-button headers" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{backgroundColor:'black', color:'white'}}>
                                        Frontend Framework
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                         <li>ReactJS</li>
                                         <li>Angular</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button className="accordion-button headers" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"style={{backgroundColor:'black', color:'white'}}>
                                    Backend Languages
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                        <li>Python</li>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button className="accordion-button headers" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" style={{backgroundColor:'black', color:'white'}}>
                                    Backend Framework
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                        <li>Django</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button className="accordion-button headers" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive"style={{backgroundColor:'black', color:'white'}}>
                                    Database
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
