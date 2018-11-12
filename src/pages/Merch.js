import React, { Component } from 'react'

import Navbar from '../navigation/Navbar.js'
import MerchSUI from '../styled-components/MerchSUI'

import '../CSS/Merch.css'

export default class extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="aboutMerch">
                    <MerchSUI/>
                </div>
            </div>
        )
    }
}