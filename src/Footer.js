import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer id="footer">
        <div class="container">
          <h3>Michael Amponsah</h3>
          <p>I'd love to connect with you. Please reach out to me on the various social media platforms.</p>
          <div class="social-links">
            <a href="https://twitter.com/fiineboy_" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="https://instagram.com/fiineboy" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/amponsah-michael-b85812167/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
          <div class="copyright">
            &copy; Copyright <strong><span>Michael Amponsah</span></strong>. 2021 - All Rights Reserved
          </div>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: [license-url] -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ --> */}
            {/* <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> --> */}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer