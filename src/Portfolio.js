import React, { Component } from 'react'

export class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Below are some of the projects that I have worked on.</p>
          </div>
  
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Website</li>
              </ul>
            </div>
          </div>
  
          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {/* <!-- Get it Done Black Mobile --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/get-it-done-black.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Get It Done</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/get-it-done-black-mobile.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Get it Done"><i class="bx bx-plus"></i></a>
                    <a href="https://heuristic-gates-f8d33f.netlify.app/" target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Link to live application"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Calendar App --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/calendar-app.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Calendar App</h4>
                  <p>Web Application</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/calendar-app.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Team App --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/team-app-big.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>TeamApp</h4>
                  <p>Web Application</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/team-app-big.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                    <a href="https://sleepy-forest-96008.herokuapp.com/home" target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Link to live app"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
   
            {/* <!-- Get it Done White Mobile --> */}
            {/* <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/get-it-done-white-mobile.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Get it Done</h4>
                  <p>Card</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/get-it-done-white-mobile.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div> --> */}
  
            {/* <!-- Just me --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/just-me.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Just Me</h4>
                  <p>Web Blog</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/just-me.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                    {/* <!-- <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> --> */}
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Travel Forest --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/travel-forest.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Travel Forest</h4>
                  <p>Website</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/travel-forest.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                    {/* <!-- <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- A Social Media --> */}
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/a-social-media.png" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>A Social Media</h4>
                  <p>App</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/a-social-media.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                    <a href="https://mysterious-wildwood-94677.herokuapp.com/feed" target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
  }
}

export default Portfolio