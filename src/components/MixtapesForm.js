import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import MixtapesModal from './MixtapesModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleMixtapeSubmit } from '../actions/mixtapes'

class MixtapesForm extends React.Component{
  constructor(){
    super()

    this.state = {
      playlistName: '',
      mixtapeName: '',
      mixtapeNote: '',
      sendEmail: false
    }
  }

  handleNameInput = (e) => this.setState({ mixtapeName: e.target.value })
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
    this.setState({ playlistName: e.target.innerHTML })
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
        <Form>
          {/* onSubmit=this.props.handleSubmit */}
          <Form.Field>
            <label>Selected Playlist*</label>
            <input value={this.state.playlistName} required />
          </Form.Field>
          <Form.Field>
            <label>Mixtape name*</label>
            <input placeholder='e.g. Tunes 4 snuggles' onChange={this.handleNameInput} value={this.state.mixtapeName} required />
          </Form.Field>
          <Form.Field>
            <label>Sender name*</label>
            <input placeholder='e.g. Tom, Cuddlebear, SecretAdmirer17' onChange={this.handleNameInput} value={this.state.mixtapeName} required />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(handleMixtapeSubmit, dispatch)
}

export default connect(null, mapDispatchToProps)(MixtapesForm)
