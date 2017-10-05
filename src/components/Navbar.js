import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Router } from 'react-router-dom';
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import { bindActionCreators } from 'redux'
import url from '../adapters/url'

class Navbar extends Component {
  state = { activeItem: 'YOUR MIXTAPES' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(name === 'YOUR MIXTAPES'){
      this.props.history.push('/login')
    }
    else if(name === 'NEW MIXTAPE'){
      this.props.history.push('/mixtapes/new')
    } else {
      this.props.history.push('/')
      this.props.logout()
    }
  }

  handleLoginClick = () => {
    this.props.isLoading(true)
    localStorage.setItem("loading", true)
    window.location = `${url}/api/v1/login`
  }


menuItems = () => {
  const { activeItem } = this.state

  if(this.props.loading){
    return(
      <Menu.Menu position='right'>
        <Menu.Item name='LOADING!' />
      </Menu.Menu>
        )
  } else if(!localStorage.getItem('token')){
    return(
      <Menu.Menu position='right'>
        <Menu.Item name='LOG IN' active={activeItem === 'LOG IN'} onClick={this.handleLoginClick} />
      </Menu.Menu>
        )
  } else {
    return (
      <Menu.Menu position='right'>
        <Menu.Item name='YOUR MIXTAPES' active={activeItem === 'YOUR MIXTAPES'} onClick={this.handleItemClick} />
        <Menu.Item name='NEW MIXTAPE' active={activeItem === 'NEW MIXTAPE'} onClick={this.handleItemClick} />
        <Menu.Item name='LOG OUT' active={activeItem === 'LOG OUT'} onClick={this.handleItemClick} />
      </Menu.Menu>
    )
  }
}

  render() {
      return(
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Menu>
              <Menu.Item className="">
                <img src="./cassette-logo.svg" className="main-logo-picture"/>
                <p className="main-logo">MIXTAPES AREN'T DEAD</p>
              </Menu.Item>
            </Menu.Menu>
            {this.menuItems()}
          </Menu>
        </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.auth.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
