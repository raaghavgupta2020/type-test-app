import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

        {/* challenge  */}

        {/* footer  */}
      </div>
    )
  }
}

export default App;
