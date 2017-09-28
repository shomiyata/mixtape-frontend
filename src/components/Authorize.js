import React from 'react'

function authorize(RenderedComponent, props){
  return class extends React.Component {
    componentWillMount() {
      if (!localStorage.getItem('token')) {
        this.props.history.push("/")
      }
    }
    render() {

      return (<RenderedComponent {...props} {...this.props}/>)

    }
  }
}

export default authorize
