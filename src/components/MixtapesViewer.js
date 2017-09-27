import React from 'react'
import SpotifyPlayer from './SpotifyPlayer'
import Mixtapes from '../adapters/mixtapes'
import MixtapesNoteModal from './MixtapesNoteModal'

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
      // .then(res => console.log(res))
      .then(res => this.setState({
        spotifyPlaylistId: res.spotify_playlist_id,
        playlistName: res.playlist_name,
        mixtapeName: res.playlist_name,
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
        <div className="main-header">your mixtape from {this.state.senderName}.</div>
        <SpotifyPlayer ownerUsername={this.state.ownerUsername} spotifyPlaylistId={this.state.spotifyPlaylistId} />
        {this.state.mixtapeNote? <MixtapesNoteModal content={this.state.mixtapeNote} /> : ''}
      </div>
    )
  }
}

export default MixtapesViewer
