import React, { Component } from 'react'
import '../CSS/About.css'

import Navbar from '../navigation/Navbar.js'
import AboutSUI from '../styled-components/AboutSUI.js'

export default class extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <Navbar />
                <div className="aboutBody">
                <AboutSUI/>
                </div>
            </div>
        )
    }
}