import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Router } from 'react-router-dom';
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'
import { bindActionCreators } from 'redux'

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

  render() {
    const { activeItem } = this.state

    if(!localStorage.getItem('token')){
      return(
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Menu>
              <Menu.Item className="">
                <img src="./cassette-logo.svg" className="main-logo-picture"/>
                <p className="main-logo">MIXTAPES AREN'T DEAD</p>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item name='LOG IN' active={activeItem === 'LOG IN'} onClick={this.handleItemClick} href="http://localhost:3000/api/v1/login" />
            </Menu.Menu>
          </Menu>
        </Segment>
      )
    } else {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Menu>
            <Menu.Item className="">
              <img src="./cassette-logo.svg" className="main-logo-picture"/>
              <p className="main-logo">MIXTAPES AREN'T DEAD</p>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='YOUR MIXTAPES' active={activeItem === 'YOUR MIXTAPES'} onClick={this.handleItemClick} />
            <Menu.Item name='NEW MIXTAPE' active={activeItem === 'NEW MIXTAPE'} onClick={this.handleItemClick} />
            <Menu.Item name='LOG OUT' active={activeItem === 'LOG OUT'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar)
