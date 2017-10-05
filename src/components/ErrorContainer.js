import React from 'react'
import { Button } from 'semantic-ui-react'
import { Router, Link, Route } from 'react-router-dom'
import frontUrl from '../adapters/frontUrl'

const ErrorContainer = () => {

  return(
  <div>
    <div className="main-header">uh oh, something went wrong!</div>
    <img src="cassette.svg"/>
    <Button size='massive' name="home" color='brown' as="a" href={frontUrl}>back home</Button>
  </div>
  )
}

export default ErrorContainer
