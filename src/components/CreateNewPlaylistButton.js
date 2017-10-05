import React from 'react'
import { Button } from 'semantic-ui-react'
import * as FormsActions from '../actions/forms'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const CreateNewPlaylistButton = (props) => {

  console.log('dispatch methods in CreateNewPlaylistButton', props)
  return(
    <Button onClick={props.toggleForm} >
      create playlist
    </Button>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FormsActions, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateNewPlaylistButton)
