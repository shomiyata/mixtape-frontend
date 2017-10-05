import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import frontUrl from '../adapters/fronturl'

 class MixtapesList extends React.Component {


   render(){
     const playlistCards = this.props.mixtapes.map(mixtape => {
        return (
          <Card href={frontUrl} + '/mixtapes/listen?' + {mixtape.url} target="_blank">
            <Image src={mixtape.playlist_picture ? mixtape.playlist_picture : "../../default_album_cover.jpg"} />
            <Card.Content>
              <Card.Header>
                {mixtape.name}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  {mixtape.playlist_name}
                </span>
              </Card.Meta>
              <Card.Description>
                {mixtape.note? mixtape.note.slice(0, 75) + "..." : ''}
              </Card.Description>
            </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='mail outline' />
                 {mixtape.recipient_email}
               </a>
             </Card.Content>
          </Card>
      )})

     return(
      <div>
          <Card.Group id="playlist-cards" >
            {this.props.mixtapes? playlistCards : 'Loading'}
          </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mixtapes: state.mixtapes.mixtapes,
  }
}

export default connect(mapStateToProps)(MixtapesList)
