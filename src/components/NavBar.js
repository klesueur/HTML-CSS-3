import React, {Component} from 'react' 
import './Navbar.css' 

export default class NavBar extends Component {


    render() {
        return (
            <div>
                <div className='navbar'>
                    <h1 className='app-name'> NavBar </h1>
                    <div className='navbar-button-container'>
                        <button className='navbar-button'> Home </button>
                        <button className='navbar-button'> About </button>
                        <button className='navbar-button'> Contact </button>
                    </div>
                </div>
            </div>
        )
    }
}