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
  }

  componentDidMount() {
    fetch(URL).then(res=>res.text()).then(data=>{
      this.setState({selectedParagraph : data})
      // console.log(data);
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
          />
        {/* footer  */}
          <Footer/>
      </div>
    )
  }
}

export default App;
