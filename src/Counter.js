import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {
          counter: 0
        }
      }
    
      increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
      }

  render() {
    return (
      <div>
          <button className='btn btn-primary px-5' onClick={this.increaseCounter}>{this.state.counter}</button>
      </div>
    )
  }
}
