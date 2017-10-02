import React from 'react'
import Auth from '../adapters/auth'
import Mixtapes from '../adapters/mixtapes'
import Tracks from '../adapters/tracks'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import * as MixtapesActions from '../actions/mixtapes'
import { bindActionCreators } from 'redux'
import MixtapesListContainer from './MixtapesListContainer'
import Cassette from './Cassette'


class SuccessfullyAdded extends React.Component {
  constructor(){
    super()

    this.state = {
      result: 'loading'
    }
  }

  componentDidMount(){
      const code = Auth.decipherCode(this.props)
      const payload = { code: code }
      const body = {
        "mixtapeId": localStorage.getItem("mixtapeId"),
        "mixtapeName": localStorage.getItem("mixtapeName")
      }

      if(!localStorage.getItem("mixtapeName")){
        this.props.history.push("/")
      } else {
      Auth.permission(payload)
        .then(res => {
          this.props.login(res.user)
          localStorage.setItem("token", res.jwt)
          console.log('code is here', this.props.location.search)
        })
        .then(res => Mixtapes.buildPlaylist(body, localStorage.getItem("token")))
        .then(res => {
          if(Object.keys(res)[0] === "snapshot_id"){
            this.setState({ result: 'success' })
          } else {
            this.setState({ result: 'failure'})
          }
          localStorage.removeItem("mixtapeId")
          localStorage.removeItem("mixtape")
          localStorage.removeItem("mixtapeName")
          localStorage.removeItem("token")
        })
      }
    }

  render(){
    if(this.state.result === 'loading'){
      return(
        <div>
          <div className="main-header">loading!</div>
          <div id="cassette"><Cassette /></div>
        </div>
      )
    } else if(this.state.result === 'success'){
      return(
        <div>
          <div className="main-header">successfully added to your Spotify!</div>
          <div id="cassette"><Cassette /></div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="main-header">something went wrong..</div>
          <div id="cassette"><Cassette /></div>
        </div>
      )
    }
  }
}


function mapStateToProps(state) {
  console.log('this is state in mapsStateToProps', state)
  return {
    currentUserId: state.auth.currentUserId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AuthActions, ...MixtapesActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessfullyAdded)
