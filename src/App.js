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
import SuccessfullyAdded from './components/SuccessfullyAdded'
import Navbar from './components/Navbar'
import authorize from './components/Authorize'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div id="background-all">
        <Route path='/' component={ Navbar } />
        <Route exact path='/' component={ IntroContainer } />
        <Route exact path='/error' component={ ErrorContainer } />
        <Route path='/login' component={ authorize(MixtapesContainer) } />
        <Route exact path='/mixtapes/new' component ={ authorize(MixtapesFormContainer) } />
        <Route path='/mixtapes/listen' component={ MixtapesViewer } />
        <Route exact path='/success' component={ authorize(SuccessfullyAdded) } />
      </div>
    )
  }
}

export default App;
