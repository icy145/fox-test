import React from "react"
import "../styles.css"
import logo from "../FOX_LOGO_Full.svg"
function Navbar(){
        return (
          <div className="navbar-container">
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>
            <div className="menu">
                <a>Home</a>
                <a>Bridge</a>
            </div>
            <div className="button-container">
              <button>User Guide</button>
            </div>
          </div>
        );
    }

export default Navbar ;

