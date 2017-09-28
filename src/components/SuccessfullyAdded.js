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
import Cassette from './Cassette'


class SuccessfullyAdded extends React.Component {

  componentDidMount(){
      const code = Auth.decipherCode(this.props)
      const payload = { code: code }

      Auth.permission(payload)
        .then(res => {
          this.props.login(res.user)
          localStorage.setItem("token", res.jwt)
        })
        .then(res => {
          const body = {
            "mixtapeId": localStorage.getItem("mixtapeId"),
            "playlistName": localStorage.getItem("playlistName")
          }
          Mixtapes.buildPlaylist(body, localStorage.getItem("token"))
        })
        .then(res => {
          localStorage.removeItem("mixtapeId")
          localStorage.removeItem("mixtape")
          localStorage.removeItem("playlistName")
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
        <div className="main-header">successfully added to your Spotify!</div>
        <div id="cassette"><Cassette /></div>
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
