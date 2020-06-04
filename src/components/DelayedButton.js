import React, { Component } from 'react'

export default class DelayedButton extends Component {
  
  handleClick = (e) => {
    e.persist()
    window.setTimeout( () => {
      this.props.onDelayedClick(e)
    }, this.props.delay)

  }
  
  render() {
    console.log(this.props)
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}
