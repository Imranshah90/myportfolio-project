import React from 'react'
import './NavBar.css'
import { SiLinkedin, SiFacebook,SiInstagram,SiTwitter } from "react-icons/si";

function Footer() {
    return (
        <div className='footer'>
           <div className="footer-contentWrapper">
                <h3>Social media</h3>
                <div className="icons-box">
                <a href="https://twitter.com/login?redirect_after_login=https%3A%2F%2Fads.twitter.com%2Flogin&hide_message=1" target='_blank' rel="noreferrer"> <SiTwitter /></a>
                <a href="https://www.instagram.com/accounts/login/" target='_blank' rel="noreferrer"> <SiInstagram /></a>
                <a href="https://www.facebook.com/syedimran.shah.716/" target='_blank' rel="noreferrer"> <SiFacebook /></a>
                <a href="https://www.linkedin.com/in/imran-shah-96aaa7158/" target='_blank' rel="noreferrer"> <SiLinkedin /></a>
                </div>
           </div>
        </div>
    )
}

export default Footer
