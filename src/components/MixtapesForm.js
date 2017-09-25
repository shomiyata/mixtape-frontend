import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import MixtapesModal from './MixtapesModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MixtapesActions from '../actions/mixtapes'
import Mixtapes from '../adapters/mixtapes'

class MixtapesForm extends React.Component{
  constructor(){
    super()

    this.state = {
      spotifyPlaylistId: '',
      playlistName: '',
      mixtapeName: '',
      senderName: '',
      mixtapeNote: '',
      sendEmail: false
    }
  }

  handleNameInput = (e) => this.setState({ mixtapeName: e.target.value })
  handleSenderNameInput = (e) => this.setState({ senderName: e.target.value })
  handleNoteInput = (e) => this.setState({ mixtapeNote: e.target.value })
  handleEmailInput = (e) => this.setState({ sendEmail: !this.state.sendEmail })

  mailField = () => {
    if(this.state.sendEmail){
      return(
        <Form.Field>
          <label>Recipient email</label>
          <input placeholder='e.g. Tunes 4 snuggles' onChange={this.handleNameInput} value={this.state.mixtapeName} />
        </Form.Field>
      )
    }
  }

  handlePlaylistClick = (e) => {
    const selectedPlaylist = this.findPlaylistFromName(e.target.innerHTML)
    this.setState({
      playlistName: selectedPlaylist.name,
      spotifyPlaylistId: selectedPlaylist.id
    }, () => console.log('uhh did this work', this.state))
  }

  findPlaylistFromName = (inputName) => this.props.playlists.find(playlist => playlist.name === inputName)

  handleSubmit = () => {
    console.log(this.props)
    this.props.handleMixtapeSubmit(this.state)
    Mixtapes.createPlaylist(this.props.currentUserId, localStorage.getItem("token"), this.state)
    this.setState({
      playlistName: '',
      mixtapeName: '',
      senderName: '',
      mixtapeNote: '',
      sendEmail: false
    })

  }

  render(){
    const mailField = (
          <Form.Field>
            <label>Recipient email</label>
            <input placeholder='' onChange={this.handleNameInput} value={this.state.mixtapeName} />
          </Form.Field>
      )

    return(
      <div>
        <MixtapesModal handlePlaylistClick={this.handlePlaylistClick} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Selected Playlist*</label>
            <input placeholder='select your playlist by clicking the button above' value={this.state.playlistName} required />
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
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state state', state)
  return {
    currentUserId: state.auth.currentUserId,
    playlists: state.mixtapes.playlists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MixtapesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MixtapesForm)
