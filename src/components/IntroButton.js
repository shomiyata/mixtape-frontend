import React from 'react'
import { Router, Link, Route } from 'react-router-dom'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'
import InfoButton from './InfoButton'

const IntroButton = () => {

  return(
    <div className="main-button-center">
      <InfoButton />
      <Button size='massive' name="login" color='teal' as="a" href="http://localhost:3000/api/v1/login">log in</Button>
    </div>
  )
}

export default IntroButton
