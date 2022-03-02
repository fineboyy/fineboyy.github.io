import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
        <section id="about" className="About about">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>About Me</h2>
            <p>I am Michael Amponsah. A full stack web developer and graphics designer. I love to build applications that solve real-world problems and  positively impact the lives of others. If you haven't guessed already, I am passionate about Tech, and hope to become an influential person in the tech space.</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4">
              <img src="assets/img/profile-img1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Web Developer &amp; Graphics Designer.</h3>
              <p className="fst-italic">
                I live in Tema, in the Greater Accra region of Ghana. However, I am available round the clock and would be open to remote job offers.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+233 55 841 0792</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tema, Ghana</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                     {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>maqweku@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>
                I am currently pursuing a Bachelor of Science degree in Business Administration (Business Information Technology) at the Kwame Nkrumah University of Science and Technology. I like to take up freelance jobs during my free time. I have worked for several clients and on multiple projects using the cutting-edge technologies of modern-day web development. If you ever need a quality and scalable application or website, I'm your guy.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    )
  }
}

export default About