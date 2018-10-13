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
                    <img src={TheBoys}></img>
                    <p>this is the mothafuckin home page</p>
                </div>
            </div>
        )
    }
}