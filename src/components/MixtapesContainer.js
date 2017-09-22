import React from 'react'
import Auth from '../adapters/auth'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import { bindActionCreators } from 'redux'

class MixtapesContainer extends React.Component {

  componentDidMount(){
    //if currentUser isn't defined...
    if(!this.props.currentUser){
    const code = Auth.decipherCode(this.props)
    const payload = { code: code }

    Auth.login(payload)
      .then(res => {
        this.props.login(res.user)
        localStorage.setItem("token", res.jwt)
      })
    }
  }


  render(){
    return(
      <div></div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MixtapesContainer)
