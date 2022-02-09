import './App.css';
import React, { Component } from  'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage.js'

class App extends Component {

  renderRoutes() {
    return (
      <div>
        <Routes>
         <Route
            path={'/'}
            component={LandingPage}
          />
        </Routes>
      </div>
    )
  }

render(){

  return (
    <div>
      <div className="App">
        <header className="App-header">
          Welcome to Eavisund
        </header>
      </div>
      <main className='main'>
        {this.renderRoutes()}
      </main>
    </div>
    
  );
}
  
}

export default App;
