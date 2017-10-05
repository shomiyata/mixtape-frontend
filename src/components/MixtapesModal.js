import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal, List } from 'semantic-ui-react'
import Mixtapes from '../adapters/mixtapes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MixtapesActions from '../actions/mixtapes'

 class MixtapesModal extends React.Component {
   constructor(){
     super()
     this.state = { modalOpen: false }
   }

   handlePlaylistClick = (e) => {
     this.props.handlePlaylistClick(e)
     this.handleClose()
   }

   handleOpen = () => {
     this.setState({ modalOpen: true })
     Mixtapes.getPlaylists(this.props.currentUserId, localStorage.getItem("token"))
      .then(res => this.props.setPlaylists(res.items))
   }

   handleClose = () => this.setState({ modalOpen: false })

   render(){
     console.log('what is going on??', this.props.playlists)
     const playlistContent = this.props.playlists.map(playlist => {
        return (
          <List.Item>
            {playlist.images[0] ? <Image avatar src={playlist.images[0].url} /> : <Image avatar src="../../default_album_cover.jpg" />}
            <List.Content>
              <List.Header className="playlist-header" value={playlist.name} onClick={this.handlePlaylistClick}>{playlist.name}</List.Header>
              <a href={playlist.external_urls.spotify} target="_blank">Open playlist</a>
            </List.Content>
          </List.Item>
        )
      })

     return(
      <Modal
        trigger={<Button onClick={this.handleOpen}>your Spotify playlists</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
        <Modal.Header>select playlist</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <List animated verticalAlign='middle' size='huge'>
              {playlistContent}
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserId: state.auth.currentUserId,
    currentUsername: state.auth.currentUsername,
    playlists: state.mixtapes.playlists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MixtapesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MixtapesModal)
