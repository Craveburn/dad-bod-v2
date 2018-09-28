import React, { Component } from 'react'
import './Home.css'

import TheBoys from '../pics/Dad-bod-boys.jpg'

import Navbar from '../navigation/Navbar.js'

export default class extends Component {
    render() {
        return (
            <div className='containter'>
                <Navbar />
                <div className='homeBody'>
                    <div className="aboutImage" style={{ backgroundImage: TheBoys }}></div>
                    this is the mothafuckin home page
                </div>
            </div>
        )
    }
}