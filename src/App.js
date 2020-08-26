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
        spinning: !this.state.spinning
      })
    }



  render() {
    return(
      <div>
        <NavBar /> 
        <div className={this.state.spinning ? 'spinning-square' : 'square'} onClick={this.handleSpin}></div>
        <div className='square-circle'></div>
        <div className='heart'></div>
      </div>
    )
  }
}
