import React from 'react'
import { Message } from 'semantic-ui-react'
import MixtapesForm from './MixtapesForm'

const MixtapesFormContainer = () => (
  <div>
    <div className="main-header">send a mixtape.</div>
    <Message id="mixtapes-form-container">
        <MixtapesForm />
    </Message>
  </div>
)

export default MixtapesFormContainer
