import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroContainer from './components/IntroContainer'
import ErrorContainer from './components/ErrorContainer'
import MixtapesContainer from './components/MixtapesContainer'
import { Link, Route } from 'react-router-dom'
// import Auth from './adapters/auth'

class App extends React.Component {



  render() {
    return (
      <div>
        <Route exact path='/' component={ IntroContainer }/>
        <Route exact path='/error' component={ ErrorContainer }/>
        <Route exact path='/login' component={ MixtapesContainer }/>
      </div>
    )
  }
}

export default App;

// background-image: url(/cassette.svg);
// <a href="http://localhost:3000/api/v1/user/2/mixtapes/new">Get it</a>
