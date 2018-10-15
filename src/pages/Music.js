import React, { Component } from 'react'
import Navbar from '../navigation/Navbar.js'

import SpotifyPlayer from 'react-spotify-player'

import './Music.css'

export default class extends Component {

    mediaPlayer = () => {
        var size = {
            width: '100%',
            height: 200,
        };
        var view = 'coverart'
        var theme = 'black'
    }

    render() {
        return (
            <div className="musicContainer">
                <Navbar />
                <div className="musicBody">
                    <div>
                        <SpotifyPlayer
                        uri="spotify:track:3FSXtfCfI4rdAy1VtwRgN9"
                        size={this.mediaPlayer.size}
                        view={this.mediaPlayer.view}
                        theme={this.mediaPlayer.theme}
                        />
                    </div>
                </div>
            </div>
        )
    }
}