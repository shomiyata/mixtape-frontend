import React from 'react'

function authorize(RenderedComponent, props){
  return class extends React.Component {


    componentDidMount() {
      if (!localStorage.getItem('token') && !localStorage.getItem("loading")) {
        this.props.history.push("/")
      }
    }

  render() {
    console.log('loading state', localStorage.getItem('loading'))
    return (<RenderedComponent {...props} {...this.props}/>)
    }
  }
}

export default authorize
