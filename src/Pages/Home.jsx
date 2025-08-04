import Frame from "../assets/images/Frame.png";
import Frame12 from "../assets/images/Frame12.png";
import Vector from "../assets/images/Vector.png";
import CreoraLogo from "../assets/images/CreoraLogo.png"
import "../styles/Home.css";
import React, { useEffect, useState } from "react";
import { BASE_URL, SECTION_URL } from "../api/apiUrl";
import axiosInstance from "../api/axiosInstance";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async function () {
    const tag = "#home";
    let response = await axiosInstance.get(
      `${SECTION_URL}?tag=${encodeURIComponent(tag)}`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
     <section className="hero-section">
  <div className="container-fluid py-0 mt-4 mb-4">
    <div className="content-wrapper mt-5 mb-5">
      <div className="hero-text">
        <div className="line-center">Welcome to</div>
        <div className="line-right">Creora</div>
        <div className="line-center">Developers</div>
      </div>
    </div>
  </div>
</section>


      <section className="features-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card card-1">
                <h3 className="card-title">Immersive Storytelling</h3>
                <p className="card-subtitle">
                  We turn visions into interactive narratives.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card card-2">
                <h3 className="card-title">Product Prototyping in VR</h3>
                <p className="card-subtitle">
                  Bring ideas to life with real-time simulations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card card-3">
                <h3 className="card-title">User-Centric Design</h3>
                <p className="card-subtitle">
                  Crafting intuitive experiences with real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h1 className="section-title">Products</h1>
        <div className="content-wrapper">
          <div className="product-glass-wrapper">
            <div className="row g-4">
              {data
                ?.filter((value) => value.tag === "#product")
                .map((item, index) => (
                  <React.Fragment key={item.id || index}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-6">
                          <div className="product-box">
                            <img
                              src={`${BASE_URL}/storage/images/${item.image}`}
                              alt={item.title || "Product Image"}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="product-box glass">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6">
                          <div className="product-box glass">
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="product-box">
                            <img
                              src={`${BASE_URL}/storage/images/${item.image}`}
                              alt={item.title || "Product Image"}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="service-wrapper">
        <h2 className="services-title">OUR SERVICES</h2>
        <div className="services-section">
          {data
            ?.filter((value) => value.tag === "#our_service")
            ?.map((item, index) => (
              <div className="services-card" key={item.id || index}>
                <div className="row flex-column flex-lg-row align-items-start">
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-lg-7 ps-lg-5 pt-4 pb-4">
                        <h1 className="services-heading">{item.title}</h1>
                        <p className="services-description">
                          {item.description}
                        </p>
                      </div>
                      <div className="col-lg-5 text-center pt-4 pe-lg-5">
                        <img
                          src={`${BASE_URL}/storage/images/${item.image}`}
                          alt={item.title}
                          className="services-image img-fluid"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-lg-5 text-center pt-4 ps-lg-5">
                        <img
                          src={`${BASE_URL}/storage/images/${item.image}`}
                          alt={item.title}
                          className="services-image img-fluid"
                        />
                      </div>
                      <div className="col-lg-7 pe-lg-5 pt-4 pb-4">
                        <h1 className="services-heading">{item.title}</h1>
                        <p className="services-description">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

    <div className="creative-devs-container">
  <section className="creative-devs-section">
    <div className="creative-devs-card">
      <h2 className="creative-devs-title">Why Creative Devs?</h2>
      <p className="creative-devs-quote">
        "Because we don't just follow trends — we build the next reality."
      </p>
      <div className="creative-devs-divider"></div>

      <div className="creative-devs-input-wrapper">
        <button className="creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="creative-devs-fake-input">Innovative Thinking</div>
      </div>

      <div className="creative-devs-input-wrapper">
        <button className="creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="creative-devs-fake-input">Future-Ready Skills</div>
      </div>

      <div className="creative-devs-input-wrapper">
        <button className="creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="creative-devs-fake-input">Collaborative Culture</div>
      </div>
    </div>
  </section>
</div>

      <section className="experience-section">
        <div className="container-fluid text-center">
          <h2 className="experience-title">Step into the Experience</h2>
          <p className="experience-subtitle mb-5">
            See how we bring your ideas to life with AR, VR, and Mixed Reality.
            <br />
            From holographic products to immersive training rooms
          </p>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <input type="checkbox" id="play-toggle" hidden />
          <div className="poster-overlay">
            <img src={Frame12} alt="Video Thumbnail" className="poster-image" />
          </div>
          <label htmlFor="play-toggle" className="play-button">
            <img src={Vector} alt="Play" className="play-icon" />
          </label>
          <video
            id="heroVideo"
            className="video-element"
            muted
            playsInline
            controls
          >
             <source src={"/video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="creora-section">
        <div className="container-fluid text-center">
          <div className="creora-content">
            <div className="creora-header">
              <img src={CreoraLogo} alt="creora-logo" className="creora-logo" />
              <h2 className="creora-title">Creora</h2>
            </div>
            <a href="#" className="book-appointment-btn">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
