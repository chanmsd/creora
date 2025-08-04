import BackImage from "../assets/images/backimage.jpg";
import Pic from "../assets/images/pic.jpg";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="portfolio-hero-section"
        style={{ "--background-image": `url(${BackImage})` }}
      >
        <h1 className="portfolio-hero-text">
          "BLENDING REALITIES, BUILDING EXPERIENCES."
        </h1>
      </div>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-title">Portfolio</div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
                   <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
                   <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
                   <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
               </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
                   <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
               </div>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
                   <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
               </div>
            </div>

            {/* Card 6 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card portfolio-card">
                <img src={Pic} alt="VR" className="portfolio-image" />
               
                  <div className="portfolio-text">
                    Product Prototyping in VR
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
