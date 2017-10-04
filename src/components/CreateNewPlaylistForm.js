import React from 'react'
import { Button, Checkbox, Form, Input, Icon, Message } from 'semantic-ui-react'
import MixtapesModal from './MixtapesModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MixtapesActions from '../actions/mixtapes'
import Mixtapes from '../adapters/mixtapes'
import MixtapesLink from './MixtapesLink'
import Loading from './Loading'
import { Route } from 'react-router-dom'
import Tracks from '../adapters/tracks'
import CreateNewPlaylistModal from './CreateNewPlaylistModal'

class CreateNewPlaylistForm extends React.Component{
  constructor(){
    super()

    this.state = {
      playlistName: '',
      selectedTracks: [],
      searchQuery: '',
      searchResults: ''
    }
  }

  handleNameInput = (e) => this.setState({ playlistName: e.target.value })
  handleSearchInput = (e) => this.setState({ searchQuery: e.target.value })

  handleSearch = () => {
    Tracks.searchTracks(this.state.searchQuery, localStorage.getItem('token'))
    .then(res => this.setState({
      searchResults: res
    }))
  }

  handleSelection = (e) => {
    const specificTrack = this.state.searchResults.tracks.items.filter(track => track.id === e.target.id)
    this.setState({ selectedTracks: [...this.state.selectedTracks, specificTrack[0]] })
  }

  render(){
    console.log('selected tracks', this.state.selectedTracks)
    let trackList = ''
    if(this.state.selectedTracks.length > 0){
      trackList = this.state.selectedTracks.map(track => {
        return(
          <Message id="track-listing">
            <Message.Header>
              {track.name} - {track.artists[0].name}
            </Message.Header>
          </Message>
        )
      })
    } else {
      trackList = ''
    }

    const urlMessage = this.props.submittedMixtape ? <MixtapesLink url={this.props.submittedMixtape.url} /> : ''

    return(
      <div>
        {urlMessage}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field >
            <br/>
            <label>Playlist name*</label>
            <input placeholder='Give your new playlist a name' value={this.state.playlistName} onChange={this.handleNameInput} required />
          </Form.Field>
          <Form.Field>
            <label>Search for track</label>
              {/* <Input
                icon={<Icon name='search' onClick={this.handleSearch} inverted circular link />}
                placeholder='Enter a track and artist name for best results' onChange={this.handleSearchInput}
              /> */}
            <input placeholder='Enter a track and artist name for best results' onChange={this.handleSearchInput} value={this.state.searchQuery} id="search-field" required />
            <CreateNewPlaylistModal trackInfo={this.state.searchResults} click={this.handleSearch} handleSelection={this.handleSelection}/>
          </Form.Field>
          <Form.Field>
            <div className="tracks-list">
            <label>Tracks</label>
            {trackList}
            </div>
          </Form.Field>
            <Button type='submit' type='button' onClick={this.handleSubmit}>hit it!</Button>
        </Form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log('state state', state)
  return {
    currentUserId: state.auth.currentUserId,
    playlists: state.mixtapes.playlists,
    submittedMixtape: state.mixtapes.submittedMixtape
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MixtapesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPlaylistForm)
