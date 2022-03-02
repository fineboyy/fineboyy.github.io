import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Michael Amponsah</h1>
        <p>I'm a <span class="typed" data-typed-items="Full Stack Web Developer, Graphics Designer, Mobile App Developer"></span></p>
        <div class="social-links">
          <a href="https://twitter.com/fiineboy_" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://instagram.com/fiineboy" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/amponsah-michael-b85812167/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
    )
  }
}

export default Home