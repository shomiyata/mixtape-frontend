import React from 'react'
import { Button } from 'semantic-ui-react'
import url from '../adapters/url'

const PlaylistCreateButton = (props) => {

  function handleClick() {
    localStorage.setItem("mixtapeId", props.spotifyPlaylistId)
    localStorage.setItem("mixtapeName", props.mixtapeName)
  }

  return(
      <Button size='large' name="add-playlist" color='yellow' as="a" href={`${url}/permission/`} onClick={handleClick}>add to Spotify</Button>
  )
}

export default PlaylistCreateButton
