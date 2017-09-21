import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroContainer from './components/IntroContainer'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ IntroContainer }/>
      </div>
    )
  }
}

export default App;

// background-image: url(/cassette.svg);
// <a href="http://localhost:3000/api/v1/user/2/mixtapes/new">Get it</a>
