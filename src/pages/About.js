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
                    <div>
                        A band of brothers. 3 by blood and 1 by choice. Their individual and collective
                        taste in music creates a sound that will make your ear holes wish they had taste
                        buds. They have many artists to give credit to for their musical inspiration such
                        as Mac Demarco, Tame Impala, and Peach Pit.  Michael Marinos, the oldest of the 4
                        brothers, is the lead guitarist and vocalist in this psychedelic, new age, indie
                        rock band. Before the formation of Dad Bod, Michael was a solo musician, writing
                        his own songs and performing them around Utah. His writing style, experience and
                        passion for music inspired the formation of Dad Bod. Marcus Marinos (aka Father Time),
                        is the second oldest brother and the drummer of the band. He uses his bottled in rage to
                        show the drums who their real daddy is. Marcus’ love of the oldies, rock and roll, and kurt
                        vile, leaks through in his songwriting and his musical execution. The necessity of a drummer
                        in the band required Marcus to step up to the task and learn the skill in a very short amount
                        of time with no prior experience.The amount of progression that Marcus has shown on the drums
                        proves that he is nothing less than a prodigy. Matthew Marinos (aka skinny fingers) is the bass
                        player. Matthew has played the guitar for years and put his skills to use as a bassist in Dad Bod.
                        Matthew had no experience playing the bass before Dad Bod so when the band asked him to play the
                        bass, his exact words were “Yeah..sure”. His skinny fingers now float across the strings like an
                        apple in one of those apple bobbing stations at the carnival. You know? Like one of those things a
                        bunch of people put their faces into and and try to get as many apples as possible? One of those
                        things. The last brother, but definitely not the least, is Luc Orton. Luc’s Beethoven esc piano
                        skills add a nice touch to the bands elegant sound. Luc’s skills and musical knowledge serve the
                        band greatly since the other brothers don’t really know shit about music. This bands new and unique
                        sound is taking Western America by storm, and they don’t plan on stopping anytime soon.
                    </div>

                    <div className="theBoys">
                        <img className="boys" src={Mike} alt="pic of mike" />
                        <h3>Michael Marinos: Guitar, Vocals</h3>
                        <img className="boys" src={Lucas} alt="pic of lucas" />
                        <h3>Lucas Orton: Synth, Vocals</h3>
                        <img className="boys" src={Marcus} alt="pic of marcus" />
                        <h3>Marcus Marinos: Drums, Vocals, Shaker egg</h3>
                        <img className="boys" src={Matt} alt="pic of matt" />
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