import React from 'react'
import LoginButton from './LoginButton'
import Cassette from './Cassette'
import url from '../adapters/url'

class IntroContainer extends React.Component {

  componentDidMount(){
    if(localStorage.getItem('token')){
      window.location = `${url}/login`
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
