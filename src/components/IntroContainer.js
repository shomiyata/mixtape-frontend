import React from 'react'
import IntroButton from './IntroButton'
import Cassette from './Cassette'

const IntroContainer = () => {

  return(
  <div>
    <div className="main-header">save the mixtapes.</div>
    <div id="cassette"><Cassette /></div>
    <IntroButton />
  </div>
  )
}

export default IntroContainer
