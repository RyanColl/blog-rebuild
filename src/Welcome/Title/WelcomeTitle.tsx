import React from "react";
import { Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll'
const WelcomeTitle = (props: any) => {
    const scrollDown = () => {
        scroll.scrollToBottom()
    }
    return(
        <div id='welcome-title' className='welcome-title'>
            <span className='welcome'>WELCOME</span>
            <span className='to'>TO</span>
            <span className='possession'>REACTIVE SOLUTIONS'</span>
            <div className='welcome-banner'><span>FULL</span><span>STACK</span><span>BLOG</span></div>
            <span className='enjoy'>Enjoy a Large Repository of Online <Link to='/blog'><b>Blogs</b></Link></span>
            <span onClick={scrollDown} className='featured'>FEATURED</span>
        </div>
    )
}
export default WelcomeTitle;