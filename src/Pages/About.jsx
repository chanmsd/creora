import "../styles/About.css";
import CreoraLogo from "../assets/images/CreoraLogo.png"; // Add this import
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { SECTION_URL } from "../api/apiUrl";

function About() {
  const [data, setData] = useState([]);

  const fetchData = async function () {
    const tag = "#about";
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
      <div className="about-orbitron-font">
        <section className="about-section-wrapper mt-5 mb-5">
          <div className="about-hero-box">
            {data
              ?.filter((value) => value.tag === "#about")
              .map((item, index) => (
                <React.Fragment key={item.id || index}>
                  <>
                    <h1 className="about-hero-heading mt-5">
                      <span>
                        We don't just build products — we craft realities
                      </span>
                      <span>that immerse, inspire, and innovate.</span>
                    </h1>
                    <p className="about-hero-subtext">
                      Let's create something immersive — schedule your
                      appointment today.
                    </p>
                  </>
                </React.Fragment>
              ))}
            <a href="#" className="about-hero-button mb-5">
              Book an Appointment
            </a>
          </div>
        </section>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-3 text-lg-start text-center mb-4 mb-lg-0">
              <img src={CreoraLogo} alt="Logo" className="img-fluid" />
            </div>
            <div className="col-lg-9">
              <h1 className="about-heading">ABOUT</h1>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel sapien at purus ullamcorper elementum. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nullam sit amet lorem vel sapien tincidunt vulputate.
                In eget massa ac justo elementum tincidunt. Aenean volutpat,
                neque sit amet lobortis laoreet, metus justo blandit tellus, nec
                lobortis neque leo eget urna. Curabitur at arcu sit amet ligula
                posuere feugiat vitae sed justo. Sed tempor vehicula magna, at
                laoreet eros sagittis ac.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Creative Devs Section */}
     
    <div className="about-creative-devs-container">
  <section className="about-creative-devs-section">
    <div className="about-creative-devs-card">
      <h2 className="about-creative-devs-title">Why Creative Devs?</h2>
      <p className="about-creative-devs-quote">
        "Because we don't just follow trends — we build the next reality."
      </p>
      <div className="about-creative-devs-divider"></div>

      <div className="about-creative-devs-input-wrapper">
        <button className="about-creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="about-creative-devs-fake-input">Innovative Thinking</div>
      </div>

      <div className="about-creative-devs-input-wrapper">
        <button className="about-creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="about-creative-devs-fake-input">Future-Ready Skills</div>
      </div>

      <div className="about-creative-devs-input-wrapper">
        <button className="about-creative-devs-icon-button">
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="about-creative-devs-fake-input">Collaborative Culture</div>
      </div>
    </div>
  </section>
</div>
    </>
  );
}

export default About;
