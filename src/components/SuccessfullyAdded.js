import React from 'react'
import Auth from '../adapters/auth'
import Mixtapes from '../adapters/mixtapes'
import Tracks from '../adapters/tracks'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import * as MixtapesActions from '../actions/mixtapes'
import * as TracksActions from '../actions/tracks'
import { bindActionCreators } from 'redux'
import MixtapesListContainer from './MixtapesListContainer'


class SuccessfullyAdded extends React.Component {

  componentDidMount(){
      const code = Auth.decipherCode(this.props)
      const payload = { code: code }

      Auth.permission(payload)
        .then(res => {
          console.log('this is res.. am I gettinga nything?', res) //no!
          this.props.login(res.user)
          localStorage.setItem("token", res.jwt)
        })
        .then(res => Tracks.getTracks(localStorage.getItem("mixtapeId"), localStorage.getItem("token")))
        .then(res => this.props.setTracks(res))
        .then(res => {
          const body = { "name": localStorage.getItem("playlistName") }
        Mixtapes.buildPlaylist(body, localStorage.getItem("token"))
        })
        // .then(res => res.id )
       //create playlist
        //add all tracks to playlist
    }
    //Users should have mixtapes in state already... but if not come back here, fetch mixtapes and put them in state.
      // Mixtapes.getMixtapes(this.props.currentUser.id,localStorage.getItem("token"))

  render(){
    return(
      <div>
        werkin'
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('this is state in mapsStateToProps', state)
  return {
    currentUserId: state.auth.currentUserId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AuthActions, ...MixtapesActions, ...TracksActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessfullyAdded)
