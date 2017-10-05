import React from 'react'
import { Router, Link, Route } from 'react-router-dom'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'

const InfoButton = () => {

  return(
    <div className='main-button'>
      <Modal trigger={<Button size='massive' name="info" color='pink'>info</Button>}>
        <Header icon='help' content='how this works' />
        <Modal.Content>
          <List>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Create a spotify account if you don't have one (it's free!)</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Create your mixtape (playlist) on Spotify</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Log in to your spotify on our website<br/>*We have no access to your playlists unless you login</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Select your Spotify playlist OR create a playlist that you'd like to send and add a message<br/>*If you need help selecting a song, use the recommendation tool!</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Specify the recipient by email, or send them a direct link to the mixtape<br/>*Recipients do not need a Spotify account to listen to your mixtape</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Recipient can save the mixtape to their Spotify account if they have one!</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default InfoButton
