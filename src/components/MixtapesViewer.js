import React from 'react'
import SpotifyPlayer from './SpotifyPlayer'
import Mixtapes from '../adapters/mixtapes'
import MixtapesNoteModal from './MixtapesNoteModal'
import PlaylistCreateButton from './PlaylistCreateButton'

class MixtapesViewer extends React.Component {
  constructor(){
    super()

    this.state = {
      spotifyPlaylistId: '',
      playlistName: '',
      mixtapeName: '',
      senderName: '',
      mixtapeNote: '',
      senderUsername: '',
      spotifyPlaylistId: '',
      ownerUsername: ''
    }
  }

  componentDidMount(){
    Mixtapes.getPlaylistForRecipient(this.props.location.search.slice(1))
      .then(res => this.setState({
        spotifyPlaylistId: res.spotify_playlist_id,
        playlistName: res.playlist_name,
        mixtapeName: res.name,
        senderName: res.sender_name,
        mixtapeNote: res.note,
        senderUsername: res.sender_spotify_username,
        ownerUsername: res.owner_username
      }))
  }


  render(){
    console.log('state from mixtapes viewer', this.state)
    return (
      <div>
        <div className="main-header">{this.state.mixtapeName}</div>
        <div className="sub-header">your mixtape from {this.state.senderName}.</div>
        <SpotifyPlayer ownerUsername={this.state.ownerUsername} spotifyPlaylistId={this.state.spotifyPlaylistId} />
        <div className="main-button-center">
          <PlaylistCreateButton mixtapeName={this.state.mixtapeName} spotifyPlaylistId={this.state.spotifyPlaylistId}/>
          {this.state.mixtapeNote? <MixtapesNoteModal content={this.state.mixtapeNote} /> : ''}
        </div>
      </div>
    )
  }
}

export default MixtapesViewer
