import React from 'react'
import { Message } from 'semantic-ui-react'
import MixtapesForm from './MixtapesForm'
import CreateNewPlaylistForm from './CreateNewPlaylistForm'
import { connect } from 'react-redux'

class MixtapesFormContainer extends React.Component{

  render(){
    return(
      <div>
        <div className="main-header">send a mixtape.</div>
        <Message id="mixtapes-form-container">
          <MixtapesForm />
        </Message>
          {/* {this.props.formOpen ? <Message id="playlist-form-container"><CreateNewPlaylistForm /></Message> : ''} */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    formOpen: state.forms.formOpen,
  }
}

export default connect(mapStateToProps)(MixtapesFormContainer)
