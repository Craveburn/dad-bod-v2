import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import Logo from '../pics/Dad-Bod_Red.png'

export default class extends Component {

    render() {
        return (
            <div className='wrapper'>
                <div className="logoContainer">
                <ul>
                <li><Link to="/" className="page"><span><div className="logo" style={{ backgroundImage: Logo }}></div></span></Link></li>
                <li><Link to="/about" className="page"><span>About</span></Link></li>
                <li><Link to="/music" className="page"><span>Music</span></Link></li>
                <li><Link to="/shows" className="page"><span>Shows</span></Link></li>
                <li><Link to="/merch" className="page"><span>Merch</span></Link></li>
                </ul>
                </div>
            </div>
        )
    }
}