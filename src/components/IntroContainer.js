import React from 'react'
import LoginButton from './LoginButton'
import Cassette from './Cassette'

class IntroContainer extends React.Component {

  componentDidMount(){
    if(localStorage.getItem('token')){
      window.location = "http://localhost:3001/login"
    }
  }

    render(){
    return(
    <div>
      <div className="main-header">save the mixtapes.</div>
      <div id="cassette"><Cassette /></div>
      <LoginButton />
    </div>
  )
  }
}

export default IntroContainer
