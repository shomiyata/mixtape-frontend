import React from 'react'

const SpotifyPlayer = (props) => {
  console.log('props from spotify player', props)
  const srcCode = `https://open.spotify.com/embed/user/${props.ownerUsername}/playlist/${props.spotifyPlaylistId}`

  return(
  <div>
    <iframe id='spotify-player' src={srcCode} width="40%" height="500px" frameborder="0" allowtransparency="true"></iframe>
  </div>
  )
}

export default SpotifyPlayer
