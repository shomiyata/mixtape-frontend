import React from 'react'
import { Button, Checkbox, Form, Input, Icon, Message } from 'semantic-ui-react'
import MixtapesModal from './MixtapesModal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MixtapesActions from '../actions/mixtapes'
import Playlists from '../adapters/playlists'
import PlaylistsLink from './PlaylistsLink'
import Loading from './Loading'
import { Route } from 'react-router-dom'
import Tracks from '../adapters/tracks'
import CreateNewPlaylistModal from './CreateNewPlaylistModal'
import RecommendationsModal from './RecommendationsModal'

class CreateNewPlaylistForm extends React.Component{
  constructor(){
    super()

    this.state = {
      playlistName: '',
      selectedTracks: [],
      searchQuery: '',
      searchResults: '',
      result: 'loading',
      recommendations: ''
    }
  }

  handleNameInput = (e) => this.setState({ playlistName: e.target.value })
  handleSearchInput = (e) => this.setState({ searchQuery: e.target.value })

  handleSearch = () => {
    if(this.state.searchQuery){
      Tracks.searchTracks(this.state.searchQuery, localStorage.getItem('token'))
      .then(res => this.setState({
        searchResults: res
      }))
    } else {
      Tracks.searchTracks('Never gonna give you up', localStorage.getItem('token'))
      .then(res => this.setState({
        searchResults: res
      }))
    }
  }

  shuffleAndReturnFiveTracks(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    let randomizedFiveTracks = arr.slice(0, 5).map(track => track.id)
    return randomizedFiveTracks
  }

  getTrackUris(arr){
    let trackUris = arr.map(track => track.id)
    return trackUris
  }

  handleRecommendations = () => {
    if(this.state.selectedTracks.length <= 5){
      Tracks.recommendTracks(this.getTrackUris(this.state.selectedTracks).join(","), localStorage.getItem('token'))
      .then(res => this.setState({
        recommendations: res
      }))
    } else {
      Tracks.recommendTracks(this.shuffleAndReturnFiveTracks(this.state.selectedTracks).join(","), localStorage.getItem('token'))
      .then(res => this.setState({
        recommendations: res
      }))
    }
  }

  handleSelection = (e) => {
    const specificTrack = this.state.searchResults.tracks.items.filter(track => track.id === e.target.id)
    this.setState({ selectedTracks: [...this.state.selectedTracks, specificTrack[0]] })
  }

  handleSelectionRecommendations = (e) => {
    const specificTrack = this.state.recommendations.tracks.filter(track => track.id === e.target.id)
    this.setState({ selectedTracks: [...this.state.selectedTracks, specificTrack[0]] })
  }

  handleSubmit = (e) => {
    const body = {
      "playlistName": this.state.playlistName,
      "trackUris": this.state.selectedTracks.map( track => track.uri )
    }

    Playlists.createNewPlaylist(body, this.props.currentUserId, localStorage.getItem("token"))
    .then(res => {
          if(Object.keys(res)[0] === "snapshot_id"){
            this.setState({ result: 'success' })
          } else {
            this.setState({ result: 'failure'})
          }
    })
    .then(res => {
      this.setState({
        playlistName: '',
        selectedTracks: [],
        searchQuery: '',
        searchResults: '',
        recommendations: ''
      })
    })
  }

  handleDelete = (e) => {
    e.preventDefault()
    let filteredTracks = this.state.selectedTracks.filter(track => track.id !== e.target.name)
    this.setState({ selectedTracks: filteredTracks })
  }

  render(){
    console.log(this.state)
    let trackList = ''
    if(this.state.selectedTracks.length > 0){
      trackList = this.state.selectedTracks.map(track => {
        return(
          <Message id="track-listing">
            <Message.Header className="track">
              {track.name} - {track.artists[0].name}
              <a className='delete' href="#" name={track.id} onClick={this.handleDelete}> delete</a>
            </Message.Header>
          </Message>
        )
      })
    } else {
      trackList = ''
    }

    const playlistMessage = this.state.result === 'success' ? <PlaylistsLink /> : ''

    return(
      <div>
        {playlistMessage}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field >
            <br/>
            <label>Playlist name*</label>
            <input placeholder='Give your new playlist a name' value={this.state.playlistName} onChange={this.handleNameInput} required />
          </Form.Field>
          <Form.Field>
            <label>Search for track*</label>
            <input placeholder='Enter a track and artist name for best results' onChange={this.handleSearchInput} value={this.state.searchQuery} id="search-field" required />
            <CreateNewPlaylistModal trackInfo={this.state.searchResults} click={this.handleSearch} handleSelection={this.handleSelection}/>
            {this.state.selectedTracks.length > 0 ? <RecommendationsModal trackInfo={this.state.recommendations} click={this.handleRecommendations} handleSelection={this.handleSelectionRecommendations}/> : ''}
          </Form.Field>
          <Form.Field>
            <div className="tracks-list">
            {trackList ? <label>Tracks</label> : ''}
            {trackList}
            </div>
          </Form.Field>
            <Button type='submit' color="pink" onClick={this.handleSubmit}>hit it!</Button>
        </Form>
      </div>
    )
  }
}


function mapStateToProps(state) {
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
