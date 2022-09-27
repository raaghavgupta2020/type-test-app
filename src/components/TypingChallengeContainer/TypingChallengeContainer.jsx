import React from "react";
import CDC from "../ChallengeDetailsCard/CDC";
import RealChallenge from "../RealTypingChallenge/RealTypingChallenge";

import "./TypingChallengeContainer.css"
const TypingChallengeContainer = ({words,characters,wpm}) => {
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
                <RealChallenge selectedParagraph="Hello World Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World  Hello World   "/>
            </div>
        </div>
    );
}
 
export default TypingChallengeContainer;