import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css"

const TestContainer = ({selectedParagraph, timeStarted, timeRemaining ,words ,characters, wpm , testInfo,handleUserInput,handleRetryButton}) => {

    // const timeRemaining = 1;

    return (  
        <div className="test-container">
        {
            //conditional rendering 
            timeRemaining > 0 ? (
                <div className="typing-challenge-container">
                    <div className="typing-test">
                        <TypingChallengeContainer selectedParagraph={selectedParagraph}words = {words} characters={characters} wpm = {wpm} timeRemaining={timeRemaining} timeStarted={timeStarted} testInfo={testInfo} handleUserInput={handleUserInput}/>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="try-again-container">
                        <TryAgain words={words} characters={characters} wpm={wpm} handleRetryButton={handleRetryButton}/>
                    </h1>
                </div>
            )
        }
        </div>
    );
}
 
export default TestContainer;