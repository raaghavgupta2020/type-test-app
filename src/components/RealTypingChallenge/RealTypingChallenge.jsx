import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./RealTypingChallenge.css"

const RealChallenge = ({selectedParagraph, timeStarted, timeRemaining ,words ,characters, wpm , testInfo,handleUserInput}) => {
    // console.log(testInfo)
    return (
        <div className="real-challenge-container">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining>=10 ? timeRemaining : `0${timeRemaining}` }</p>
                <p className="timerr">{!timeStarted && "Start typing to start the test"}</p>
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="text-area test-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo , index)=>{
                                //2nd argument in map function is index
                              return (
                                // <div>{individualLetterInfo.testLetter} - {individualLetterInfo.status}</div> 
                                <TestLetter key={index} letterinfo={individualLetterInfo}/>
                              ) 
                            })
                        }
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea 
                        onChange={(e)=>{
                            handleUserInput(e.target.value)
                        }}
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