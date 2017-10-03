import React from 'react'
import { Message } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const MixtapesLink = (props) => {
  console.log(props)
  if(props.email && props.url){
     return (<Message
       color='teal'
        icon='hand spock'
        header='Your mixtape is now live and sent via email!'
        content={`http://localhost:3001/mixtapes/listen?${props.url}`}
      />)
  } else if(props.url) {
       return (<Message
         color='teal'
          icon='hand spock'
          header='Your mixtape is now live!'
          content={`http://localhost:3001/mixtapes/listen?${props.url}`}
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
