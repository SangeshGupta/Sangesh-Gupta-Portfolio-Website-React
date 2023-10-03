import React from 'react'

const Contact = () => {
  return (
    <div className='container contactus'>
      <section className="mb-5">
        <h1 className="h1-responsive font-weight-bold text-center my-4">Contact us</h1>
        <h4 className="text-center w-responsive mx-auto mb-5" style={{color:'red'}}>Do you have any questions? Please do not hesitate to contact us directly.</h4>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <input type="text" id="name" name="name" className="form-control" placeholder='Your name' />
                    <label htmlFor="name" className=""></label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form ">
                    <input type="email" id="email" name="email" className="form-control" placeholder='Email' />
                    <label htmlFor="email" className=""></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-3">
                  <label htmlFor="subject" className=""></label>
                    <input type="text" id="subject" name="subject" className="form-control" placeholder='subject' />
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                  <label htmlFor="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    
                  </div>
                </div>
              </div>
            </form> <br />
            <div className="text-center text-md-left">
            <input className="btn btn-primary" type="submit" value="Submit"/>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x" style={{ color: 'red' }}></i>
                <p>Mumbai, Maharashtra ,India</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x" style={{ color: 'green' }}></i>
                <p><a href='tel:+91 9082359457'>+91 9082359457</a></p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p><a href='mailto:Sangesh44@gmail.com'>Sangesh44@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact