import React from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'

class RecommendationsModal extends React.Component {
  constructor(){
    super()

    this.state = { modalOpen: false }
  }

  handleOpen = (e) => {
    e.preventDefault()
    this.props.click()
    this.setState({ modalOpen: true })
  }

  handleClose = (e) => {
    e.preventDefault()
    this.setState({ modalOpen: false })
  }

  handleSelect = (e) => {
    this.props.handleSelection(e)
    this.setState({ modalOpen: false })
  }

  render() {

    console.log('this is track info in rec', this.props.trackInfo)
    let trackContent = ''
    if(this.props.trackInfo){
      trackContent = this.props.trackInfo.tracks.map(track => {
        return(
          <Modal.Content image>
            <Image wrapped size='small' src={track.album.images[0].url} />
            <Modal.Description>
              <Header onClick={this.handleSelect} id={track.id}>{track.name}</Header>
              <p>{track.artists[0].name}</p>
            </Modal.Description>
          </Modal.Content>
        )
      })
    } else {
      trackContent = ''
    }

    return (
      <Modal
        className="scrollbar" id="search-result-modal"
        trigger={<Button onClick={this.handleOpen} circular icon='wizard' color='pink' id='search-button'></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>recommendations..</Modal.Header>
          {trackContent}
      </Modal>
    )
  }
}

export default RecommendationsModal
