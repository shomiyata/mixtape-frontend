import React from 'react'
import { Message } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import frontUrl from '../adapters/fronturl'

const MixtapesLink = (props) => {
  console.log(props)
  if(props.email && props.url){
     return (<Message
       color='teal'
        icon='hand spock'
        header='Your mixtape is now live and sent via email!'
        content={`${frontUrl}/mixtapes/listen?${props.url}`}
      />)
  } else if(props.url) {
       return (<Message
         color='teal'
          icon='hand spock'
          header='Your mixtape is now live!'
          content={`${frontUrl}/mixtapes/listen?${props.url}`}
        />)
  } else {
    return (<Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
    )
  }
}

export default MixtapesLink
