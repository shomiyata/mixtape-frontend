import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroContainer from './components/IntroContainer'
import ErrorContainer from './components/ErrorContainer'
import MixtapesContainer from './components/MixtapesContainer'
import MixtapesForm from './components/MixtapesForm'
import MixtapesViewer from './components/MixtapesViewer'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ IntroContainer } />
        <Route exact path='/error' component={ ErrorContainer } />
        <Route exact path='/login' component={ MixtapesContainer } />
        <Route exact path='/mixtapes/new' component ={ MixtapesForm } />
        <Route path='/mixtapes/listen' component={ MixtapesViewer } />
      </div>
    )
  }
}

export default App;
