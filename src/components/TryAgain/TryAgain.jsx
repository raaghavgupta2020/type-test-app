import React from "react";
import "./TryAgain.css"

const TryAgain = ({words,characters,wpm,handleRetryButton}) => {
    return (
        <div className="try-again-cont">
            <h1 className="ta-header">Test results</h1>
            <div className="try-again-results">
                <p>Characters: {characters}</p>
                <p>Words: {words}</p>
                <p>Speed: {wpm} wpm</p>
            </div>
            <div className="buttons">
                <button onClick={()=>{
                    handleRetryButton();
                }} className="end-buttons first">Re-try</button>
                <button onClick={()=>{
                    window.open("https://www.facebook.com/");
                }} className="end-buttons second">Share</button>
                <button onClick={()=>{
                    window.open("https://twitter.com/");
                }} className="end-buttons third">Tweet</button>
            </div>
        </div>
    );
}
 
export default TryAgain;