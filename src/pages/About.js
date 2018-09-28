import React, { Component } from 'react'
import './About.css'
import { SocialIcon } from 'react-social-icons'

import Lucas from '../pics/LucasOrton.jpg'
import Marcus from '../pics/MarcusMarinos.jpg'
import Matt from '../pics/MatthewMarinos.jpg'
import Mike from '../pics/MichaelMarinos.jpg'

import Navbar from '../navigation/Navbar.js'

export default class extends Component {
    render() {
        return (
            <div className='container'>
                <Navbar />
                <div className="aboutBody">
                    <h1>Dad bod is a band.</h1>
                    <div className="theBoys">
                        <div className="mikey" style={{ backgroundImage: Mike }}></div>
                        <h3>Michael Marinos: Guitar, Vocals</h3>
                        <div className="lucas" style={{ backgroundImage: Lucas }}></div>
                        <h3>Lucas Orton: Synth, Vocals</h3>
                        <div className="marcus" style={{ backgroundImage: Marcus }}></div>
                        <h3>Marcus Marinos: Drums, Vocals, Shaker egg</h3>
                        <div className="matt" style={{ backgroundImage: Matt }}></div>
                        <h3>Matthew Marinos: Bass, Vocals</h3>
                    </div>
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