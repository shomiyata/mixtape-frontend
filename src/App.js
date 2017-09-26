import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroContainer from './components/IntroContainer'
import ErrorContainer from './components/ErrorContainer'
import MixtapesContainer from './components/MixtapesContainer'
import MixtapesForm from './components/MixtapesForm'
import MixtapesViewer from './components/MixtapesViewer'
import MixtapesFormContainer from './components/MixtapesFormContainer'
import MixtapesLink from './components/MixtapesLink'
import Cassette from './components/Cassette'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div id="background-all">
        <Route exact path='/cassette' component={ Cassette } />
        <Route exact path='/' component={ IntroContainer } />
        <Route exact path='/error' component={ ErrorContainer } />
        <Route exact path='/login' component={ MixtapesContainer } />
        <Route exact path='/mixtapes/new' component ={ MixtapesFormContainer } />
        <Route path='/mixtapes/listen' component={ MixtapesViewer } />
        <Route path='/mixtapes/link' component={ MixtapesLink } />
      </div>
    )
  }
}

export default App;

// id="background-all"
