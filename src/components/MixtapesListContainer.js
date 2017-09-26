import React from 'react'
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import MixtapesList from './MixtapesList'

const MixtapesListContainer = () => {


  return(
  <div>
    <div className="main-header">your mixtapes.</div>
    <Route render={({ history }) => (
    <Button circular id='add-button-center' icon='add circle' size="massive" type='button' onClick={() => { history.push('/mixtapes/new') }}/>
    )} />
    <MixtapesList />
  </div>
  )
}

export default MixtapesListContainer
