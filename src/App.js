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
          />
        {/* footer  */}
          <Footer/>
      </div>
    )
  }
}

export default App;
