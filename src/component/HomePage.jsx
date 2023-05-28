import React from "react"
import "../style.css"
import "../styles.css"

function HomePage(){
 return(
<div>   
    <div className="main-text">
       <h1 style={{marginTop:"60px",fontSize:"50px"}}>Fox Testnet</h1>
       <br></br>
       <a style={{fontSize:"20px"}}>Get start with our testnet.</a>
    </div>
    <div className="main-home">
        <div className="testnet-wallet">
            <h3>Configure wallet for our testnet</h3>
        </div>
        <hr style={{width: 857, color:"grey", marginTop:"8px", opacity:0.5}}/>
            <div>
                <p className="fox-rpc">Fox RPC</p>
                <input text="userInput" className="rpc"></input>
                <button className="home-wallet-buttons">Connect wallet</button>
            </div>
            <div>
               <p className="l1-rpc"> L1 RPC</p>
               <input text="userInput" className="rpc"></input>
               <button className="home-wallet-buttons">Connect wallet</button>
            </div>
    </div>
</div>
 );
}

export default HomePage;