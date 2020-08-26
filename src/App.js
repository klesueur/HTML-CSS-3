import React, {Component} from 'react'
import './components/reset.css'
import './App.css'
import NavBar from './components/NavBar' 

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      spinning: false
    }
    this.handleSpin = this.handleSpin.bind(this)
  }

    handleSpin () {
      this.setState({
        spin: !this.state.spinning
      })
    }



  render() {
    return(
      <div>
        <NavBar /> 
        <div className='square' onClick={() => this.handleSpin()}></div>
        <div className='heart'></div>
        <div className='square-click'></div>
      </div>
    )
  }
}
