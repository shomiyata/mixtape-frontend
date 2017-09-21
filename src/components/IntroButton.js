import React from 'react'
import { Button } from 'semantic-ui-react'
import { Router, Link, Route } from 'react-router-dom'

const IntroButton = () => {

  return(
  <div className='main-button'>
    <Button size='massive' name="info" color='grey' as="a" href="http://localhost:3000/api/v1/login/info">info</Button>
    <Button size='massive' name="login" color='brown' as="a" href="http://localhost:3000/api/v1/login">log in</Button>
  </div>
  )
}

export default IntroButton
