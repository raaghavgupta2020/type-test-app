import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css"

const TestContainer = ({
    //props
    words,
    characters,
    wpm
}) => {
    return ( 
        
        <div className="test-container">
            <div className="typing-challenge-container">
                <div className="typing-test">
                    <TypingChallengeContainer words={words} characters={characters} wpm={wpm}/>
                </div>
            </div>
            {/* <div>
                <h1 className="try-again-container">
                    <TryAgain words={words} characters={characters} wpm={wpm}/>
                </h1>
            </div> */}
        </div>
    );
}
 
export default TestContainer;