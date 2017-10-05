import React from 'react'
import { Message } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const PlaylistsLink = () => {
     return (<Message
       color='pink'
        icon='video play outline'
        header="Your playlist has been made!"
        content="Click on the 'your Spotify Playlists' to select it"
      />)
}

export default PlaylistsLink
