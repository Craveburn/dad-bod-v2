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
            <div className='aboutContainer'>
                <Navbar />
                <div className="aboutBody">
                    <h1>Dad bod is a band.</h1>
                    <div className="theBoys">
                        <img className="boys" src={Mike} />
                        <h3>Michael Marinos: Guitar, Vocals</h3>
                        <img className="boys" src={Lucas} />
                        <h3>Lucas Orton: Synth, Vocals</h3>
                        <img className="boys" src={Marcus} />
                        <h3>Marcus Marinos: Drums, Vocals, Shaker egg</h3>
                        <img className="boys" src={Matt} />
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