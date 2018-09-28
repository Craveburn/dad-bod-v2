import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import Logo from '../pics/Dad-Bod_Red.png'

export default class extends Component {

    render() {
        return (
            <div className='body'>
                <div className="logoContainer"><Link to="/"> <div className="logo" style={{ backgroundImage: Logo }}></div> </Link></div>
                <h3><Link to="/about">About</Link></h3>
                <h3><Link to="/music">Music</Link></h3>
                <h3><Link to="/shows">Shows</Link></h3>
                <h3><Link to="/merch">Merch</Link></h3>
            </div>
        )
    }
}