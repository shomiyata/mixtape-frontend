import React from 'react'
import { Message } from 'semantic-ui-react'

const MixtapesLink = (props) => {
  return (
    <Message
      icon='hand spock'
      header='Your mixtape is now live!'
      content={`http://localhost:3001/mixtapes/listen?${props.url}`}
    />
  )
}

export default MixtapesLink
