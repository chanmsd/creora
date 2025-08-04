import BackImage from '../assets/images/backimage.jpg';
import sampleFrame from '../assets/images/sample.jpg';
import '../styles/Service.css';

function Service() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="service-hero-section"
        style={{ '--background-image': `url(${BackImage})` }}
      >
        <h1 className="service-hero-text">"BLENDING REALITIES, BUILDING EXPERIENCES."</h1>
      </div>

      {/* Development (Services) Section */}
      <section className="service-wrapper">
        <h2 className="services-section-title">OUR SERVICES</h2>
        <div className="services-section">
          <div className="services-card">
            <div className="row flex-column flex-lg-row align-items-start">
              <div className="col-lg-7 ps-lg-5 pt-4 pb-4">
                <h1 className="services-heading">Web design &<br />development</h1>
                <p className="services-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien at purus
                  ullamcorper elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas. Nullam sit amet lorem vel sapien tincidunt vulputate.
                </p>
              </div>
              <div className="col-lg-5 text-center pt-4 pe-lg-5">
                <img src={sampleFrame} alt="Web Design" className="services-image img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;