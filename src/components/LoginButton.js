import React from 'react'
import { Router, Link, Route } from 'react-router-dom'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import InfoButton from './InfoButton'
import * as AuthActions from '../actions/auth'
import { bindActionCreators } from 'redux'

class LoginButton extends React.Component {

  handleButton = () => {
    this.props.isLoading(true)
    localStorage.setItem("loading", true)
    window.location = "http://localhost:3000/api/v1/login"
  }


  render(){
    return(
      <div className="main-button-center">
        <InfoButton />
        <Button size='massive' name="login" color='teal' as="a" onClick={this.handleButton}>log in</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    loggedIn: state.auth.loggedIn,
    currentUserId: state.auth.currentUserId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
