
import "./Footer.css";
import logo from "../../assets/logo-text.png";

function Footer() {

return ( <footer className="footer" id="contact">


  <div className="footer-container">

    <div className="footer-brand">

      <div>
        
        <img src={logo} alt="" />

      </div>

      <p>
        Explore technologies, build your stack,
        and create the future of the web.
      </p>

      <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>

    </div>

    <div className="footer-links">

      <div>
        <h4>Product</h4>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">Features</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      <div>
        <h4>Legal</h4>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>

    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Dev Stack. All rights reserved.</p>

    <div>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>

</footer>


);
}

export default Footer;