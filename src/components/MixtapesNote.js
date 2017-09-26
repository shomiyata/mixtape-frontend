import React from 'react'
import { Message } from 'semantic-ui-react'

const MixtapesNote = (props) => (
  <Message
    id='mixtape-note'
    icon='mail outline'
    header=''
    content={props.content}
  />
)

export default MixtapesNote
