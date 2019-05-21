import React, { Component } from 'react'
import Navbar from '../navigation/Navbar.js'

import SpotifyPlayer from 'react-spotify-player'

import '../CSS/Music.css'

export default class extends Component {


    render() {
        return (
            <div className="musicContainer">
                <Navbar />
                <div className="musicBody">
                    <div>
                        <SpotifyPlayer
                        uri="spotify:album:5cJWerB6ToI8T1aQwF6kaB"
                        />
                    </div>
                </div>
            </div>
        )
    }
}