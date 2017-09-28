import React from 'react'
import LoginButton from './LoginButton'
import Cassette from './Cassette'

const IntroContainer = () => {

  return(
  <div>
    <div className="main-header">save the mixtapes.</div>
    <div id="cassette"><Cassette /></div>
    <LoginButton />
  </div>
  )
}

export default IntroContainer
