import React from 'react'
import { Button } from 'semantic-ui-react'

const PlaylistCreateButton = (props) => {

  function handleClick() {
    localStorage.setItem("mixtapeId", props.spotifyPlaylistId)
    localStorage.setItem("playlistName", props.playlistName)
  }

  return(
      <Button size='large' name="add-playlist" color='yellow' as="a" href={"http://localhost:3000/api/v1/permission/"} onClick={handleClick}>add to Spotify</Button>
  )
}

export default PlaylistCreateButton
