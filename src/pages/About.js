import React, { Component } from 'react'
import './About.css'
import { SocialIcon } from 'react-social-icons'
import PicoBoys from '../pics/Dad-bod-boys.jpg'

import Navbar from '../navigation/Navbar.js'

export default class extends Component {
    render() {
        return (
            <div className='container'>
                <Navbar />
                <div className="aboutBody">
                    <h1>Dad bod is a band.</h1>
                    <div className="aboutImage" style={{ backgroundImage: PicoBoys }}></div>
                    <div className="social">
                        <SocialIcon network="instagram" url="https://www.instagram.com/officialdadbod/" />
                        <SocialIcon network="facebook" url="https://www.facebook.com/officialdadbod/" />
                        <SocialIcon network="soundcloud" url="https://soundcloud.com/officialdadbod/" />
                    </div>
                </div>
            </div>
        )
    }
}