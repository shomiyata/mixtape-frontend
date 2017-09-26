import React from 'react'
import { Router, Link, Route } from 'react-router-dom'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'

const InfoButton = () => {

  return(
    <div className='main-button'>
      <Modal trigger={<Button size='massive' name="info" color='pink'>info</Button>} basic size='small'>
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
                <List.Header>Log in to your spotify on our website</List.Header>
                <List.Description>
                  *We have no access to your playlists unless you login
                </List.Description>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Select the playlist you'd like to send and add a small note if you'd like to</List.Header>
              </List.Content>
            </List.Item><br/>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Specify the recipient by email, or send them a direct link to the mixtape</List.Header>
                <List.Description>
                  *Recipients do not need a Spotify account to listen to your mixtape
                </List.Description>
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
