import Circle from '../assets/images/circle.png';
import VrImage from '../assets/images/vr-image.png';
import '../styles/PortfolioPage.css';

function PortfolioPage() {
  return (
    <>
      {/* Product Section */}
      <section className="page-bg">
        <div className="vr-section">
          <div className="product-row">
            <h1 className="product-heading">Product <br /> Prototyping in VR</h1>
            <img src={Circle} alt="Circle Image" className="circle-img" />
          </div>
        </div>
      </section>

      {/* VR Section */}
      <section className="vr-wrapper">
        <div className="vr-media-section">
          {/* Big image with play icon */}
          <div className="main-video">
            <img src={VrImage} alt="VR Main Thumbnail" />
            <div className="play-icon"></div>
          </div>

          {/* Two smaller images */}
          <div className="side-thumbs">
            <img src={VrImage} alt="Thumb 1" />
            <img src={VrImage} alt="Thumb 2" />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="custom-section">
        <div className="content-div">
          <h1 className="custom-title">Title</h1>
          <p className="custom-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien at purus ullamcorper elementum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet lorem vel sapien tincidunt
            vulputate.
          </p>
        </div>
      </section>
    </>
  );
}

export default PortfolioPage;