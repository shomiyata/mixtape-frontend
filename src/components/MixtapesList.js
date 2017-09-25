import React from 'react'
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

const MixtapesList = () => {


  return(
  <div>
    <Route render={({ history}) => (
    <Button circular icon='add circle' size="massive" type='button' onClick={() => { history.push('/mixtapes/new') }}/>
  )} />
  </div>
  )
}

export default MixtapesList
