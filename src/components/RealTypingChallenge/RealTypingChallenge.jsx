import React from "react";
import "./RealTypingChallenge.css"

const RealChallenge = ({selectedParagraph, timeStarted, timeRemaining ,words ,characters, wpm}) => {
    return (
        <div className="real-challenge-container">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining>=10 ? timeRemaining : `0${timeRemaining}` }</p>
                <p className="timerr">{!timeStarted && "Start typing to start the test"}</p>
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="text-area test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea 
                        placeholder="Start typing here"
                        className="textarea"    
                    >
                    </textarea>
                </div>
            </div>
        </div>

    );
}
 
export default RealChallenge;