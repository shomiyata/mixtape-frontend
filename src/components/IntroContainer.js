import React from 'react'
import IntroButton from './IntroButton'
import Cassette from './Cassette'

const IntroContainer = () => {

  return(
  <div>
    <div className="main-header">mixtapes aren't dead.</div>
    <div className="cassette"><Cassette /></div>
    <IntroButton />
  </div>
  )
}

export default IntroContainer
