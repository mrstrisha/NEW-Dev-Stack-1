
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import "./NavBarStyle.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">
<button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
         <FiAlignJustify />
        </button>

     
        <a href="#" className="brand">
          <span className="brand-icon">{"</>"}</span>
          <span className="gradient-text">Dev Stack</span>
        </a>

        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>

    
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;