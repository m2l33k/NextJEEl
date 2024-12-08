import React from 'react';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
const Home = () => {
  return (
    <div>

      {/* Modal Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}

      {/* Hero Start */}
      <div className="container-fluid py-5 hero-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7 col-md-12">
              <h1 className="mb-3 text-primary">Empowering Women in STEM</h1>
              <h1 className="mb-5 display-1 text-white">Join IEEE WIE SESAME SAG</h1>
              <a href="#about" className="btn btn-primary px-4 py-3 px-md-5 me-4 btn-border-radius">Get Started</a>
              <a href="#about" className="btn btn-primary px-4 py-3 px-md-5 btn-border-radius">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* About Start */}
      <div id="about" className="container-fluid py-5 about bg-light">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="video border">
                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">About Us</h4>
              <h1 className="text-dark mb-4 display-5">Empowering the Next Generation of STEM Leaders</h1>
              <p className="text-dark mb-4">
                We are IEEE WIE SESAME SAG, an affinity group dedicated to inspiring and supporting women and youth in pursuing and excelling in STEM fields. We provide engaging workshops, school outreach programs, and collaborate with various associations to foster a passion for science, technology, engineering, and mathematics (STEM).
              </p>
              <div className="row mb-4">
                <div className="col-lg-6">
                  <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Empowering Women</h6>
                  <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Inclusive STEM Education</h6>
                  <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-secondary"></i>Workshops & Outreach</h6>
                </div>
                <div className="col-lg-6">
                  <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Innovative Learning</h6>
                  <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Collaboration with Associations</h6>
                  <h6><i className="fas fa-check-circle me-2 text-secondary"></i>STEM for Dyslexia Education</h6>
                </div>
              </div>
              <a href="#mission" className="btn btn-primary px-5 py-3 btn-border-radius">More Details</a>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Video */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default Home;
