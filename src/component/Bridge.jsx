import React from "react"
import "../styles.css"
import icon from "../eth.png"
import logo from "../FOX_LOGO_Full.svg"
import goerliLogo from "../goerli.png"
import warningIcon from "../warning-icon.png"
import { useState } from "react"
import usdcIcon from "../usdc-logo.webp"
import arr from "../arrow.webp"

function Bridge(){
    const [Eth ,setEth] = useState(false);
    const [usdc, setUsdc] = useState(true);
    const [Eth2,setEth2] = useState(false);
    const [usdc2, setUsdc2] = useState(true);
    

function consolelogging(){
        console.log("ETH sent");
    }

function consolelogg(){
    console.log("guide")
}
    
    function changingState(){
    setEth(true);
    
    }
function changeUsdc(){
    setEth(false);
    setUsdc(false);   
}

function changeBack(){
    setEth(true);
}

function changeEth(){
    setEth(false);
    setUsdc(true);
}

function changingState2(){
    setEth2(true);
    
    }
function changeUsdc2(){
    setEth2(false);
    setUsdc2(false);   
}

function changeBack2(){
    setEth2(true);
}

function changeEth2(){
    setEth2(false);
    setUsdc2(true);
}
    
    return (
     <div>
        <div className="button-container">
            <button onClick={consolelogg}>User Guide</button>
        </div>
        <div className="main-text">
            <h1>Fox Bridge</h1>
            <br></br>
            <a>Send tokens between L1 Testnet and Fox Testnet.</a>
        </div>
        <div className="main">
        <div className="sub">
          <div className="small">
            <input text="userInput" placeholder="0.00"></input>
            <div>
              {Eth ? (
                <div>
                  <button onClick={changeEth} className="cypto-button">
                    <img src={icon} alt="eth logo" className="eth-logo"></img>
                    <p>ETH</p>
                  </button>

                  <button onClick={changeUsdc} className="cypto-button">
                    <img
                      src={usdcIcon}
                      alt="eth logo"
                      className="eth-logo"
                    ></img>
                    <p>USDC</p>
                  </button>
                </div>
              ) : usdc ? (
                <button onClick={changingState} className="cypto-button">
                  <img src={icon} alt="eth logo" className="eth-logo"></img>
                  <p>ETH</p>
                  <img src={arr} className="arrow-down-icon"></img>
                </button>
              ) : (
                <button onClick={changeBack} className="cypto-button">
                  <img src={usdcIcon} alt="eth logo" className="eth-logo"></img>
                  <p>USDC</p>
                </button>
              )}
            </div>
          </div>
          <div className="position-absolute">
            <button className="all-button">
              <img src={logo} alt="fox logo" className="fox-logo"></img>
              <p className="text-fox">Fox Testnet</p>
            </button>
          </div>
        </div>
        <img
          className="arrow"
          src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/01_arrow_down-512.png"
          alt="arrow"
        ></img>
        <div className="sub" style={{ marginTop: "10px" }}>
          <div className="small">
            <input text="auto"></input>
            <div>
              {usdc ? (
                <button onClick={changingState2} className="cypto-button">
                  <img src={icon} alt="eth logo" className="eth-logo"></img>
                  <p>ETH</p>
                </button>
              ) : (
                <button onClick={changeBack2} className="cypto-button">
                  <img src={usdcIcon} alt="eth logo" className="eth-logo"></img>
                  <p>USDC</p>
                </button>
              )}
            </div>
            <div>
              <button className="all-button">
                <img
                  src={goerliLogo}
                  alt="fox logo"
                  className="goerli-logo"
                ></img>
                <p className="text-goerli">L1 Testnet</p>
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <h2>Fees</h2>
        <button className="wallet-button-2">
          <img
            src={warningIcon}
            alt="warningIcon"
            className="warning-icon"
          ></img>
          Click here to connect wallet
        </button>
        <button onClick={consolelogging} className="transfer-button">
          Send ETH to Fox Textnet
        </button>

        </div>
    </div>
    );
}

export default Bridge;