import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      hasError: false
   }
 }
componentDidCatch(error, errorInfo){
    this.setState({hasError: true})
}

  render() {
    if(this.state.hasError){
    return (
      <div>Opps, somenthing went wrong</div>
    )}
    return this.props.children
  }
}
