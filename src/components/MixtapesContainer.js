import React from 'react'
import Auth from '../adapters/auth'
import Mixtapes from '../adapters/mixtapes'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import * as MixtapesActions from '../actions/mixtapes'
import { bindActionCreators } from 'redux'
import MixtapesListContainer from './MixtapesListContainer'


class MixtapesContainer extends React.Component {

  componentDidMount(){
    console.log('props from mixtapes container', this.props)
    if(!this.props.currentUserId){
      const code = Auth.decipherCode(this.props)
      const payload = { code: code }

      Auth.login(payload)
        .then(res => {
          this.props.login(res.user)
          localStorage.setItem("token", res.jwt)
        })
        .then(res => Mixtapes.getMixtapes(this.props.currentUserId, localStorage.getItem("token")))
        .then(res => this.props.setMixtapes(res))
        }
    }
    //Users should have mixtapes in state already... but if not come back here, fetch mixtapes and put them in state.
      // Mixtapes.getMixtapes(this.props.currentUser.id,localStorage.getItem("token"))

  render(){
    console.log('did this work or what?', this.props)
    return(
      <div>
        <MixtapesListContainer />
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('this is state in mapsStateToProps', state)
  return {
    currentUserId: state.auth.currentUserId,
    currentUsername: state.auth.currentUsername,
    loggedIn: state.auth.loggedIn,
    mixtapes: state.mixtapes.mixtapes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AuthActions, ...MixtapesActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MixtapesContainer)
