import React from 'react'
import SpotifyPlayer from './SpotifyPlayer'
import Mixtapes from '../adapters/mixtapes'


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
      spotifyPlaylistId: ''
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
        senderUsername: res.sender_spotify_username
      }))
  }


  render(){
    console.log('state from mixtapes viewer', this.state)
    return (
      <div>
        <div className="main-header">your mixtape.</div>
        <p>{this.state.note}</p>
        <SpotifyPlayer senderUsername={this.state.senderUsername} spotifyPlaylistId={this.state.spotifyPlaylistId} />
      </div>
    )
  }
}

export default MixtapesViewer
