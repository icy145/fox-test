import React from "react"
import "../styles.css"
import icon from "../eth.png"
import logo from "../FOX_LOGO_Full.svg"
import goerliLogo from "../goerli.png"
import warningIcon from "../warning-icon.png"

function Bridge(){
    return (
     <div>
        <div className="wallet-button">
            <button className="button wallet-buttons">Connect wallet</button>
        </div>
        <div className="main-text">
            <h1>Fox Bridge</h1>
            <br></br>
            <a>Send tokens between Goerli Testnet and Fox Testnet.</a>
        </div>
        <div className="main">
            <div className="sub">
                <div className="small">
                    <input text="userInput" placeholder="0.00"></input>  
                    <div>
                    <button className="cypto-button">
                    <img src={icon} alt="eth logo" className="eth-logo"></img> 
                    <p>ETH</p>
                    </button>
                    </div>
                    <div>
                    <button className="all-button">
                    <img src={logo} alt="fox logo" className="fox-logo"></img> 
                    <p className="text-fox">Fox Testnet</p>
                    </button>
                    </div>
                </div>
            </div>
        <img className="arrow" src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/01_arrow_down-512.png" alt="arrow"></img>
            <div className="sub" style={{marginTop: "10px"}}> 
                <div className="small">
                    <input text="auto"></input>  
                    <div>
                    <button className="cypto-button">
                    <img src={icon} alt="eth logo" className="eth-logo"></img> 
                    <p>ETH</p>
                    </button>
                    </div>
                    <div>
                    <button className="all-button">
                    <img src={goerliLogo} alt="fox logo" className="goerli-logo"></img> 
                    <p className="text-goerli">Goerli Testnet</p>
                    </button>
                    </div>
                </div>
            </div>
            <br></br>
        <h2>Fees</h2>
        <button className="wallet-button-2">
            <img src={warningIcon} alt="warningIcon" className="warning-icon"></img>
            Click here to connect wallet</button>
        <button className="transfer-button">Send ETH to Fox Textnet</button>
        </div>
    </div>
    );
}

export default Bridge;