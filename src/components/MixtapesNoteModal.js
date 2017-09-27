import React from 'react'
import { Router, Link, Route } from 'react-router-dom'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'

const MixtapesNoteModal = (props) => {

  return(
    <div className='main-button'>
      <Modal trigger={<Button id="note-button-center" size='large' name="message" color='pink'>message</Button>} basic size='small'>
        <Header icon='mail outline' content='A message for you..' />
        <Modal.Content>
          <p>{props.content}</p>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default MixtapesNoteModal
