import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Router } from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'HOME' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(name === 'HOME'){
      this.props.history.push('/login')
    }
    else if(name === 'NEW MIXTAPE'){
      this.props.history.push('/mixtapes/new')
    } else {
      //logout screen
    }
  }

  render() {
    const { activeItem } = this.state

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
            <Menu.Item name='HOME' active={activeItem === 'HOME'} onClick={this.handleItemClick} />
            <Menu.Item name='NEW MIXTAPE' active={activeItem === 'NEW MIXTAPE'} onClick={this.handleItemClick} />
            <Menu.Item name='LOG OUT' active={activeItem === 'LOG OUT'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default Navbar
