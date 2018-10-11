import React, { Component } from 'react'
import './Home.css'

import Navbar from '../navigation/Navbar.js'

import TheBoys from '../pics/Dad-bod-boys.jpg'


export default class extends Component {
    render() {
        return (
            <div className='container'>
                <Navbar />
                <div className='homeBody'>
                    <span><div className="aboutImage" style={{ backgroundImage: TheBoys }}></div></span>
                    <span><p>this is the mothafuckin home page</p></span>
                </div>
            </div>
        )
    }
}