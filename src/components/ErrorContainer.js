import React from 'react'
import { Button } from 'semantic-ui-react'
import { Router, Link, Route } from 'react-router-dom'

const ErrorContainer = () => {

  return(
  <div>
    <div className="main-header">uh oh, something went wrong!</div>
    <img src="cassette.svg"/>
    <Button size='massive' name="home" color='brown' as="a" href="http://localhost:3001/">back home</Button>
  </div>
  )
}

export default ErrorContainer
