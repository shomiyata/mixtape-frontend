import React from 'react'
import Auth from '../adapters/auth'

class MixtapesContainer extends React.Component {

  componentDidMount(){
    //if currentUser isn't defined...
    const code = Auth.decipherCode(this.props)
    const payload = { code: code }

    Auth.login(payload)
      .then(res => console.log(res))
      //set state current user and token

    //else, do nothing
  }


  render(){
    return(
      <div></div>
    )
  }
}

export default MixtapesContainer
