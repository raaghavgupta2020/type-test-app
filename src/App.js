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

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        {/* nav  */}
          <Nav/>
        {/* landing  */}
          <LandingPage/>
        {/* challenge  */}
          <Challenge/>
        {/* footer  */}
          <Footer/>
      </div>
    )
  }
}

export default App;
