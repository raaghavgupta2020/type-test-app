import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./Challenge.css"

const Challenge = ({selectedParagraph, timeStarted, timeRemaining ,words ,characters, wpm , testInfo ,handleUserInput}) => {
    return ( 
        <div className="challenge-container">
            <h1 className="challenge-header">
                Take a speed test here !
            </h1>
            <TestContainer 
                selectedParagraph={selectedParagraph}
                words = {words}
                characters={characters}
                wpm = {wpm}
                timeRemaining={timeRemaining}
                timeStarted={timeStarted}
                testInfo={testInfo}
                handleUserInput={handleUserInput}
            />
        </div>
    );
}
 
export default Challenge;