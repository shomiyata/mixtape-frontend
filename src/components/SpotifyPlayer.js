import React from 'react'

const SpotifyPlayer = (props) => {
  console.log('props from spotify player', props)
  const srcCode = `https://open.spotify.com/embed/${props.senderUsername}/spotify/playlist/${props.spotifyPlaylistId}`

  return(
  <div>
    <iframe id='spotify-player' src={srcCode} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
  </div>
  )
}

export default SpotifyPlayer
