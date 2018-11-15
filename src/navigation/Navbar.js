import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Icon} from 'semantic-ui-react'

import Logo from '../pics/Dad-Bod_Red.png'

export default class extends Component {

    render() {
        return (
            <div className='wrapper'>
                <div className="logoContainer">
                <ul>
                <div className="pageLinks">
                <li><Link to="/" className="logoLink"><span><div className="logo" style={{ backgroundImage: Logo }}></div></span></Link></li>
                <li><Link to="/about" className="page"><span>About</span></Link></li>
                <li><Link to="/music" className="page"><span>Music</span></Link></li>
                <li><Link to="/merch" className="page"><span>Merch</span></Link></li>
                <li><Link to="/contact" className="page"><span>Contact Us</span></Link></li>
                </div>
                <div className="socialLinks">
                <li><a href="https://www.facebook.com/officialdadbod/" className="page" target="_blank" rel="noopener noreferrer"><span><Icon name='facebook f'></Icon></span></a></li>
                <li><a href="https://www.instagram.com/officialdadbod/" className="page" target="_blank" rel="noopener noreferrer"><span><Icon name='instagram'></Icon></span></a></li>
                </div>
                </ul>
                </div>
            </div>
        )
    }
}