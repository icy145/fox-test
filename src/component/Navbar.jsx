import React from "react"
import "../styles.css"
import logo from "../FOX_LOGO_Full.svg"
import {Link} from "react-router-dom"

function Navbar(){

  function log(){
    console.log("connect wallet")
  }
        return (
          <div className="navbar-container">
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>
            <div className="menu">
               <nav>
                
                    <Link style={{textDecoration:"none", color:"black"}} to="/">Home</Link>
                  
                    <Link style={{textDecoration:"none", color:"black"}} to="./Bridge">Bridge</Link>
                 
               </nav>
            </div>
            <div className="wallet-button">
              <button className="button wallet-buttons" onClick={log}>Connect wallet</button>
            </div>
          </div>
        );
    }

export default Navbar ;

