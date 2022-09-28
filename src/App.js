import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Challenge from './components/Challenge/Challenge';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Landing/Landing';
import Nav from './components/Nav/nav';

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }
/**
 * Schema of Test Info:
 * [
 *    {
 *      testLetter: 'H',
 *      status: correct/incorrect/notAttempted
 *    }, {
 *      testLetter: 'e',
 *      status: correct/incorrect/notAttempted
 *    }
 * ]
 */
const TotalTime = 10;

const URL = "http://metaphorpsum.com/paragraphs/1/9"

class App extends React.Component{

  state={
    selectedParagraph : "",
    timeStarted: false,
    timeRemaining  :TotalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[],
  }

  componentDidMount() {
    fetch(URL)
    .then(res=>res.text())
    .then(data=>{
      this.setState({selectedParagraph : data})
      // console.log(data);
      const selectedParagraphArray = data.split("");
      // console.log(selectedParagraphArray)

      const testInfo = selectedParagraphArray.map(selectedLetter=>{
        return{ //for each letter in our selected array we will get an object having these 2 attributes
          testLetter : selectedLetter,
          status : "notAttempted",
        }
      })
      // console.log(testInfo)//this is an array of objects (each object has 2 attributes-> testLetter and status)
      this.setState({testInfo : testInfo});//or we can write as this.setState({testInfo})
    })

    
  }

  //we wanted to pass some info from child(RealTypingChallenge.js) to parent(App.js)
  handleUserInput= (inputValue) => {
    // console.log(inputValue);
    //as soon as this is fired we need to start running out timer 
    if(this.state.timeStarted === false) {
      this.startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters-1;

    /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

    //First case -> underflow case
    if(index<0){
      this.setState({
        testInfo:[
          {
            testLetter:this.state.testInfo[0].testLetter, 
            status:"notAttempted",
          },//WE WILL SPREAD OUT ALL THE ARRAY ELEMENTS THAT ARE PRESENT INSIDE THE STATE INSIDE THE NEW ARRAY THAT WE ARE CREATING 
          ...this.state.testInfo.slice(1)
          //basically it will put every element of the array in this setState 
        ]
      })

      return;
    }
    //2nd case -> overflow case
    if(index >= this.state.selectedParagraph.length){
      //we will still keep on changing the state of characters and words and we will simply return 
      this.setState({characters , words});
      return;
    }

    // Make a copy
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
        testInfo[index + 1].status = "notAttempted";

    // Check for mistake
    const isMistake = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
        testInfo,
        words,
        characters,
    });

  }


  handleRetryButton = () => {
    console.log("Retry called");
    
  }

  startTimer= ()=>{
    this.setState({timeStarted:true}) //this is for removing "Start typign to start the test" line
    const timer = setInterval(()=>{
      
      //We need to change the wpm as well
      

      //first argument is an anonymous function and 2nd argument is time 
      //we want to update our time remaning after every second
      if(this.state.timeRemaining > 0){
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm = timeSpent>0 
          ? (this.state.words / timeSpent) * TotalTime
          : 0;
        this.setState(
          {
            timeRemaining : this.state.timeRemaining-1 , 
            wpm  : parseInt(wpm)
          })
      }else{
        clearInterval(timer) //this stops the setaianterval fucntion
      }
    }, 1000) //this means 1 second

    //setTimeout runs the particular piece of code after that particular amount of time 
    //setInterval runs a piece of code again and again after that particular time interval 
  }

  render(){

    return(

      <div className='app'>
        {/* nav  */}
          <Nav/>
        {/* landing  */}
          <LandingPage/>
        {/* challenge  */}
          <Challenge
            selectedParagraph={this.state.selectedParagraph}
            words = {this.state.words}
            characters={this.state.characters}
            wpm = {this.state.wpm}
            timeRemaining={this.state.timeRemaining}
            timeStarted={this.state.timeStarted}
            testInfo={this.state.testInfo}
            handleUserInput={this.handleUserInput}
            handleRetryButton={this.handleRetryButton}
          />
        {/* footer  */}
          <Footer/>
      </div>
    )
  }
}

export default App;
