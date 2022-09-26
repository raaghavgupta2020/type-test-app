import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./Challenge.css"

const Challenge = () => {
    return ( 
        <div className="challenge-container">
            <h1 className="challenge-header">
                Take a speed test here !
            </h1>
            <TestContainer/>
        </div>
    );
}
 
export default Challenge;