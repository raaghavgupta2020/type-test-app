import React from "react";
import CDC from "../ChallengeDetailsCard/CDC";
import RealChallenge from "../RealTypingChallenge/RealTypingChallenge";

import "./TypingChallengeContainer.css"
const TypingChallengeContainer = ({selectedParagraph, timeStarted, timeRemaining ,words ,characters, wpm ,testInfo,handleUserInput}) => {
    return ( 
        <div className="typing-challenge">
            <div className="details-container">
                {/* <p>{words}</p> */}
                <CDC cardName="Words" cardValue={words}/>
                {/* <p>{characters}</p> */}
                <CDC cardName="Characters" cardValue={characters}/>
                {/* <p>{wpm}</p> */}
                <CDC cardName="Speed" cardValue={wpm}/>
            </div>
            <div className="real-challenge">
                <RealChallenge selectedParagraph={selectedParagraph}words = {words} characters={characters} wpm = {wpm} timeRemaining={timeRemaining} timeStarted={timeStarted} testInfo={testInfo} handleUserInput={handleUserInput}/>
            </div>
        </div>
    );
}
 
export default TypingChallengeContainer;