import React from 'react'
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import MixtapesList from './MixtapesList'
import ActivityFeed from './ActivityFeed'
import { Grid } from 'semantic-ui-react'

const MixtapesListContainer = () => {


  return(
  <div>
    <div className="main-header">your mixtapes.</div>
    <Route render={({ history }) => (
    <Button circular id='add-button-center' icon='add circle' size="massive" type='button' onClick={() => { history.push('/mixtapes/new') }}/>
    )} />
    <div>
      <Grid>
        <Grid.Column width={12}>
          <MixtapesList />
        </Grid.Column>
        <Grid.Column width={4}>
        <ActivityFeed />
        </Grid.Column>
      </Grid>
    </div>
  </div>
  )
}

export default MixtapesListContainer
