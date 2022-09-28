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

const TotalTime = 60;

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
    console.log(inputValue);
    //as soon as this is fired we need to start running out timer 
    if(this.state.timeStarted === false) {
      this.startTimer();
    }
  }

  startTimer= ()=>{
    this.setState({timeStarted:true}) //this is for removing "Start typign to start the test" line
    const timer = setInterval(()=>{
      //first argument is an anonymous function and 2nd argument is time 
      //we want to update our time remaning after every second
      if(this.state.timeRemaining > 0){
        this.setState({timeRemaining : this.state.timeRemaining-1 , })
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
          />
        {/* footer  */}
          <Footer/>
      </div>
    )
  }
}

export default App;
