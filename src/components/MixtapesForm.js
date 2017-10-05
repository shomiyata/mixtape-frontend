import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import MixtapesModal from './MixtapesModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MixtapesActions from '../actions/mixtapes'
import Mixtapes from '../adapters/mixtapes'
import MixtapesLink from './MixtapesLink'
import Loading from './Loading'
import { Route } from 'react-router-dom'
import CreateNewPlaylistButton from './CreateNewPlaylistButton'

class MixtapesForm extends React.Component{
  constructor(){
    super()

    this.state = {
      spotifyPlaylistId: '',
      playlistName: '',
      mixtapeName: '',
      senderName: '',
      mixtapeNote: '',
      sendEmail: false,
      recipientEmail: '',
      ownerUsername: '',
      playlistPicture: ''
    }
  }

  handleNameInput = (e) => this.setState({ mixtapeName: e.target.value })
  handleSenderNameInput = (e) => this.setState({ senderName: e.target.value })
  handleNoteInput = (e) => this.setState({ mixtapeNote: e.target.value })
  handleEmailInput = (e) => this.setState({ sendEmail: !this.state.sendEmail })
  handleRecipientEmailInput = (e) => this.setState({ recipientEmail: e.target.value })


  findPlaylistFromName = (inputName) => this.props.playlists.find(playlist => playlist.name === inputName)


  handlePlaylistClick = (e) => {
    const selectedPlaylist = this.findPlaylistFromName(e.target.innerHTML)
    this.setState({
      playlistName: selectedPlaylist.name,
      spotifyPlaylistId: selectedPlaylist.id,
      ownerUsername: selectedPlaylist.owner.id,
      playlistPicture: selectedPlaylist.images[0] ? selectedPlaylist.images[0].url : ''
    })
  }

  handleSubmit = (e) => {
    this.setState({ isLoading: true })
    const bodyToSubmit = {...this.state}
    this.props.handleMixtapeSubmit(this.state)
    Mixtapes.createPlaylist(this.props.currentUserId, localStorage.getItem("token"), this.state)
      .then(res => this.props.handleMixtapeSubmit(res))
      .then(res => this.setState({
        playlistName: '',
        mixtapeName: '',
        senderName: '',
        mixtapeNote: '',
        recipientEmail: '',
      }))
  }


  render(){
    const mailField = (
      <Form.Field>
        <label>Recipient email</label>
        <input placeholder='david@bowie.com' onChange={this.handleRecipientEmailInput} value={this.state.recipientEmail} />
      </Form.Field>
    )

    const urlMessage = this.props.submittedMixtape ? <MixtapesLink url={this.props.submittedMixtape.url} email={this.props.submittedMixtape.email_required} /> : ''

    return(
      <div>
        {urlMessage}
        <CreateNewPlaylistButton />
        <MixtapesModal handlePlaylistClick={this.handlePlaylistClick} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field >
            <br/>
            <label>Selected playlist*</label>
            <input placeholder='Select your playlist by clicking the button above' value={this.state.playlistName} required />
          </Form.Field>
          <Form.Field>
            <label>Mixtape name*</label>
            <input placeholder='e.g. Tunes 4 snuggles' onChange={this.handleNameInput} value={this.state.mixtapeName} required />
          </Form.Field>
          <Form.Field>
            <label>Sender name*</label>
            <input placeholder='e.g. Tom, Cuddlebear, SecretAdmirer17' onChange={this.handleSenderNameInput} value={this.state.senderName} required />
          </Form.Field>
          <Form.TextArea label='Note' placeholder='Send a note along with your mixtape!' onChange={this.handleNoteInput} value={this.state.mixtapeNote} />
          <Form.Field>
            <Checkbox label='Send mixtape via email' onChange={this.handleEmailInput} value={this.state.sendEmail} />
          </Form.Field>
            {this.state.sendEmail? mailField : ''}
            <Button type='submit' color="teal" onClick={this.handleSubmit}>wind it!</Button>
        </Form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('state state', state)
  return {
    currentUserId: state.auth.currentUserId,
    playlists: state.mixtapes.playlists,
    submittedMixtape: state.mixtapes.submittedMixtape
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MixtapesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MixtapesForm)
