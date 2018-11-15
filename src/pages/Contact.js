import React, { Component } from 'react'
import Navbar from '../navigation/Navbar.js'

import ContactSUI from '../styled-components/ContactSUI.js'

export default class extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <ContactSUI/>
                </div>
            </div>
        )
    }
}