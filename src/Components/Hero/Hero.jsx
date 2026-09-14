import "./Hero.css";
import banner from "../../assets/banner-stack.png";
function Hero() {
  return (
    <div className="hero" id="home">

      <div className="hero-content">

        <h1>
          Build Your Ideal
          <span className="gradient-text"> Development Stack </span>
       </h1>

        <p className="hero-description">
         Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Explore Technologies
          </button>

          <button className="secondary-button">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src={banner} alt="" />
       </div>

    </div>
  );
}

export default Hero;