import React from 'react'

const SpotifyPlayer = (props) => {

  const srcCode = `https://open.spotify.com/embed/${props.user}/spotify/playlist/${props.spotifyPlaylistId}`

  return(
  <div>
    <iframe src={srcCode} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
  </div>
  )
}
