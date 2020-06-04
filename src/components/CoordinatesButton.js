import React, { Component } from "react"

export default class CoordinatesButton extends Component {
  
  handleClick = (e) => {
   this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  
  
  render() {
   console.log(this.props) 
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}