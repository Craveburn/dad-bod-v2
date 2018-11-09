import React, { Component } from 'react'
import Navbar from '../navigation/Navbar.js'

import SpotifyPlayer from 'react-spotify-player'

import './Music.css'

export default class extends Component {


    render() {
        return (
            <div className="musicContainer">
                <Navbar />
                <div className="musicBody">
                    <div>
                        <SpotifyPlayer
                        uri="spotify:track:3FSXtfCfI4rdAy1VtwRgN9"
                        />
                    </div>
                </div>
            </div>
        )
    }
}