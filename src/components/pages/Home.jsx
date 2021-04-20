import React from 'react'
import './Home.css'
import Profile from './../images/me1.png'
import Typed from 'react-typed';
import { Link } from 'react-router-dom'
import ParticleBackground from "./ParticleBackground";

function Home() {
    return (
        <div className='home-wrapper'>
            <div className="info-box">
            <ParticleBackground />
                <div className="circle">
                <img src={Profile} alt="iShah" />
                    </div>
                    <div className="intro-name">
                        <Typed
                            loop={false}
                            typeSpeed={80}
                            backSpeed={20}
                            strings={["Hello, I am Imran Shah."]}
                            smartBackspace
                            shuffle={false}
                            backDelay={1}
                            fadeOut={false}
                            fadeOutDelay={100}
                            loopCount={0}
                            showCursor={false}
                            cursorChar="|"
                        />
                    </div>
                    <div className="intro-text">
                        <span>And <Typed
                            strings={["I'm a Web Developer,", "I'm looking for a permanent role."]}
                            typeSpeed={80}
                            backSpeed={70}
                            backDelay={600}
                            loop
                            smartBackspace
                            showCursor={false}
                            cursorChar="|"
                        /></span>
                    </div>
                    <div >
                         <Link to='/contact'><button className='hire-me'>Hire me</button></Link>
                   </div>
            </div>

        </div>
    )
}

export default Home
